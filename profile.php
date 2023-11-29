<?php
session_start();
// echo'<h1>'.'HELLO'.'</h1>';
echo '<h2>'.$_SESSION['acc'].'</h2>';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login sucess</title>
    <style>

    img:hover {
    transform: scaleX(-1);
    }
    .avatar img{
    height: 200px;
    width: auto;
    border-radius: 50%;
    }

    </style>
</head>
<body>
    <div class="avatar"><img src="<?php echo 'avatar/'.$_SESSION['acc'] . '.jpg'; ?>" alt=""></div>
    <!-- <h2><?php echo $_SESSION['acc']?> </h2> -->
    
    <?php 
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
    $sql = "SELECT * FROM user_profile WHERE account_name = '$userId'";//select acc information
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<p>Introduction: " . $row['intro'] . "</p>";//row and col
        }
    } else {
        echo "Profile not found.";
    }
    $sql2 = "SELECT * FROM series WHERE account_name = '$userId'";
    $result2 = $conn->query($sql2);
    while($row=mysqli_fetch_assoc($result2)){
        $series_title = $row['series_title'];
        $series_content = $row['series_content'];
        
        echo '<a href="demo_a.php?series_title='.urlencode($series_title).'">'.$series_title.'</a>';
        echo '<div>'.$series_content.'</div>';
    }
    

    // echo '<h2><div><a href=" ">'. $_SESSION['title']."</a></div></h2>";
    // echo "<div>". $_SESSION['s_intro']."</div>";
    //article part

    ?>
    <h3><a href="upload.php">fill/change the profile!</a></h3>
    <h3><a href="series.php">creat series!</a></h3>

</body>

</html>