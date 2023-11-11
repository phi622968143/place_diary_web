<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit'])) {
    // Create connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "test1";

    $conn = new mysqli($servername, $username, $password, $db);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $a = $_POST['account'];
    $p = $_POST['pwd'];

    // 在實際應用中，你應該使用安全的方式來處理密碼，例如哈希
    // 在此示例中，僅為演示目的，不建議實際使用
    $sql = "SELECT * FROM my_table WHERE account='$a' AND pwd='$p'";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        echo "Login successful!";
    } else {
        echo "Login failed. Invalid credentials.";
    }
}
?>
