<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Profile</title>
</head>
<body>
    <h2>creat series</h2>
    <!-- enctype="multipart/form-data" -->
    <form action="series.php" method="post">
        title of series <input type="text" name="title" ><br>
        Introduction: <textarea name="intro" rows="4" cols="50"></textarea><br>
        <input type="submit" value="Upload" name="submit">
    </form>
    <h3><a href="profile.php">back to series!</a></h3>

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

