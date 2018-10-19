<?php
//подключаем конфигурационный файл бд
define('__ROOT__', dirname(dirname(__FILE__))); 
require_once(__ROOT__.'/DATA/TABLES/configDB.php'); 

// $dbconn=dbconnect();
//проверяем $_POST["content_txt"] на пустое значение
// if(isset($_POST["content_txt"]) && strlen($_POST["content_txt"])>0)
// {

//     // очищаем значение переменной, PHP фильтры FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH
//     // (Удаляют тэги, при необходимости удаляет или кодирует специальные символы)

    $contentToSave = filter_var($_POST["content_txt"],FILTER_SANITIZE_STRING);
    $tbl = filter_var($_POST["tbl"],FILTER_SANITIZE_STRING);
    $field = filter_var($_POST["field"],FILTER_SANITIZE_STRING);
    $fieldid = filter_var($_POST["fieldid"],FILTER_SANITIZE_STRING);
    $parent = filter_var($_POST["parent"],FILTER_SANITIZE_STRING);
    $href = filter_var($_POST["href"],FILTER_SANITIZE_STRING);
    $order = filter_var($_POST["order"],FILTER_SANITIZE_STRING);
    $id = filter_var($_POST["id"],FILTER_SANITIZE_STRING);
    $htmlid = filter_var($_POST["htmlid"],FILTER_SANITIZE_STRING);
    

//     // Обновляем запись
//     // UPDATE  `u0474172_default`.`head` SET  `name_head` =  'Раздел 1' WHERE  `head`.`head_id` =52;
//     // if(mysqli_query($dbconn,"INSERT INTO head(name_head) VALUES('".$contentToSave."')"))
//     // echo "UPDATE  ".$tbl." SET  ".$field." =  '".$contentToSave."' WHERE  ".$fieldid."` ='.$id.'";
//     // TRIM('region_name')
    
//     $sql = "UPDATE `$tbl` SET `$field`= TRIM('$contentToSave') WHERE `$fieldid`=$id";
//     // echo $sql;
//     if(mysqli_query($dbconn,$sql))
//     {
//         //Record is successfully inserted, respond to ajax request
//         $head_id = mysqli_insert_id($dbconn); //Get ID of last inserted record from MySQL
        
       
//         mysqli_close($dbconn);

//     }else{
//         //вывод ошибки
//         // echo $sql;
//         //header('HTTP/1.1 500 '.mysql_error());
//         header('HTTP/1.1 500 Looks like mysql error, could not insert record!'.$sql);
//         exit();
//     }

// }



// echo 'contentToSave - '.$contentToSave;
// echo '<br>tbl - '.$tbl ;
// echo '<br>field - '.$field ;
// echo '<br>fieldid - '.$fieldid ;
// echo '<br>parent - '.$parent ;
// echo '<br>href - '.$href ;
// echo '<br>order - '.$order ;
// echo '<br>id - '.$id ;




switch ($tbl) {
    case "head":
        echo '<li id="tb-head" class="active">';
        echo '<label for="recipient-href" class="form-control-label">Файл:</label>';
        echo '<input type="text" class="form-control" id="recipient-href" value="'.$href.'" required>';

        echo '<label for="recipient-order" class="form-control-label">Номер по порядку:</label>';
        echo '<input type="text" class="form-control" id="recipient-order" value="'.$order.'" required>';
        echo '</li>';
        break;
    case "category":
        echo '<li id="tb-head" class="active">';
        echo '<label for="recipient-href" class="form-control-label">Файл:</label>';
        echo '<input type="text" class="form-control" id="recipient-href" value="'.$href.'" required>';

        echo '<label for="recipient-parent" class="form-control-label">Родитель:</label>';
        echo '<input type="text" class="form-control" id="recipient-parent" value="'.$parent.'" required>';

        echo '<label for="recipient-order" class="form-control-label">Номер по порядку:</label>';
        echo '<input type="text" class="form-control" id="recipient-order" value="'.$order.'" required>';
        echo '</li>';
        break;
    case "grupp":
        echo '<li id="tb-head" class="active">';
        echo '<label for="recipient-html-id" class="form-control-label">Идентификатор (html_id):</label>';
        echo '<input type="text" class="form-control" id="recipient-html-id" value="'.$htmlid.'" required>';

        echo '<label for="recipient-parent" class="form-control-label">Родитель:</label>';
        echo '<input type="text" class="form-control" id="recipient-parent" value="'.$parent.'" required>';

        echo '<label for="recipient-order" class="form-control-label">Номер по порядку:</label>';
        echo '<input type="text" class="form-control" id="recipient-order" value="'.$order.'" required>';
        echo '</li>';
        break;
    case "obj":
        echo '<br><li id="tb-head" class="active">';

        echo '
        <div class="row">
            <div class="col-md-3">
                <div class="input-group ">
                        <div class="input-group ">
                            <!--<span class="input-group-addon"><i class="glyphicon glyphicon-envelope red"></i></span>-->
                            <span class="input-group-addon">Username</span>
                                <select class="form-control">
                                <option value="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default"><i class="glyphicon glyphicon-refresh"></i></button>
                            </span>
                        </div>
                    </div>
            </div>
            <div class="col-md-3">
                 <div class="input-group ">
                    <div class="input-group ">
                        <!--<span class="input-group-addon"><i class="glyphicon glyphicon-envelope red"></i></span>-->
                        <span class="input-group-addon">Username</span>
                        <input id="inputIcon" type="text" class="form-control" placeholder="Username">
                        <span class="input-group-btn">
                             <button type="button" class="btn btn-default"><i class="glyphicon glyphicon-refresh"></i></button>
                        </span>
                    </div>
                </div>
            </div>
        <div class="col-md-3">
            <div class="input-group ">
                    <div class="input-group ">                       
                        <span class="input-group-addon">Username</span>
                        <input id="inputIcon" type="text" class="form-control" placeholder="Username">
                        <span class="input-group-btn">
                             <button type="button" class="btn btn-default"><i class="glyphicon glyphicon-refresh"></i></button>
                        </span>
                        
                    </div>
                    
                </div>
        </div>
        <div class="col-md-3">
            <div class="input-group ">
                    <div class="input-group ">
                        <!--<span class="input-group-addon"><i class="glyphicon glyphicon-envelope red"></i></span>-->
                        <span class="input-group-addon">Username</span>
                        <input id="inputIcon" type="text" class="form-control" placeholder="Username">
                        <span class="input-group-btn">
                             <button type="button" class="btn btn-default"><i class="glyphicon glyphicon-refresh"></i></button>
                        </span>
                    </div>
                </div>
        </div>
                
                
            </div><!--/row-->
             ';

       
        echo'
        <br>
        <div class="row">
            <div class="col-md-2">
                <label for="recipient-parent" class="form-control-label">Родитель <br>(grupp_id):</label>
                <input type="text" class="form-control" id="recipient-parent" value="'.$parent.'" required>
            </div>
            <div class="col-md-2">
            <label for="recipient-html-id" class="form-control-label">Идентификатор <br>(html_id):</label>
            <input type="text" class="form-control" id="recipient-html-id" value="'.$htmlid.'" required>
            </div>
            <div class="col-md-2">
            <label for="recipient-path_img_obj" class="form-control-label">Путь к изображению <br>(path_img_obj):</label>
            <!--<a href="#"><img class="dashboard-avatar" alt="Usman" src="/dist/images/shablon-alboma-obrazcov_1-v1.png"></a>-->
            <input type="text" class="form-control" id="recipient-path_img_obj" value="'.$i.'" required>
            </div>
            <div class="col-md-2">
            <label for="recipient-fname_img_obj " class="form-control-label">Имя файла<wbr>изображения (fname_img_obj):</label>
            <input type="text" class="form-control" id="recipient-fname_img_obj " value="'.$i.'" required>
            </div>
            <div class="col-md-2">
            <label for="recipient-data_href " class="form-control-label">data_href изображения <br>(data_href_img_obj):</label>
            <input type="text" class="form-control" id="recipient-data_href " value="'.$i.'" required>
            </div>
            <div class="col-md-2">
            <label for="recipient-order" class="form-control-label">Номер по порядку <br>(number_in_order_obj): </label>
            <input type="text" class="form-control" id="recipient-order" value="'.$order.'" required>
            </div>
        </div>
        ';

        // echo '<label for="recipient-parent" class="form-control-label">Родитель (grupp_id):</label>';
        // echo '<input type="text" class="form-control" id="recipient-parent" value="'.$parent.'" required>';

        // echo '<label for="recipient-html-id" class="form-control-label">Идентификатор (html_id):</label>';
        // echo '<input type="text" class="form-control" id="recipient-html-id" value="'.$htmlid.'" required>';
        // echo '<a href="#"><img class="dashboard-avatar" alt="Usman" src="/dist/images/shablon-alboma-obrazcov_1-v1.png"></a>';
        // echo '<label for="recipient-path_img_obj" class="form-control-label">Путь к изображению (path_img_obj):</label>';
        // echo '<a href="#"><img class="dashboard-avatar" alt="Usman" src="/dist/images/shablon-alboma-obrazcov_1-v1.png"></a><input type="text" class="form-control" id="recipient-path_img_obj" value="'.$i.'" required>';

        // echo '<label for="recipient-fname_img_obj " class="form-control-label">Имя файла изображения (fname_img_obj):</label>';
        // echo '<input type="text" class="form-control" id="recipient-fname_img_obj " value="'.$i.'" required>';

        // echo '<label for="recipient-data_href " class="form-control-label">data_href изображения (data_href_img_obj):</label>';
        // echo '<input type="text" class="form-control" id="recipient-data_href " value="'.$i.'" required>';      


        // echo '<label for="recipient-order" class="form-control-label">Номер по порядку (number_in_order_obj): </label>';
        // echo '<input type="text" class="form-control" id="recipient-order" value="'.$order.'" required>';


        // obj_id : int(11)
        // name_obj : varchar(40)
        // grupp_id : int(11)
        // html_id : varchar(255)
        // path_img_obj : varchar(255)
        // fname_img_obj : varchar(255)
        // data_href_img_obj : varchar(255) // detali-profili.php#pr-278

        // fname_img_smoll_obj : varchar(255) // не меняем
        // data_href_img_smoll_obj : varchar(255)// path_img_obj + "thumbs/"

        // obj_def : text
        // number_in_order_obj : int(11)
        // characteristic_obj : text
        // template_obj : varchar(255)
        // img_orientation_obj : varchar(10)
        // img_alt_obj : varchar(255)

        


        echo ' <br>   
        <div class="row">
            <div class="box col-md-12">
                <div class="box-inner">
                    <div class="box-header well" data-original-title="">
                        <h2><i class="glyphicon glyphicon-list-alt"></i> Файлы для скачивания (obj_download)</h2>    
                        <div class="box-icon">
                            <a href="#" class="btn btn-minimize btn-round btn-default"><i
                                    class="glyphicon glyphicon-chevron-down"></i></a>       
                        </div>
                    </div>
                    <div class="box-content">   
                               
                    <table class="table table-striped table-bordered bootstrap-datatable datatable responsive">
                    <thead>
                    <tr>
                        <th>PDF</th>
                        <th>XLS</th>
                        <th>DOC</th>
                        <th>DWG</th>
                        <th>Print</th>
                        <th>PNG</th>
                        <th>ЮРИ-DOC</th>
                        <th>ЮРИ-PDF</th>
                        <th>ЮРИ-XLS</th>
                        <th>Действия</th>                           
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                            <td>
                                <select class="form-control" style="width:100px;">
                                    <option selected value="noPrint">Нет</option>
                                    <option value="">Печать</option>
                                </select>
                            </td>
                            <td>
                                <select class="form-control" style="width:70px;">
                                    <option selected value="noPNG">Нет</option>
                                    <option value="">Да</option>
                                </select>
                            </td>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="" required></td>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="" required></td>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="" required></td>                            
                            <td >
                              <!--  <a class="btn btn-success" href="#">
                                    <i class="glyphicon glyphicon-zoom-in icon-white"></i>
                                    View
                                </a>
                                <a class="btn btn-info" href="#">
                                    <i class="glyphicon glyphicon-edit icon-white"></i>
                                    Edit
                                </a>-->
                                <a class="btn btn-danger" href="#">
                                    <i class="glyphicon glyphicon-trash icon-white"></i>
                                    Удалить
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>  

                    </div>      
                </div>
            </div>            
        </div><!--/row-->'
        ;

        echo ' <br>   
        <div class="row">
            <div class="box col-md-12">
                <div class="box-inner">
                    <div class="box-header well" data-original-title="">
                        <h2><i class="glyphicon glyphicon-list-alt"></i> Псевдонимы (obj_alias)</h2>    
                        <div class="box-icon">
                            <a href="#" class="btn btn-minimize btn-round btn-default"><i
                                    class="glyphicon glyphicon-chevron-down"></i></a>       
                        </div>
                    </div>
                    <div class="box-content">   
                               
                    <table class="table table-striped table-bordered bootstrap-datatable datatable responsive">
                    <thead>
                    <tr>
                        <th>keywords_alias</th>
                        <th>Действия</th>                           
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="center"><input type="text" class="form-control" id="recipient-PDF " value="" required></td>
                            <td class="">
                               <!-- <a class="btn btn-success" href="#">
                                    <i class="glyphicon glyphicon-zoom-in icon-white"></i>
                                    View
                                </a>
                                <a class="btn btn-info" href="#">
                                    <i class="glyphicon glyphicon-edit icon-white"></i>
                                    Edit
                                </a>-->
                                <a class="btn btn-danger" href="#">
                                    <i class="glyphicon glyphicon-trash icon-white"></i>
                                    Удалить
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table> 

                    </div>      
                </div>
            </div>            
        </div><!--/row-->'
        ;

      
        echo ' <br>   
        <div class="row">
            <div class="box col-md-12">
                <div class="box-inner">
                    <div class="box-header well" data-original-title="">
                        <h2><i class="glyphicon glyphicon-list-alt"></i> Свойства фурнитуры (obj_furnitur_prop)</h2>    
                        <div class="box-icon">
                            <a href="#" class="btn btn-minimize btn-round btn-default"><i
                                    class="glyphicon glyphicon-chevron-down"></i></a>       
                        </div>
                    </div>
                    <div class="box-content">   
                               
                    <table class="table table-striped table-bordered bootstrap-datatable datatable responsive">
                    <thead>
                    <tr>
                        <th>name_furnitur_obj_prop</th>
                        <th>articul_furnitur_obj</th>
                        <th>made_furnitur_obj</th>
                        <th>url_furnitur_obj_prop</th>                        
                        <th>url_video_obj_prop</th>                        
                        <th>Действия</th>                           
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                            <td><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                          
                            <td><input type="text" class="form-control" id="recipient-PDF " value="" required></td>
                           
                                                  
                            <td >
                              <!--  <a class="btn btn-success" href="#">
                                    <i class="glyphicon glyphicon-zoom-in icon-white"></i>
                                    View
                                </a>
                                <a class="btn btn-info" href="#">
                                    <i class="glyphicon glyphicon-edit icon-white"></i>
                                    Edit
                                </a>-->
                                <a class="btn btn-danger" href="#">
                                    <i class="glyphicon glyphicon-trash icon-white"></i>
                                    Удалить
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>  

                    </div>      
                </div>
            </div>            
        </div><!--/row-->'
        ;
    
        echo ' <br>   
        <div class="row">
            <div class="box col-md-12">
                <div class="box-inner">
                    <div class="box-header well" data-original-title="">
                        <h2><i class="glyphicon glyphicon-list-alt"></i> Параметры дополнений (obj_in_addition)</h2>    
                        <div class="box-icon">
                            <a href="#" class="btn btn-minimize btn-round btn-default"><i
                                    class="glyphicon glyphicon-chevron-down"></i></a>       
                        </div>
                    </div>
                    <div class="box-content">   
                               
                        <table class="table table-striped table-bordered bootstrap-datatable datatable responsive">
                            <thead>
                            <tr>
                                <th>html_in_addition_id</th>
                                <th>path_img_obj_in_addition</th>
                                <th>fname_img_obj_in_addition</th>
                                <th>data_href_img_obj_in_addition</th>                        
                                <th>fname_img_smoll_obj_in_addition</th>
                                <th>data_href_img_smoll_obj_in_addition</th>
                                <th>img_def</th>                                           
                                <th>Действия</th>                           
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class=""><input type="text" class="form-control" id="recipient-PDF " value="" required></td>
                                    <td class="center"><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                                    <td class="center"><input type="text" class="form-control" id="recipient-PDF " value="" required></td>
                                    <td class="center"><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                                    <td class="center"><input type="text" class="form-control" id="recipient-PDF " value="" required></td>
                                    <td class="center"><input type="text" class="form-control" id="recipient-PDF " value="./dist/files/pdf/shablon-alboma-obrazcov.pdf" required></td>
                                
                                    <td class="center"><textarea class="form-control"  name="text"></textarea></td>
                                
                                                        
                                    <td class="center">
                                    <!--  <a class="btn btn-success" href="#">
                                            <i class="glyphicon glyphicon-zoom-in icon-white"></i>
                                            View
                                        </a>
                                        <a class="btn btn-info" href="#">
                                            <i class="glyphicon glyphicon-edit icon-white"></i>
                                            Edit
                                        </a>-->
                                        <a class="btn btn-danger" href="#">
                                            <i class="glyphicon glyphicon-trash icon-white"></i>
                                            Удалить
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table> 

                    </div>      
                </div>
            </div>            
        </div><!--/row-->'
        ;

        echo '</li>';
        break;
        
}



?>