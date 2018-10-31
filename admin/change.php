<?php
//подключаем конфигурационный файл бд
define('__ROOT__', dirname(dirname(__FILE__))); 
require_once(__ROOT__.'/DATA/TABLES/configDB.php'); 

$dbconn=dbconnect();
//проверяем $_POST["content_txt"] на пустое значение
if(isset($_POST["content_txt"]) && strlen($_POST["content_txt"])>0)
{

    // очищаем значение переменной, PHP фильтры FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH
    // (Удаляют тэги, при необходимости удаляет или кодирует специальные символы)

    $contentToSave = filter_var($_POST["content_txt"],FILTER_SANITIZE_STRING);
    $tbl = filter_var($_POST["tbl"],FILTER_SANITIZE_STRING);
    $field = filter_var($_POST["field"],FILTER_SANITIZE_STRING);
    $fieldid = filter_var($_POST["fieldid"],FILTER_SANITIZE_STRING);
    $id = filter_var($_POST["id"],FILTER_SANITIZE_STRING);
    $action = filter_var($_POST["action"],FILTER_SANITIZE_STRING);
    $parent = explode("-", filter_var($_POST["parent"],FILTER_SANITIZE_STRING));
    // $clickedID = explode("_", $id);
    // $DbNumberID = $clickedID[1];

    echo $id  ; //response число или ""
    exit();
    // Обновляем запись
    // UPDATE  `udefault`.`head` SET  `name_head` =  'Раздел 1' WHERE  `head`.`head_id` =52;
    // if(mysqli_query($dbconn,"INSERT INTO head(name_head) VALUES('".$contentToSave."')"))
    // echo "UPDATE  ".$tbl." SET  ".$field." =  '".$contentToSave."' WHERE  ".$fieldid."` ='.$id.'";
    // TRIM('region_name')
   
    if ($action=="action")
    {
        $insert_id=$tbl;  
        if ($tbl=="obj_download" or $tbl=="obj_alias" or $tbl=="obj_in_addition" or $tbl=="obj_furnitur_prop"){$parent[0]="obj_id";$parent[1]=$id;$insert_id="obj"; }
        
        $sql = "INSERT INTO  `$tbl`(`$field`,`$parent[0]`) VALUES ('$contentToSave','$parent[1]')";
        $insert_id=$insert_id.'_'.'00';
        echo $insert_id ; //response
        // header('HTTP/1.1 400 Zapros dla dobavleniy! '.$sql);
        exit();

        
        // "INSERT INTO head(name_head) VALUES('".$contentToSave."')"
    }
    else
    {
        
    
        $sql = "UPDATE `$tbl` SET `$field`= TRIM('$contentToSave') WHERE `$fieldid`=$id";
    }
    

    // echo $sql;
    if(mysqli_query($dbconn,$sql))
    {
        //Record is successfully inserted, respond to ajax request
        $insert_id = mysqli_insert_id($dbconn); //Get ID of last inserted record from MySQL 
        mysqli_close($dbconn);
        echo $insert_id ; //response

    }else{
        //вывод ошибки
        // echo $sql;
        //header('HTTP/1.1 500 '.mysql_error());
        header('HTTP/1.1 500 Looks like mysql error, could not insert record!'.$sql);
        exit();
    }

}

?>