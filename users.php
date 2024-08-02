<?php

header('Access-Control-Allow-Origin: *');

$server = 'localhost';
$user = 'root';
$password = '';
$dbname = 'kodego_db';

$con = mysqli_connect($server, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET':
        $sql = "SELECT * FROM `users`";
        break;
    case 'POST':

        $function = $_POST['function'];

        if($function == "insert"){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $password = $_POST['password'];

            $sql = "INSERT INTO `users` ( `name`,`email`,`password`,`role`) VALUES ('$name','$email','$password','user')";

        }else if($function == "reg-admin"){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $password = $_POST['password'];

            $sql = "INSERT INTO `users` ( `name`,`email`,`password`,`role`) VALUES ('$name','$email','$password','admin')";

        }

        else if($function == "update"){
            $uname = $_POST['uname'];
            $uemail = $_POST['uemail'];
            $upassword = $_POST['upassword'];
            $uid = $_POST['uid'];

                $sql = "UPDATE `users` SET name = '$uname', email='$uemail', password = '$upassword' WHERE id = '$uid'";
        }else if($function == "delete"){
            $delid = $_POST['delid'];
            $sql = "DELETE FROM users WHERE id = '$delid'";
        }else if($function == 'login'){
            $email = $_POST['email'];
            // $password = $_POST['password'];
            $sql = "SELECT * from `users` WHERE `email`='$email'";

        }else if($function == "adminlogin"){
            $email = $_POST['email'];
            $sql = "SELECT * from `users` WHERE email = '$email' AND role = 'admin'";
        }

        break;
    }



$result = mysqli_query($con, $sql);

echo "[";

for($i = 0; $i < mysqli_num_rows($result); $i++){
    echo($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
}

echo "]";

?>