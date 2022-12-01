<?php
//include 'database.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

define('HOST', 'localhost');
define('USER', 'root');
define('PASS', '');
define('NAME', 'dummyin2_db_datatable');

$db = new mysqli(HOST ,USER ,PASS ,NAME);
if ($db->connect_errno) {
  die("Database connection error:" . $db->connect_errno);
}

//echo 'test';

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata,true);
  // Validate.
  if(trim($request['title']) === '')
  {
    return http_response_code(400);
  }
  $title = mysqli_real_escape_string($db, trim($request['title']));
  $userId = mysqli_real_escape_string($db, (int)$request['userId']);  
  $completed = mysqli_real_escape_string($db, $request['completed']);
  $sql = "INSERT INTO user (id,userId,title, completed) VALUES (null,'$userId',$title,'$completed')";
  if($db->query($sql))
  {
    http_response_code(201);
    $user = [
    'id' => mysqli_insert_id($db),'title' => $title,
    'userId' => $userId,'completed' => $completed];
    echo json_encode($product);
  }
  else
  {
    http_response_code(422);
  }
}
?>