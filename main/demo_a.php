<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php $t=isset($_SESSION["s_t"]) ? $_SESSION["s_t"] : $_GET['series_title']; echo $t; ?></title>
</head>
<body>

    <?php 
    //sign in & find db
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "test1";

    $conn = new mysqli($servername, $username, $password, $db);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $conn->set_charset("utf8mb4");
    if(isset($_GET['series_title'])){
    $_SESSION["s_t"]=$_GET['series_title'];}
    $s=$_SESSION["s_t"];
    $a=$_SESSION['acc'];
    $sql = "SELECT * FROM article WHERE (series= '$s') AND (acc='$a')";//select acc information
    $result = $conn->query($sql);
   
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<h2>".$row['title']."</h2>";
            echo "<p>".$row['content']."</p>";
        }
    } else {
        echo "No article. <h1>JUST DO IT.</h1>";
    }
    // echo '<h2><div><a href=" ">'. $_SESSION['title']."</a></div></h2>";
    // echo "<div>". $_SESSION['s_intro']."</div>";
    //article part
    echo '<a href="article.php">'."upload exitement".'</a>';
    ?>
    
    <h3><a href="profile.php">go back go back</a></h3>
</body>

</html>
