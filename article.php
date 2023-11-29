<?php session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>upload</title>
</head>
<body>
    <form action="article.php" method="post" onsubmit="false">
        title <input type="text" name="title" ><br>
        content <textarea name="record" rows="4" cols="50"></textarea><br>
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

        $name=$_SESSION['acc'];
        $t=$_POST['title'];
        $c=$_POST['record'];
        $series_title = isset($_SESSION["s_t"]) ? $_SESSION["s_t"] :" ";
        $sql = "INSERT INTO article (acc,series,title,content) VALUES ('$name', '$series_title','$t', '$c')";
        $q=mysqli_query($conn,$sql);
        if ($q) {
            // echo "Entry!";
        }else{
            echo "f";
        }
        echo '<a href="demo_a.php">'.'back to demo'.'</a>'; 
    }