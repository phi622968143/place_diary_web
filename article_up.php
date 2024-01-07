<?php session_start();?>
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
        <form action="article_up.php" method="post" onsubmit="false">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" required>
            <label for="content">Content</label>
            <textarea name="record" id="content" rows="4" cols="50" placeholder="What's in Ur Mind" required></textarea>
            <input type="submit" value="Upload" name="submit" class="submit">
        </form>
        <!-- <button onclick="changetolink();">link</button> -->
    </div>
</body>
    <script>
        // function changetolink(e){
        //     text = (document.all) ? document.selection.createRange().text : document.getSelection(); 
        //     console.log(text);
        //     // document.getElementsByName("record")
        // }
    //     function changetolink() {
    //     var selectedText = (document.all) ? document.selection.createRange().text : document.getSelection().toString();
    //   alert(selectedText);
    //     if (selectedText) {
    //         var linkURL = prompt("Enter the URL for the link:", "http://");
    //         if (linkURL) {
    //             var linkElement = document.createElement("a");
    //             linkElement.href = linkURL;
    //             linkElement.textContent = selectedText;

    //             var contentTextArea = document.getElementById("content");
    //             var content = contentTextArea.value;
    //             var start = contentTextArea.selectionStart;
    //             var end = contentTextArea.selectionEnd;

    //             contentTextArea.value = content.substring(0, start) + linkElement.outerHTML + content.substring(end);
    //         }
    //     }
    // }
    </script>
</html>
<?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        //link db
        $servername = "db";
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
        // if ($q) {
        //     // echo $c;
        // }else{
        //     echo "f";
        // }
        echo '<a class="back" href="demo_a.php">'.'back to demo'.'</a>'; 
    }