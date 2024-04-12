<?php

include_once('Database.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata)){
    $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
    $email = mysqli_real_escape_string($mysqli, trim($request->usename));
    $sql = "SELECT * FROM users where email='$email' and password='$pwd'";
    if($result = mysqli_query($mysqli,$sql)){
        $rows = array();
        while($rows = mysqli_fetch_assoc($result)){
            $rows[] = $row;
        }
        print(json_encode($rows));
    }
    http_response_code(404);

}

?>