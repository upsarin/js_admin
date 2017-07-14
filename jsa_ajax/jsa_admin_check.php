<?
session_start();
if(!is_numeric($_SESSION['user']['id']) || empty($_SESSION['user']['id'])){
    $response = false;
} else {
    $response = true;
}
echo $response;
?>