<?php
session_start();
echo'<h1>'.'HELLO'.'</h1>';
echo '<h2>'.$_SESSION['acc'].'</h2>';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login sucess</title>
    <style>
    img {
    max-width: 100%;
    max-height: 100%;
    }
    .avatar {
    height: 200px;
    width: 200px;
    }

    </style>
</head>
<body>
    <div class="avatar"><img src="<?php echo 'avatar/'.$_SESSION['acc'] . '.jpg'; ?>" alt=""></div>
    <h3>hello,i am <?php echo $_SESSION['acc']?> this is my personal page</h3>
    <h3><a href="upload.php">fill/change the profile!</a></h3>
</body>

</html>