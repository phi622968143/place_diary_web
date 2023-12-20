<?php
// Start the session
session_start();
?>
<?php
include("config.conf");
// If not logged in, display a login form or redirect to the login page
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
    $pepper=get_cfg_var("pepper");
    $a = $_POST['account'];
    $p = $_POST['pwd'];
    $pwd_peppered=hash_hmac("sha256",$p,$pepper);
    $_SESSION['acc']=$a;
    $_SESSION['pwd']=$pwd_peppered;
    $sql = "SELECT * FROM my_table WHERE account='$a'";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $row=$result->fetch_assoc();
        $pwd_hashed=$row['pwd_hashed'];
        if( $pwd_hashed==$pwd_peppered){
        echo "Login successful!";
        header("Location: profile.php");
        }
    } else {
        echo "Login failed. Invalid credentials.";
        header("Location: in.html");
    }
}
?>
