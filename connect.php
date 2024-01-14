<?php
ob_start();
if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['submit']))//determine post and submit method
{
  // Create connection
  $servername = "db";
  $username = "root";
  $password = "";
  $db="test1";

  $conn = new mysqli($servername, $username, $password,$db);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $pepper=getenv("pepper");
  $a=$_POST['account'];
  $p=$_POST['pwd'];
  $pwd_peppered=hash_hmac("sha256",$p,$pepper);
  $sql="INSERT INTO my_table (account, pwd_hashed) VALUES ('$a', '$pwd_peppered');";
  $q=mysqli_query($conn,$sql);//exeu c&i
  if ($q) {
      header("Location: in.html");
  }else{
      echo "fail and try again";
  }
}
?>     
