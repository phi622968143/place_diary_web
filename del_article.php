<?php 
    session_start();
    //connect to db 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "test1";

    $conn = new mysqli($servername, $username, $password, $db);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }  
    $conn->set_charset("utf8mb4");
    
    $userId = $_SESSION['acc'];
    $title=$_GET['title'];
    $del="DELETE FROM article WHERE  (acc = '$userId') AND (title='$title')";
    $r=$conn->query($del);
    
    header("Location: demo_a.php");