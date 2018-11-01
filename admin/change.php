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

    // echo $id  ; //response - число или "" или "undefined"
    // exit();
    // Обновляем запись
    // UPDATE  `udefault`.`head` SET  `name_head` =  'Раздел 1' WHERE  `head`.`head_id` =52;
    // if(mysqli_query($dbconn,"INSERT INTO head(name_head) VALUES('".$contentToSave."')"))
    // echo "UPDATE  ".$tbl." SET  ".$field." =  '".$contentToSave."' WHERE  ".$fieldid."` ='.$id.'";
    // TRIM('region_name')
   
    if ($action=="action")
    {
        $insert_id=$tbl;  
        if ($tbl=="obj" or $tbl=="obj_download" or $tbl=="obj_alias" or $tbl=="obj_in_addition" or $tbl=="obj_furnitur_prop")
        {
            // $parent[0]="obj_id";
            // $parent[1]=$id;
            // $insert_id="obj";
            if (isset($id))
            {
                //  header('HTTP/1.1 400 ID null! '.$id);
                // echo $insert_id ; //response
                // exit();
                // добавляем новую запись dj все таблицы объекта
                $sql = "INSERT INTO  `obj`(`grupp_id`,`path_img_obj`,`fname_img_obj`,`fname_img_smoll_obj`,`template_obj`,`img_orientation_obj`) VALUES ('$parent[1]','./dist/images/','test.png','test.png','shablony-dokumentov.php','album')";
                if(mysqli_query($dbconn,$sql))
                {
                    //Record is successfully inserted, respond to ajax request
                    $insert_id = mysqli_insert_id($dbconn); //Get ID of last inserted record from MySQL 
                    // $parent[1] = $insert_id;
                    // $sql = "INSERT INTO  `obj_alias`(`obj_id`) VALUES ('$insert_id')";
                    mysqli_query($dbconn, "INSERT INTO  `obj_alias`(`obj_id`) VALUES ('$insert_id')");
                    // if ($result = mysqli_query($dbconn, "INSERT INTO  `obj_alias`(`obj_id`) VALUES ('$insert_id')")) {
                    //     /* очищаем результирующий набор */
                    //     mysqli_free_result($result);
                    // }else{header('HTTP/1.1 500 Looks like mysql error, could not insert record!'.mysqli_error($dbconn));exit();}
                    mysqli_query($dbconn, "INSERT INTO  `obj_download`(`obj_id`) VALUES ('$insert_id')");
                    // if ($result = mysqli_query($dbconn, "INSERT INTO  `obj_download`(`obj_id`) VALUES ('$insert_id')")) {
                    //     /* очищаем результирующий набор */
                    //     mysqli_free_result($result);
                    // }else{header('HTTP/1.1 500 Looks like mysql error, could not insert record!'.mysqli_error($dbconn));exit();}
                    mysqli_query($dbconn, "INSERT INTO  `obj_furnitur_prop`(`obj_id`) VALUES ('$insert_id')");
                    // if ($result = mysqli_query($dbconn, "INSERT INTO  `obj_furnitur_prop`(`obj_id`) VALUES ('$insert_id')")) {
                    //     /* очищаем результирующий набор */
                    //     mysqli_free_result($result);
                    // }else{header('HTTP/1.1 500 Looks like mysql error, could not insert record!'.mysqli_error($dbconn));exit();}
                    mysqli_query($dbconn, "INSERT INTO  `obj_in_addition`(`obj_id`) VALUES ('$insert_id')");
                    // if ($result = mysqli_query($dbconn, "INSERT INTO  `obj_in_addition`(`obj_id`) VALUES ('$insert_id')")) {
                    //     /* очищаем результирующий набор */
                    //     mysqli_free_result($result);
                    // }else{header('HTTP/1.1 500 Looks like mysql error, could not insert record!'.mysqli_error($dbconn));exit();}

                    // mysqli_close($dbconn);                 
                    

                }else{
                    //вывод ошибки                    
                    header('HTTP/1.1 500 Looks like mysql error, could not insert record!'.$sql);
                    exit();
                }

                // header('HTTP/1.1 400 NEW! '.$sql);                
                // exit();
            }
        }
        
        $sql = "INSERT INTO  `$tbl`(`$field`,`$parent[0]`) VALUES ('$contentToSave','$parent[1]')";
        // $insert_id=$insert_id.'_'.'00';
        
        // header('HTTP/1.1 400 Zapros dla dobavleniy! '.$sql);
        echo $insert_id ; //response
        // exit();

        
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
        // echo $insert_id ; //response

    }else{
        //вывод ошибки
        // echo $sql;
        //header('HTTP/1.1 500 '.mysql_error());
        header('HTTP/1.1 500 Looks like mysql error, could not insert record!'.$sql);
        exit();
    }

}

?>