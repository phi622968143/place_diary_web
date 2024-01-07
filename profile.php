<?php session_start(); //to get session?>
<?php

//check if in
if (!isset($_SESSION['acc'])) {
    header('Location: in.html'); // 如果未登入，重定向到登入頁面
    exit();
}

//clear session(err with safari)
if (isset($_GET['logout'])) {
    $_SESSION = array(); // clear
    session_destroy();

    // 刪除 session cookie
    // if (isset($_COOKIE[session_name()])) {
    //     setcookie(session_name(), '', time()-3600, '/');
    // }

    // // 生成新的 session ID
    // session_regenerate_id(true);

    header('Location: in.html');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login sucess</title>
    <link rel="stylesheet" href="./style/profile.css?v=<?php echo time(); ?>">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
</head>
<body>
<!--print avatar-->
<main>
    <section class="main-area"> <!--設定名稱為main-area的box-->
    <div class="avatar"><img src="avatar/<?php echo $_SESSION['acc'];//usrname,echo=print?>.jpg"></div><!--名稱為avatar的box裏面有一張圖-->
    <div class="blankspace-1"></div> <!--先放一個box看以後要放什麼再改-->
    </section>
</main>
 
<div class="namearea"> <!--設定名稱為namearea的box-->
    <div class="myarea">
    <?php
    //29-38 connect to db 
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
    $sql = "SELECT * FROM user_profile WHERE account_name = '$userId'";//select acc information
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo '<strong><div class="my-name">'.$_SESSION['acc']." ".'</div></strong>'.'<div class="my-intro">' . $row['intro'] . "</div>";//print usrname and intro
        }
    } else {
        echo "Profile not found.";
    } ?>
    
    </div>
</div>

<div class="btn-area"><!--設定名稱為btn-area的box-->
    <div class="btn"><!--btn放在btn-area裏-->
        <p>
          <a href="profile_upload.php"><i class="fa-solid fa-user-pen"></i>edit profile!</a>
        </p>
        <p>
          <a href="series_upload.php"><i class="fa-solid fa-pen-to-square"></i>creat series!</a>
        </p>
    </div>
</div>

<div class="series">
    
    <?php 
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
   
    $sql2 = "SELECT * FROM series WHERE account_name = '$userId'";//get usrs series
    $result2 = $conn->query($sql2);
    while($row=$result2->fetch_assoc()){//print series by each row.
        $series_title = $row['series_title'];//get series_title
        $series_content = $row['series_content'];//get series_content
        $_SESSION['series_title']= $series_title;
        echo '<div class="my-block"><div class="series-title"><a class="link" href="demo_a.php?series_title='.urlencode($series_title).'">'.$series_title.'</a>'.
        ' <div class="alert"><i class="fas fa-trash"></i></div></div>'.'<div class="series_content">'.$series_content.'</div></div>';//print series_title
        
    }
    ?>
    <div class="blankspace-2"></div>
</div>

<div class="btn-area"><!--設定名稱為btn-area的box-->
    <div class="btn"><!--btn放在btn-area裏-->
        <p>
          <a href="profile.php?logout=true"><i class="fa-solid fa-door-open" style="color: #ffd478;"></i></a>
        </p>
    </div>
</div>

<script>
    let deleteOrNot = document.querySelectorAll(".alert");
    deleteOrNot.forEach((deleting) => {
        deleting.addEventListener("click", (event) => {
            var response = confirm("Do you really want to delete this series?");
            if(response){
                let seriesTitle = event.target.closest(".series-title").querySelector(".link").innerText;
                location.replace("del_series.php?series_title=" + encodeURIComponent(seriesTitle));
            }else{
                alert('fail to delete');
            }
            });
    });
</script>
</body>
</html>
