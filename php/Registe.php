<?php

include_once("Database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $name = trim($request->name);
    $pwd = mysqli_escape_string($mysqli, trim($request->pwd));
    $email = mysqli_escape_string($mysqli, trim($request->email));
    $sql = "INSERT INTO users(name,password,email) VALUES ('$name','$pwd','$email')";
    if($mysqli->query($sql)==TRUE){
        $authdata = [
            'name' => $name,
            'pwd' => '',
            'email' => $email,
            'Id' => mysqli_insert_id($mysqli)
        ];
        print(json_encode($authdata));
    }
}

?>