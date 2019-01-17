<?php 
// inc-goup-menu.php

function SideMenu($arr,$curr) //правое меню группа
{
 echo'
    <!-- боковое меню начало -->
    <div class="col-md-2" id="navmain-izdeliya">                    
        <div class="bs-sidebar hidden-print affix vertical-menu " role="complementary" >';                                  
    echo'  <ul class="nav bs-sidenav"> '; 
        echo '<li><a href="'.$arr[0]['id'].'">'.$arr[0]['def'].'</a>';
            echo '<ul class="nav">';                                 
                    for ($i=1; $i < count($arr); $i++) { 
                        if($i==$curr){$path="";}else{$path=$arr[$i]['path'];}                                                
              echo '<li><a href="'.$path.$arr[$i]['id'].'">&#9999;&nbsp;'.$arr[$i]['def'].'</a> </li>'; 
                }
         echo'  </ul>
            </li>                           
        </ul>
    </div>                  
</div>
<!-- боковое меню конец -->  .
    ';
}
function SideMenuList($arrlist) // правое меню список групп
{
echo'
    <!-- боковое меню начало -->
    <div class="col-md-2" id="navmain-izdeliya">                    
        <div class="bs-sidebar hidden-print affix vertical-menu " role="complementary" >';                                  
    echo'  <ul class="nav bs-sidenav"> '; 
        foreach ($arrlist as $arr) {          
            echo '<li><a href="'.$arr[0]['id'].'">'.$arr[0]['def'].'</a>';
                echo '<ul class="nav">'; 
                for ($i=1; $i < count($arr); $i++) { 
                            // if($i==$curr){$path="";}else{$path=$arr[$i]['path'];}                                                
                echo '<li><a href="'.$arr[$i]['id'].'">&#9999;&nbsp;'.$arr[$i]['def'].'</a> </li>'; 
                    }                    
            echo'  </ul>
                </li> '; 
        }//foreach $arrlist
    echo'   </ul>
        </div>                  
    </div>
    <!-- боковое меню конец -->  .
    ';
}

function LeftSideMenu($arr)// левое меню -> замена <li class="menu2"> ->   ';LeftSideMenu($styazhka); echo'
{
    echo'
    <li class="menu2">
        <a class="list-group-item sub" href="'.$arr[0]['path'].$arr[0]['id'].'">'.$arr[0]['def'].'</a>;
        <ul class="list-group sub_menu2">
    ';
        for ($i=1; $i < count($arr); $i++) { 
            echo '<li><a class="list-group-item sub" href="'.$arr[$i]['path'].$arr[$i]['id'].'">'.$arr[$i]['def'].'</a> </li>';            
        }  
        echo'
        </ul>
    </li> 
    ';
}


/////////////////////////////////////
    $styazhka=[];
    $styazhka[0]=['path'=>"furnitura-dlya-mebeli-styazhka16.php",
                    'id'=>"#styazhka",
                    'def'=>"СТЯЖКИ"];

    $styazhka[1]=['path'=>"furnitura-dlya-mebeli-styazhka16.php",
                    'id'=> "#styazhka",
                    'def'=>"Стяжка эксцентриковая односторонняя для плит 16 мм"];

    $styazhka[2]=['path'=>"furnitura-dlya-mebeli-styazhka16-dvustoronnyaya.php",
                    'id'=> "#styazhka16-dvustoronnyaya",
                    'def'=>"Стяжка эксцентриковая двухсторонняя для плит 16 мм"];
                
    $styazhka[3]=['path'=>"furnitura-dlya-mebeli-styazhka24.php",
                    'id'=> "#styazhka24",
                    'def'=>"Стяжка эксцентриковая односторонняя для плит 24 мм"];
                
    $styazhka[4]=['path'=>"furnitura-dlya-mebeli-styazhka24-dvustoronnyaya.php",
                    'id'=> "#styazhka24-dvustoronnyaya",
                    'def'=>"Стяжка эксцентриковая двухсторонняя для плит 24 мм"];
                    
    $styazhka[5]=['path'=>"furnitura-dlya-mebeli-styazhka-rafix.php",
                    'id'=> "#rafix",
                    'def'=>"Стяжка эксцентриковая усиленная &Oslash;20 для 16 мм"];
                    
    $styazhka[6]=['path'=>"furnitura-dlya-mebeli-konfirmat.php",
                    'id'=> "#konfirmat",
                    'def'=>"Конфирматы 7.0х50 и 7.0х70"];

/////////////////////////////////////

/////////////////////////////////////
//shablony-dokumentov-albom-obrazcov.php 
// $arrlist = [$albomobrazcov,$list_dvizheniya_obrazcov,$obrazec_albom_oobrazcov];
// SideMenuList($arrlist)

    $albomobrazcov=[];
    $albomobrazcov[0]=['path'=>"shablony-dokumentov-albom-obrazcov.php",
                    'id'=>"#shablon-alboma-obrazcov",
                    'def'=>"ШАБЛОН АЛЬБОМА ОБРАЗЦОВ"];

    $albomobrazcov[1]=['path'=>"shablony-dokumentov-albom-obrazcov.php",
                    'id'=> "#shablon-alboma-obrazcov_1",
                    'def'=>"Лист титульный"];

    $albomobrazcov[2]=['path'=>"shablony-dokumentov-albom-obrazcov.php",
                    'id'=> "#shablon-alboma-obrazcov_2",
                    'def'=>"Состав альбома образцов"];
                
    $albomobrazcov[3]=['path'=>"shablony-dokumentov-albom-obrazcov.php",
                    'id'=> "#shablon-alboma-obrazcov_3",
                    'def'=>"Размещение изделий на плане"];
                
    $albomobrazcov[4]=['path'=>"shablony-dokumentov-albom-obrazcov.php",
                    'id'=> "#shablon-alboma-obrazcov_4",
                    'def'=>"Образец №"];
                    
/////////////////////////////////////

/////////////////////////////////////
$list_dvizheniya_obrazcov=[];
$list_dvizheniya_obrazcov[0]=['path'=>"shablony-dokumentov-albom-obrazcov.php",
                'id'=>"#list-dvizheniya-obrazcov",
                'def'=>"ЛИСТ ДВИЖЕНИЯ ОБРАЗЦОВ"];

$list_dvizheniya_obrazcov[1]=['path'=>"shablony-dokumentov-albom-obrazcov.php",
                'id'=> "#dok--385",
                'def'=>"Док. № 385"];
                
/////////////////////////////////////

/////////////////////////////////////
$obrazec_albom_oobrazcov=[];
$obrazec_albom_oobrazcov[0]=['path'=>"shablony-dokumentov-albom-obrazcov.php",
                'id'=>"#obrazec-zapolneniya-albomo-obrazcov",
                'def'=>"ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"];
                
/////////////////////////////////////



// index.php

// <TR>
//     <TD data-tooltip="СТЯЖКИ" class="hover mapsite" id="footer143">
//         <p data-img="./dist/images/no-foto.png" id="floating144" data-href="furnitura-dlya-mebeli-styazhka16.php#styazhka">СТЯЖКИ<span><br></span></p>
//     </TD> 
//     <TD>
//         <TABLE >                                                                                          
//             <TR>
//                 <TD class="mapsite" colspan="2" id="flo-5000502-07-701-styazhka-ekscentrikovaya-odnostoronnyaya-minifix-tolshchina-plity-16-mm" >
//                     <p data-img="./dist/images/no-foto.png" data-href="furnitura-dlya-mebeli.php#5000502-07-701-styazhka-ekscentrikovaya-odnostoronnyaya-minifix-tolshchina-plity-16-mm">5000502-07-701 стяжка эксцентриковая односторонняя MINIFIX, толщина плиты 16 мм<span> <br>~-5000502-07-701-styazhka-ekscentrikovaya-odnostoronnyaya-minifix-tolshchina-plity-16-mm</span></p>
// !!!!!!!!!!!!!!!!!!  <p data-img="./dist/images/SUPERLIFT.jpg"    data-href="furnitura-dlya-mebeli-pantograf1.php#SUPERLIFT" class="KEYWORDS">Mебельный лифт SUPERLIFT </p>
//                 </TD>                                                                         
//             </TR>  
//             <TR><TD></TD></TR> <!--end LEVEL4-->
//             <TR>
//                 <TD class="mapsite" colspan="2" id="flo-5000502-07-702-styazhka-ekscentrikovaya-dvuhstoronnyaya-minifix-tolshchina-plity-16-mm" >
//                     <p data-img="./dist/images/no-foto.png" data-href="furnitura-dlya-mebeli.php#5000502-07-702-styazhka-ekscentrikovaya-dvuhstoronnyaya-minifix-tolshchina-plity-16-mm">5000502-07-702 стяжка эксцентриковая двухсторонняя MINIFIX, толщина плиты 16 мм<span> <br>~5000502-07-702-styazhka-ekscentrikovaya-dvuhstoronnyaya-minifix-tolshchina-plity-16-mm</span></p>
//                 </TD>                                                                         
//             </TR>  
//             <TR><TD></TD></TR> <!--end LEVEL4--> 
//             <TR>
//                 <TD class="mapsite" colspan="2" id="flo-5000502-07-703-styazhka-ekscentrikovaya-odnostoronnyaya-minifix-tolshchina-plity-24-mm" >
//                     <p data-img="./dist/images/no-foto.png" data-href="furnitura-dlya-mebeli.php#5000502-07-703-styazhka-ekscentrikovaya-odnostoronnyaya-minifix-tolshchina-plity-24-mm">5000502-07-703 стяжка эксцентриковая односторонняя MINIFIX, толщина плиты 24 мм<span> <br>~5000502-07-703-styazhka-ekscentrikovaya-odnostoronnyaya-minifix-tolshchina-plity-24-mm</span></p>
//                 </TD>                                                                         
//             </TR>  
//             <TR><TD></TD></TR> <!--end LEVEL4--> 
//             <TR>
//                 <TD class="mapsite" colspan="2" id="flo-5000502-07-704-styazhka-ekscentrikovaya-dvuhstoronnyaya-minifix-tolshchina-plity-24-mm" >
//                     <p data-img="./dist/images/no-foto.png" data-href="furnitura-dlya-mebeli.php#5000502-07-704-styazhka-ekscentrikovaya-dvuhstoronnyaya-minifix-tolshchina-plity-24-mm">5000502-07-704 стяжка эксцентриковая двухсторонняя MINIFIX, толщина плиты 24 мм<span> <br>~5000502-07-704-styazhka-ekscentrikovaya-dvuhstoronnyaya-minifix-tolshchina-plity-24-mm</span></p>
//                 </TD>                                                                         
//             </TR>  
//             <TR><TD></TD></TR> <!--end LEVEL4--> 
//             <TR>
//                 <TD class="mapsite" colspan="2" id="flo-5000502-07-707-styazhka-ekscentrikovaya-usilennaya-rafix-tolshchina-plity-16-mm" >
//                     <p data-img="./dist/images/no-foto.png" data-href="furnitura-dlya-mebeli.php#5000502-07-707-styazhka-ekscentrikovaya-usilennaya-rafix-tolshchina-plity-16-mm">5000502-07-707 стяжка эксцентриковая усиленная RAFIX, толщина плиты 16 мм<span> <br>~5000502-07-707-styazhka-ekscentrikovaya-usilennaya-rafix-tolshchina-plity-16-mm</span></p>
//                 </TD>                                                                         
//             </TR>  
//             <TR><TD></TD></TR> <!--end LEVEL4--> 
//             <TR>
//                 <TD class="mapsite" colspan="2" id="flo-5000502-07-750-konfirmat-70h50" >
//                     <p data-img="./dist/images/no-foto.png" data-href="furnitura-dlya-mebeli.php#5000502-07-750-konfirmat-70h50">5000502-07-750 конфирмат 7.0Х50<span> <br>~5000502-07-750-konfirmat-70h50</span></p>
//                 </TD>                                                                         
//             </TR>  
//             <TR><TD></TD></TR> <!--end LEVEL4--> 
//             <TR>
//                 <TD class="mapsite" colspan="2" id="flo-5000502-07-752-konfirmat-70h70" >
//                     <p data-img="./dist/images/no-foto.png" data-href="furnitura-dlya-mebeli.php#5000502-07-752-konfirmat-70h70">5000502-07-752 конфирмат 7.0Х70<span> <br>~5000502-07-752-konfirmat-70h70</span></p>
                    
//                 </TD>                                                                         
//             </TR>  
//             <TR><TD></TD></TR> <!--end LEVEL4-->  
                        
//         </TABLE>
//     </TD>
// </TR> 

                