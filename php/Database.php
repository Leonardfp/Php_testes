<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Resquested-With, Content-Type, Accept");

$db_host='localhost';
$db_username='root';
$db_password='9186';
$db_name='Teste';
$mysqli = new mysqli($db_host,$db_name,$db_password,$db_name);
if($mysqli->connect_error){
    die('Error : ('. $mysqli->connect_error . ') ' . $mysqli->connect_error);
}


class database{
  private static $instance; 


 public static function getInstance(){
    if(self::$instance == null){
        self::$instance = new Database();
     }
     return self::$instance;
 }
 
}
$database = Database::getInstance();