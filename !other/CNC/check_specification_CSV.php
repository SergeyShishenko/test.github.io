<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG</title>
    <link rel="shortcut icon" href="working.bmp" type="image/x-icon">    

</head>
<body>
<pre>
<?php

// $m1 = array('Наташа', 'Марина', 'Катя', 'Анжела', 'Виктория'); 
// var_dump($m1); 
// $m2 = array('Наташа', 'Катя', 'Анжела');
// var_dump($m2);
// foreach ($m1 as $name) {
//     echo $name . (in_array($name, $m2) ? ' - Есть' : ' - Нет').'<br>';
// }

// if (strcasecmp($var1, $var2) == 0) {
//     echo '$var1 равно $var2 при сравнении без учёта регистра';
// }


echo "<br>**************<br>";
// !other\CNC\check_specification_CSV.php
$row = 1;
// $arrstr[];
// $arrAllCSV[];
if (($handle = fopen("test.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {  // строка  до 1000 символов    
        if ($row > 1){
            // echo "<br>Строка $row: -> ";
            // $num = count($data);        
            // for ($c=0; $c < $num; $c++) {
            //     echo "_" . $data[$c] ;
            // } 
            // $result = preg_replace('/[^ a-zа-я\d.]/ui', '', $string );
            $data[0]=preg_replace('/[^ a-zа-я\d.]/ui', '',trim(str_replace(",", ".", $data[0])));// № Заказа
            $data[1]=preg_replace('/[^ a-zа-я\d.]/ui', '',trim(str_replace(",", ".", $data[1])));// № Изделия
            $data[2]=preg_replace('/[^ a-zа-я\d.]/ui', '',trim(str_replace(",", ".", $data[2])));// № СЕ/пСЕ
            $data[3]=preg_replace('/[^ a-zа-я\d.]/ui', '',trim(str_replace(",", ".", $data[3])));// № Детали
            $data[4]=preg_replace('/[^ a-zа-я\d.]/ui', '',trim(str_replace(",", ".", $data[4])));// № Детали
            $data[5]=preg_replace('/[^ a-zа-я\d.]/ui', '',trim(str_replace(",", ".", $data[5])));// № Детали
            $data[6]=preg_replace('/[^ a-zа-я\d.]/ui', '',trim(str_replace(",", ".", $data[6])));// № Детали
            // echo  " (№ Заказа: ". $order.") " ;          
            // echo  " (№ Изделия: ". $product.") " ;          
            // echo  " (№ СЕ/пСЕ: ". $SE .") ";          
            // echo  " (№ Детали: ". $numpart.") " ;          
            // echo  " (Длина: ". $DL .") ";          
            // echo  " (Ширина: ". $DH.") " ;          
            // echo  " (Толщина: ". $DS .") "; 
            // if (preg_replace('/[^ a-zа-я\d.]/ui', '',trim(str_replace(",", ".", $data[5]))) == 1673.5) {
            //     echo  " (Равно ". $data[5] .") ";
            // }
            $arrAllCSV[]=$data;         
       }
       $row++;
    }
    fclose($handle);
    // var_dump($arrAllCSV);
}
$arrCHPU=['1.1_32_1','1.1_31_1','1.1_1_2','1.5_32_1','5.1_3_1','3.7_80_1'];
foreach ($arrCHPU as $var2){
// $var2='1.1_32';substr_count($text, 'is')
echo substr_count($var2, '_')."<br>";// количество "_"
$var2=substr($var2,0,strrpos($var2, '_'));// удаление послнднего символа после "_" и его тоже
    $find=false;

    foreach ($arrAllCSV as $str) {
        // echo $str[2]."_".$str[3].'<br>';

        $var1=$str[2]."_".$str[3];
        
        if (strcasecmp($var1, $var2) == 0) {
        echo "$var1 ok! <br>";
        $find=true;
        }
    }
    if (!$find){ echo "$var2 нет в спецификации <br>";}
}

// $foo = "0123456789a123456789b123456789c";
// echo $foo."<br>";
// var_dump(substr($foo,0,strrpos($foo, '7')));
?>
</pre>
</body>
</html>