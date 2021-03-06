<?php
include 'inc/inc-session-start.php';
require_once('DATA/TABLES/table_data.php');
// $detaliClass = '';
// $izdeliyaClass = '';
$shablonyClass = 'class="active"';
// $metodichkiClass = '';
// $furnituraClass = '';
// $materialyClass = '';
// $literaturaClass = '';

switch ($category_id) {
    case 1:
         $item_albom_obrazcov_Class = 'active';
        break;
    case 2:
         $item_list_titulnyy_dp_Class = 'active';
        break;
    case 3:
        $item_list_titulnyy_kd_Class = 'active';
        break;
}

// $item_albom_obrazcov_Class = 'active';
// $item_list_titulnyy_dp_Class = '';
// $item_list_titulnyy_kd_Class = '';

include 'inc/inc-head.php';
include 'inc/inc-header-menu.php';
include 'inc/inc-left-side-menu-shablony-dokumentov.php';
?> 
                <!-- main  -->
                <div class="col-md-8 col-md-8-non" role="main" id="main-page">

                    <article >
                      <section >
                        <div class="page-header">                        
                        <h2  id="<?php echo $html_id_grupp ;?>">&nbsp;</h2> 
                          <h1 itemprop="name"><?php echo $name_grupp ;?></h1>
                        </div>

                        <h2 id="<?php echo $html_id_obj ;?>">&nbsp;</h2>
                        <div class="bs-callout bs-callout-warning cont" ><h4><?php echo $name_obj ;?></h4>
                        <div class="overlay"></div>
                                                       
                            <p> <a>
                                <!-- <img src="./dist/images/shablon-alboma-obrazcov2_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="<?php echo $path_img_obj.$fname_img_obj ;?>" class="center-block img-rounded img-thumbnail b-lazy img-<?php echo $img_orientation_obj ;?>"
                                 data-toggle="modal"
                                 data-target="#myModal"                                
                                 alt="<?php echo $img_alt_obj ;?>"
                                 data-pdf="<?php echo $pdf_obj ;?>"
                                 data-prnt="<?php echo $data_prnt ;?>"
                                 data-spng="<?php echo $data_spng ;?>" 
                                
                                ></a>
                             </p>
                             <!-- <div class="overlay"></div> -->
                        </div>
                      

                        <h2 id="shablon-alboma-obrazcov_2">&nbsp;</h2>
                        <div class="bs-callout bs-callout-warning cont" ><h4>Состав альбома образцов</h4>
                                                   
                            <p> <a>
                                <!-- <img src="./dist/images/shablon-alboma-obrazcov_2-v2.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov_2-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                            
                                 alt="Состав альбома образцов"
                                
                                   ></a>
                             </p>
                             <!-- <div class="overlay"></div> -->
                        </div>

                        <h2 id="shablon-alboma-obrazcov_3">&nbsp;</h2>
                        <div class="bs-callout bs-callout-warning cont" ><h4>Размещение изделий на плане</h4>
                                                   
                            <p> <a>
                                <!-- <img src="./dist/images/shablon-alboma-obrazcov2_3.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov_3-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                             
                                 alt="Размещение изделий на плане"
                              
                                   ></a>
                             </p>
                             <!-- <div class="overlay"></div> -->
                        </div>

                        <h2 id="shablon-alboma-obrazcov_4">&nbsp;</h2>
                        <div class="bs-callout bs-callout-warning cont" ><h4>Образец №</h4>
                                                   
                            <p> <a>
                                <!-- <img src="./dist/images/shablon-alboma-obrazcov2_4.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov_4-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                           
                                 alt="Образец №"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov.pdf"
                                   ></a>
                             </p>
                             <!-- <div class="overlay"></div> -->
                        </div>
                      </section>
                    </article>
                    
                    
                    <article >
                      <section >
                        <div class="page-header">
                        <h2  id="list-dvizheniya-obrazcov">&nbsp;</h2> 
                          <h1 itemprop="name">ЛИСТ ДВИЖЕНИЯ ОБРАЗЦОВ</h1>
                        </div>
                        <h2 id="dok--385">&nbsp;</h2>
                        <div class="bs-callout bs-callout-warning cont" ><h4>Док. № 385</h4>
                               <div class="overlay"></div>                        
                            <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/list-dvizheniya-obrazcov_1-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"
                                 data-content="ЛИСТ ДВИЖЕНИЯ ОБРАЗЦОВ"                               
                                 alt="ЛИСТ ДВИЖЕНИЯ ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/list-dvizheniya-obrazcov.pdf"
                                   ></a>
                             </p>
                             
                        </div>  
                       
                      </section>
                    </article>

                    <article >
                      <section >
                        <div class="page-header">
                        <h2  id="obrazec-zapolneniya-albomo-obrazcov">&nbsp;</h2> 
                          <h1 itemprop="name">ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ</h1>
                        </div>
                        <!-- <h2 id="dok--385">&nbsp;</h2> -->
                        <div class="bs-callout bs-callout-warning cont" >
                            <!-- <h4>Док. № 385</h4> -->
                               <div class="overlay"></div>                        
                            <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_1-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_2-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_3-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_4-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_5-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_6-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_7-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_8-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_9-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_10-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             <p> <a>
                                <!-- <img src="./dist/images/list-dvizheniya-obrazcov_1.png" class="center-block img-rounded img-thumbnail" -->
                                <img  src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==  data-src="./dist/images/shablon-alboma-obrazcov-zapolnenie_10-v1.png" class="center-block img-rounded img-thumbnail b-lazy img-album"
                                 data-toggle="modal"
                                 data-target="#myModal"                                                               
                                 alt="ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ"
                                 data-pdf="./dist/files/pdf/shablon-alboma-obrazcov-zapolnenie.pdf"
                                 data-prnt="noPrint"
                                 data-spng="noPNG" 
                                   ></a>
                             </p>
                             
                        </div>  
                       
                      </section>
                    </article>
                   
                </div> <!-- main  -->

                <!-- боковое меню блоки дверные начало -->
                <div class="col-md-2" id="navmain-izdeliya">
                    <div class="bs-sidebar hidden-print affix vertical-menu " role="complementary" >
                        <ul class="nav bs-sidenav">
                            <li><a href="#shablon-alboma-obrazcov">ШАБЛОН АЛЬБОМА ОБРАЗЦОВ</a>
                            <ul class="nav">
                                    <li><a href="#shablon-alboma-obrazcov_1">&#9999;&nbsp;Лист титульный</a>
                                    </li>
                                    <li><a href="#shablon-alboma-obrazcov_2">&#9999;&nbsp;Состав альбома образцов</a>
                                    </li>
                                    <li><a href="#shablon-alboma-obrazcov_3">&#9999;&nbsp;Размещение изделий на плане</a>
                                    </li>
                                    <li><a href="#shablon-alboma-obrazcov_4">&#9999;&nbsp;Образец №</a>
                                    </li>                                                                      
                                </ul>
                            </li> 
                            <li><a href="#list-dvizheniya-obrazcov">ЛИСТ ДВИЖЕНИЯ ОБРАЗЦОВ</a>
                            <ul class="nav">
                                    <li><a href="#dok--385">&#9999;&nbsp;Док. № 385</a>
                                    </li>                              
                                </ul>
                            </li> 
                            <li><a href="#obrazec-zapolneniya-albomo-obrazcov">ОБРАЗЕЦ ЗАПОЛНЕНИЯ АЛЬБОМА ОБРАЗЦОВ</a>
                            
                            </li>                           
                          
                                                   
                        </ul>
                    </div>
                </div><!-- боковое меню блоки дверные конец -->
<?php include 'inc/inc-footer.php'; ?>