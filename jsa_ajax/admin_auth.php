<?
    if($_POST){
        if($_POST['login'] == "jsa_admin" && $_POST['pass'] == "qwerty"){
            session_start();
            $_SESSION['user']['id'] = "7";
            $_SESSION['user']['login'] = "jsa_admin";
            $_SESSION['user']['first_name'] = "Max";
            $_SESSION['user']['middle_name'] = "";
            $_SESSION['user']['second_name'] = "Pyatkov";
            $_SESSION['user']['last_login'] = date("Y-m-d H:i:s");
            $_SESSION['user']['permissions'] = 3;
            $data['msg'] = "Successfull auth for user ". $_SESSION['user']['login'] .".";
            $data['answer'] = true;
        } else {
            $data['msg'] = "Sorry, try again later, see u.";
            $data['answer'] = false;
        }
        echo $data['msg'];
    }
?>

