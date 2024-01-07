<?php 
    session_start();
    //connect to db 
    $servername = "db";
    $username = "root";
    $password = "";
    $db = "test1";

    $conn = new mysqli($servername, $username, $password, $db);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }  
    $conn->set_charset("utf8mb4");
    
    $userId = $_SESSION['acc'];
    $title=$_GET['series_title'];
    $del="DELETE FROM series WHERE  (account_name = '$userId') AND (series_title='$title')";
    $r=$conn->query($del);
    
    header("Location: profile.php");?>
   