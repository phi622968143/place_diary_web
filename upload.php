<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Profile</title>
</head>
<body>
    <h2>Upload Profile</h2>
    
    <form action="upload.php" method="post" enctype="multipart/form-data">
        Select Avatar: <input type="file" name="avatar" ><br>
        Introduction: <textarea name="intro" rows="4" cols="50"></textarea><br>
        <input type="submit" value="Upload" name="submit">
    </form>

</body>
</html>
<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //link db
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "test1";

    $conn = new mysqli($servername, $username, $password, $db);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $conn->set_charset("utf8mb4");
    //var
    $name=$_SESSION['acc'];
    $intro=$_POST['intro'];
    //img up setting 12 
    $targetDirectory = "avatar/";  
    $targetFile = $targetDirectory . basename($name.'.jpg');
    
    $checkSql = "SELECT intro FROM user_profile WHERE account_name='$name'";
    $checkResult = mysqli_query($conn,$checkSql);
    // echo var_dump($checkResult);
    if ($checkResult->lengths){
        if (move_uploaded_file($_FILES["avatar"]["tmp_name"], $targetFile)) {//file store in FILE table
            echo "檔案已成功上傳。";
        } else {
            echo "上傳失敗。";
        }
        $sql = "INSERT INTO user_profile (account_name,avatar_url,intro) VALUES ('$name', ' $targetFile', '$intro')";
        $q=mysqli_query($conn,$sql);//exe c&i
        if ($q) {
            echo "Entry!";
          }else{
            echo "f";
        }
    }else{
        $updateSql = "UPDATE user_profile SET intro='$intro' WHERE account_name='$name'";
        $updateResult =  mysqli_query($conn,$updateSql);
    }

    header("Location: profile.php");
    //intro upt
}
?>

