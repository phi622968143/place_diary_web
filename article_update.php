<?php session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>upload</title>
    <link rel="stylesheet" href="./style/article_up.css?v=<?php echo time(); ?>">
</head>
<body>
    <div class="container">
        <h2>Create Article</h2>
        <!-- send data and pass title -->
        <form action="article_update.php?article_title=<?php echo $_GET['article_title'];?>" method="post" onsubmit="false">
            <!-- <label for="title">Title</label>
            <textarea name="record" id="content" rows="4" cols="50"></textarea> -->
            <label for="content">Content</label>
            <textarea name="record" id="content" rows="4" cols="50"> <?
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
            $t=$_GET['article_title'];
            $s=$_SESSION["s_t"];
            $update_art = "SELECT content FROM article WHERE title='$t' AND series='$s' AND acc='$name'";
            $result=mysqli_query($conn,$update_art);
            if ($result) {
                $row = $result->fetch_assoc();
                echo $row['content'];
            }else{
                echo "f";
            }?></textarea>
            <input type="submit" value="Upload" name="submit" class="submit">
        </form>
    </div>
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
        //get article_title from post
        $name=$_SESSION['acc'];
        $s=$_SESSION["s_t"];
        $c=$_POST['record'];
        $t=$_GET['article_title'];

        $update_art = "UPDATE article SET content='$c' WHERE title='$t' AND series='$s' AND acc='$name'";
        $q=mysqli_query($conn,$update_art);
        if ($q) {
            echo "success update!";
            // header("Location: demo_a.php");
        }else{
            echo "f";
        }
        echo '<a class="back" href="demo_a.php">'.'back to demo'.'</a>'; 
    }