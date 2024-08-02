<?php
header('Access-Control-Allow-Origin: *');

$server = 'localhost';
$username = 'root';
$password = '';
$dbname = 'kodego_db';

$con = mysqli_connect($server, $username, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        $sql = "SELECT * FROM `services`";
        break;
    case 'POST':
        $function = $_POST['function'];
        if($function == 'insert'){
            $services = $_POST['services'];
            $description = $_POST['description'];

            $img = $_FILES['pic']['name'];
            $target_file = "public/images/".$_FILES["pic"]["name"];
            $file_url = "./images/".$_FILES["pic"]["name"];
            move_uploaded_file($_FILES["pic"]["tmp_name"], $target_file);


            $sql = "INSERT INTO `services`(`image`, `services`, `description`) VALUES ('$file_url','$services', '$description')";

        }else if($function == 'delete'){
            $id = $_POST['id'];

            $sql = "DELETE FROM `services` WHERE `id` = $id";
        }else if($function == 'update'){
            $id = $_POST['upid'];

            $upservices = $_POST['upservices'];
            $updescription = $_POST['updescription'];

            $sql = "UPDATE `services` SET `services`='$upservices', `description`='$updescription' WHERE `id`=$id";

        }
        break;
}

$result = mysqli_query($con, $sql);

if($method == 'GET'){
    echo '[';
    
    for($i = 0; $i < mysqli_num_rows($result); $i++){
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
    }
    echo ']';
}

?>