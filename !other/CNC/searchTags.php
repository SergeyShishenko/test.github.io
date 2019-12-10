<?php
// searchTags.php
// Это немного более полезно при сканировании большой строки для всех вхождений между тегами.
function getStrsBetween($s,$s1,$s2=false,$offset=0) {
    /*====================================================================
    Функция сканирования строки на предмет элементов, инкапсулированных в пару тегов

    getStrsBetween(string, tag1, <tag2>, <offset>

    Если второй тег не указан, то совпадение между идентичными тегами

    Возвращает массив, индексированный с инкапсулированным текстом, который в свою очередь
    суб-массив, содержащий позицию каждого элемента.

    Notes:
    strpos($needle,$haystack,$offset)
    substr($string,$start,$length)

    ====================================================================*/

    if( $s2 === false ) { $s2 = $s1; }
    $result = array();
    $L1 = strlen($s1);
    $L2 = strlen($s2);

    if( $L1==0 || $L2==0 ) {
        return false;
    }

    do {
        $pos1 = strpos($s,$s1,$offset);

        if( $pos1 !== false ) {
            $pos1 += $L1;

            $pos2 = strpos($s,$s2,$pos1);

            if( $pos2 !== false ) {
                $key_len = $pos2 - $pos1;

                $this_key = substr($s,$pos1,$key_len);

                if( !array_key_exists($this_key,$result) ) {
                    $result[$this_key] = array();
                }

                $result[$this_key][] = $pos1;

                $offset = $pos2 + $L2;
            } else {
                $pos1 = false;
            }
        }
    } while($pos1 !== false );

    return $result;
}





// $arr=getStrsBetween("W#89{ ::WTs WS=2 #8015=0 #1=1875 #2=503 #3=-16 #8101=0 #8096=0 #201=1 #205=1014 #40=1 #8136=0 #8135=0 #9521=0 }W","{","}",$offset=0);
$arr=getStrsBetween("W#89{ ::WTs WS=2 #8015=0 #1=1875 #2=503 #3=-16 #8101=0 #8096=0 #201=1 #205=1014 #40=1 #8136=0 #8135=0 #9521=0 }W","W#","}W",$offset=0);
echo '<pre>';
// print_r($arr);
var_dump($arr);
echo '</pre>';  


$arr=getStrsBetween("SIDE#1{
    W#89{ ::WTs WS=1 #8015=0 #1=783 #2=503 #3=-16 #8101=0 #8096=0 #201=1 #205=1014 #40=1 #8136=0 #8135=0 #9521=0 }W
    W#2201{ ::WTl #8015=0 #1=58.5 #2=503 }W
    W#2201{ ::WTl #8015=0 #1=58.5 #2=58.5 }W
    W#2201{ ::WTl #8015=0 #1=1507.5 #2=58.5 }W
    W#2201{ ::WTl #8015=0 #1=1507.5 #2=503 }W
    W#2201{ ::WTl #8015=0 #1=783 #2=503 }W
    W#89{ ::WTs WS=2 #8015=0 #1=1875 #2=503 #3=-16 #8101=0 #8096=0 #201=1 #205=1014 #40=1 #8136=0 #8135=0 #9521=0 }W
    W#2201{ ::WTl #8015=0 #1=1574.5 #2=503 }W
    W#2201{ ::WTl #8015=0 #1=1574.5 #2=58.5 }W
    W#2201{ ::WTl #8015=0 #1=2175.5 #2=58.5 }W
    W#2201{ ::WTl #8015=0 #1=2175.5 #2=503 }W
    W#2201{ ::WTl #8015=0 #1=1875 #2=503 }W
    }SIDE","SIDE#1{","}SIDE",$offset=0);
echo '<pre>';
// print_r($arr);
var_dump($arr);
echo '</pre>';  


$arr=getStrsBetween("SIDE#1{
    W#89{ ::WTs WS=1 #8015=0 #1=783 #2=503 #3=-16 #8101=0 #8096=0 #201=1 #205=1014 #40=1 #8136=0 #8135=0 #9521=0 }W
    W#2201{ ::WTl #8015=0 #1=58.5 #2=503 }W
    W#2201{ ::WTl #8015=0 #1=58.5 #2=58.5 }W
    W#2201{ ::WTl #8015=0 #1=1507.5 #2=58.5 }W
    W#2201{ ::WTl #8015=0 #1=1507.5 #2=503 }W
    W#2201{ ::WTl #8015=0 #1=783 #2=503 }W
    W#89{ ::WTs WS=2 #8015=0 #1=1875 #2=503 #3=-16 #8101=0 #8096=0 #201=1 #205=1014 #40=1 #8136=0 #8135=0 #9521=0 }W
    W#2201{ ::WTl #8015=0 #1=1574.5 #2=503 }W
    W#2201{ ::WTl #8015=0 #1=1574.5 #2=58.5 }W
    W#2201{ ::WTl #8015=0 #1=2175.5 #2=58.5 }W
    W#2201{ ::WTl #8015=0 #1=2175.5 #2=503 }W
    W#2201{ ::WTl #8015=0 #1=1875 #2=503 }W
    }SIDE","W#","}W",$offset=0);
echo '<pre>';
// print_r($arr);
var_dump($arr);


echo "<br />";

foreach($arr as $key => $value) {
    
        echo rtrim($key);
       
    echo "<br />";
}

echo '</pre>';  
?>
