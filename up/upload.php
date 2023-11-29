<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Profile</title>
</head>
<body>
    <h2>Upload Profile</h2>
    
    <form action="upload.php" method="post" enctype="multipart/form-data">
        Select Avatar: <input type="file" name="avatar" required><br>
        Introduction: <textarea name="intro" rows="4" cols="50" required></textarea><br>
        <input type="submit" value="Upload" name="submit">
    </form>

</body>
</html>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // 其他處理
    $targetDirectory = "avatar/";  // 你希望儲存圖片的目錄
    $name=$_SESSION['acc'];
    $targetFile = $targetDirectory . basename($name.'.jpg');

    if (move_uploaded_file($_FILES["avatar"]["tmp_name"], $targetFile)) {
        echo "檔案已成功上傳。";
    } else {
        echo "上傳失敗。";
    }
    header("Location: profile.php");
    // 其他處理
}
?>
