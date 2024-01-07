<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Profile</title>
    <link rel="stylesheet" href="./style/series_upload.css" />
</head>
<body>
    <div class="title"><h2>creat series</h2></div>
    <!-- enctype="multipart/form-data" -->
    <div class="container">
    <form action="series_upload.php" method="post">
        title of series <input type="text" name="title" ><br>
        Introduction: <textarea name="intro" rows="4" cols="50"></textarea><br>
        <input type="submit" value="Upload" name="submit">
    </form>
    </div>
    <div class="go-back">
    <h3><a href="profile.php">back to series!</a></h3>
    </div>
    



</body>
</html>
<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        //link db
        $servername = "db";
        $username = "root";
        $password = "";
        $db = "test1";
    
        $conn = new mysqli($servername, $username, $password, $db);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $conn->set_charset("utf8mb4");

        $name=$_SESSION['acc'];
        $t=$_POST['title'];
        $c=$_POST['intro'];
        $sql = "INSERT INTO series (account_name,series_title,series_content) VALUES ('$name', '$t', '$c')";
        $q=mysqli_query($conn,$sql);
        if ($q) {
            echo "Entry!";
        }else{
            echo "f";
        }
    }
    // header("Location: profile.php");
    //intro upt
?>

