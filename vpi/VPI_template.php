<?php
session_start();
/**
 * PHPExcel
 *
 * Copyright (c) 2006 - 2015 PHPExcel
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A Particul_furnitur_objAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @category   PHPExcel
 * @package    PHPExcel
 * @copyright  Copyright (c) 2006 - 2015 PHPExcel (http://www.codeplex.com/PHPExcel)
 * @license    http://www.gnu.org/licenses/old-licenses/lgpl-2.1.txt	LGPL
 * @version    ##VERSION##, ##DATE##
 */

/** Error reporting */
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

define('EOL',(PHP_SAPI == 'cli') ? PHP_EOL : '<br />');

date_default_timezone_set('Europe/Moscow');

define('__ROOT__', dirname(dirname(__FILE__))); 
require_once(dirname(__ROOT__).'/DATA/TABLES/configDB.php'); 
$sess_id=session_id();
$dbconn=dbconnect();
/** PHPExcel_IOFactory */

if(isset($_POST['ids']))//генерация xls
{
    require_once dirname(dirname(__FILE__)) . '/Classes/PHPExcel/IOFactory.php';
    $ids=$_POST['ids'];
    $data =  array();
    $Result_user = mysqli_query($dbconn,"SELECT *  FROM `user` WHERE `sess_id` = '$sess_id'");//MySQL запрос
    $row_user = mysqli_fetch_array($Result_user);//получаем все записи из таблицы
    $s_id=$row_user['s_id'];

  // выбираем все записи текущей сессии
    $sql = "SELECT *  FROM `user_vpi` WHERE `s_id` = $s_id";
    $User_vpi_Result=mysqli_query($dbconn,$sql);

    if($User_vpi_Result)
    {  
        while ($rowsUser_vpi = mysqli_fetch_array($User_vpi_Result))// заполнение массива пока есть записи текущей сессии
            {     
                $furnitur_id=$rowsUser_vpi['obj_furnitur_prop_id'];
                $furnitur_count=$rowsUser_vpi['count_obj'];
                $sql = "SELECT *  FROM `obj_furnitur_prop` WHERE `obj_furnitur_prop_id` = $furnitur_id";// из таблицы вся фурнитура
                $Result=mysqli_query($dbconn,$sql); 
                $rows = mysqli_fetch_array($Result); 
                array_push($data,
                    array('articul_furnitur_obj'=> $rows['articul_furnitur_obj'],
                          'name_furnitur_obj_prop'=>$rows['name_furnitur_obj_prop'],
                          'made_furnitur_obj'=>$rows['made_furnitur_obj'],
                          'color_obj_prop'=>$rows['color_obj_prop'],
                          'unit_obj_prop'=>$rows['unit_obj_prop'],
                          'count'=>$furnitur_count
                        )  
                );
                // $data[]=array('articul_furnitur_obj'=> $rows['articul_furnitur_obj'],
                //                         'name_furnitur_obj_prop'=>$rows['name_furnitur_obj_prop'],
                //                         'made_furnitur_obj'=>$rows['made_furnitur_obj'],
                //                         'color_obj_prop'=>$rows['color_obj_prop'],                                        
                //                         'unit_obj_prop'=>$rows['unit_obj_prop'],
                //                         'count'=>$furnitur_count
                //                         ) ;  
                // $data += array('articul_furnitur_obj'=> $rows['articul_furnitur_obj'],
                //                         'name_furnitur_obj_prop'=>$rows['name_furnitur_obj_prop'],
                //                         'made_furnitur_obj'=>$rows['made_furnitur_obj'],
                //                         'color_obj_prop'=>$rows['color_obj_prop'],                                        
                //                         'unit_obj_prop'=>$rows['unit_obj_prop'],
                //                         'count'=>$furnitur_count)
                //                          ; 
                // $stack = array("orange", "banana");
                // array_push($stack, "apple", "raspberry");             
            }
    }else{//вывод ошибки 
            header('HTTP/1.1 500 Looks like mysql error, could not insert record5!'.$sql." -> ".mysqli_error($dbconn));
            exit();
    }


    

    // for($i=0;$i<=count($ids)/2;$i=$i+2) 
    // { 
    //     // $obj_furnitur = explode(",", $ids[$i]);
    //     $furnitur_id = $ids[$i];
    //     $furnitur_count = $ids[$i+1];

    //     $sql = "SELECT *  FROM `obj_furnitur_prop` WHERE `obj_furnitur_prop_id` = $furnitur_id";
    //     $Result=mysqli_query($dbconn,$sql);
        
    //     if($Result)
    //     {  
    //         while ($rows = mysqli_fetch_array($Result))// заполнение массива
    //             {                
    //                 $data[]=array('articul_furnitur_obj'=> $rows['articul_furnitur_obj'],
    //                                         'name_furnitur_obj_prop'=>$rows['name_furnitur_obj_prop'],
    //                                         'made_furnitur_obj'=>$rows['made_furnitur_obj'],
    //                                         'color_obj_prop'=>$rows['color_obj_prop'],                                        
    //                                         'unit_obj_prop'=>$rows['unit_obj_prop'],
    //                                         'count'=>$furnitur_count
    //                                         ) ;  
    //                 // array_push($stack, "apple", "raspberry");             
    //             }
    //     }else{//вывод ошибки 
    //             header('HTTP/1.1 500 Looks like mysql error, could not insert record5!'.$sql." -> ".mysqli_error($dbconn));
    //             exit();
    //     }
    // } 
    // mysqli_free_result($Result);
    // генерация
        // echo date('H:i:s') , " Загрузка из шаблона Excel5" , EOL;
        $objReader = PHPExcel_IOFactory::createReader('Excel5');
        $objPHPExcel = $objReader->load("templates/VPI_template.xls");




        // echo date('H:i:s') , "Добавление новых данных в шаблон" , EOL;
        // $data = array();

        // $data = array(array('articul_furnitur_obj'	=> 'арт. 5000502-07-750',
        // 					'name_furnitur_obj_prop'		=> 'Конфирмат 7,0Х50', //наименование
        //                     'made_furnitur_obj'	=> 'МДМ-КОМПЛЕКТ', //поставщик
        //                     'unit_obj_prop' 	=> 'шт.', //ед.изм
        //                     'count' 	=> 100 //кол-во
        // 				   ),
        // 			  array('articul_furnitur_obj'	=> 'арт. 5000502-07-701',
        //                     'name_furnitur_obj_prop'		=> 'Эксцентрик 15 плита 16мм', //наименование
        //                     'made_furnitur_obj'	=> 'МДМ-КОМПЛЕКТ', //поставщик
        //                     'unit_obj_prop' 	=> 'шт.', //ед.изм
        //                     'count' 	=> 20 //кол-во
        // 				   ),
        // 			  array('articul_furnitur_obj'	=> 'арт. 5000502-04-107',
        //                     'name_furnitur_obj_prop'		=> 'MOVENTO BLUMOTION 40 КГ 400 ММ', //наименование
        //                     'made_furnitur_obj'	=> 'BLUM', //поставщик
        //                     'unit_obj_prop' 	=> 'комплект', //ед.изм
        //                     'count' 	=> 2 //кол-во
        // 				   )
        // 			 );

        $objPHPExcel->getActiveSheet()->setCellValue('D1', PHPExcel_Shared_Date::PHPToExcel(time()));

        $baseRow = 4;
        foreach($data as $r => $dataRow) {
            $row = $baseRow + $r;
            $objPHPExcel->getActiveSheet()->insertNewRowBefore($row,1);

            // $objPHPExcel->getActiveSheet()->setCellValue('D'.$row, $r+1)
            $objPHPExcel->getActiveSheet()->setCellValue('E'.$row, $dataRow['articul_furnitur_obj'])
                                        ->setCellValue('F'.$row, $dataRow['name_furnitur_obj_prop'])
                                        ->setCellValue('G'.$row, $dataRow['made_furnitur_obj'])
                                        ->setCellValue('H'.$row, $dataRow['color_obj_prop'])
                                        ->setCellValue('I'.$row, $dataRow['unit_obj_prop'])
                                        ->setCellValue('J'.$row, $dataRow['count']);
        
                                        


                                        //   ->setCellValue('E'.$row, '=C'.$row.'*D'.$row);
        }
        $objPHPExcel->getActiveSheet()->removeRow($baseRow-1,1);//удаление строки
        // // Always include the complete filter range!
        // // Excel does support setting only the caption
        // // row, but that's not a best practise...
        // $objPHPExcel->getActiveSheet()->setAutoFilter($objPHPExcel->getActiveSheet()->calculateWorksheetDimension());


        // echo date('H:i:s') , " Запись в формат Excel5 " , EOL;
        $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
        // $objWriter->save(str_replace('.php', '.xls', __FILE__));
        // echo dirname(__FILE__)."\/vpi-".date('m-d-Y').".xls", EOL;
        $fname="vpi-".date('m-d-Y-H-i-s').".xls";

        $objWriter->save(dirname(__FILE__)."\/".$fname);
        echo "./vpi/".$fname;
        // echo date('H:i:s') , " Файл, записанный из " , str_replace('.php', '.xls', pathinfo(__FILE__, PATHINFO_BASENAME)) , EOL;


        // Echo memory peak usage
        // echo date('H:i:s') , " Пиковое использование памяти: " , (memory_get_peak_usage(true) / 1024 / 1024) , " MB" , EOL;

        // Echo done
        // echo date('H:i:s') , " Запись файла завершена" , EOL;
        // echo 'Файл был создан в дериктории ' , getcwd() , EOL;
        unset($data);
    // генерация
}
elseif (isset($_POST['addids'])) {
    
    $addids=$_POST['addids'];   
    // $adddata = array();
    
    $Result_user = mysqli_query($dbconn,"SELECT *  FROM `user` WHERE `sess_id` = '$sess_id'");//MySQL запрос
    $row_user = mysqli_fetch_array($Result_user);//получаем все записи из таблицы
    $s_id=$row_user['s_id'];
    
    for($i=0;$i<=count($addids)/2;$i=$i+2) 
    { 
        // $obj_furnitur = explode(",", $ids[$i]);
        $furnitur_id = $addids[$i];
        $furnitur_count = $addids[$i+1];

         // echo print_r($addids);
        
        // echo 's_id='.$s_id;

        // INSERT INTO `user_vpi` (`vpi_id`, `s_id`, `obj_furnitur_prop_id`, `count_obj`) VALUES (NULL, '1', '1', '5');
        $sql = "INSERT INTO `user_vpi` (`vpi_id`, `s_id`, `obj_furnitur_prop_id`, `count_obj`) VALUES (NULL, '$s_id', '$furnitur_id', '$furnitur_count')";

        if(mysqli_query($dbconn,$sql))
        {                    
            // $id = mysqli_insert_id($dbconn); //Get ID of last inserted record from MySQL 
            // $html_id = "obj_".$id;
            // $sql = "UPDATE `obj` SET `html_id`='$html_id' WHERE `obj_id`=$id";
            echo print_r($addids);
            
            
        }else{//вывод ошибки                                        
            header('HTTP/1.1 500 Looks like mysql error, could not insert record2! '.$_POST["parent"]." ---".$sql." -> ".mysqli_error($dbconn));
            exit();
        } 
    } //for
    
  

   mysqli_free_result($Result_user); 
}

mysqli_close($dbconn);

?>
