<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>article page</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="./style/demo_a.css?v=<?php echo time(); ?>">
</head>
<body>
    <div class="title-area">
        <div class="title">
        <h2><?php if(isset($_GET['series_title'])){
            $_SESSION["s_t"]=$_GET['series_title'];
            echo $_SESSION["s_t"];
            }else{
                echo $_SESSION["s_t"];
            }?></h2>
        </div>
        <div class="blank1"></div>
    </div>
    
    <div class="article-area">
    <?php 
    //sign in & find db
    $servername = "db";
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
    
    if ($result->num_rows > 0 ) {
    while ($row = $result->fetch_assoc()) {
            $title = $row['title']; 
            echo '<div class="demo-block"><div class="block-title"><div class="title"><p>'.$row['title']. '</p></div>'.
           '<div class="update"><a href="article_update.php?article_title='.urldecode($title).'"><i class="fa-solid fa-file-pen"></i></a></div>'.'<div class="del-article"><i class="fas fa-trash"></i></div></div>'.
            '<hr>'.
            '<div class="content"><p style="white-space: pre-line;">'.$row['content'].'</p></div></div>';
            // echo $row['created_at'];
        }
    } else {
        echo "No article. <h1>JUST DO IT.</h1>";
    }
    ?>
    </div>
        <div class="exit-area">
            <a href="article_up.php"><i class="fa-solid fa-file-import"></i><h3>upload exitement</h3></a>
            <a href="profile.php"><i class="fa-solid fa-door-open"></i><h3>go back go back</h3></a>
        </div>
        <script>
    let deleteOrNot = document.querySelectorAll(".del-article");
    deleteOrNot.forEach((deleting) => {
        deleting.addEventListener("click", (event) => {
            var response = confirm("Do you really want to delete this series?");
            if(response){
                let articleTitle = event.target.closest(".block-title").querySelector(".title").innerText;
                location.replace("del_article.php?article_title=" + encodeURIComponent(articleTitle));
            }else{
                alert('fail to delete');
            }
            });
    });
</script>
</body>

</html>