<?
if($_POST['page'] && !empty($_POST['page'])) {
    if(file_exists("../jsa_app/layouts/" . $_POST['page'] .".jsat")){
        require_once "../jsa_app/layouts/" . $_POST['page'] .".jsat";
    } else {
        echo "Error, file doesnt exist";
    }

} else {
    echo "Error, sorry pls try again later";
}
?>