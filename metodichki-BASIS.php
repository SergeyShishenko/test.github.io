<?php
include 'inc-session-start.php';
$detaliClass = '';
$izdeliyaClass = '';
$shablonyClass = '';
$metodichkiClass = 'class="active"';
$furnituraClass = '';
$materialyClass = '';
$literaturaClass = '';

$item_dokument_117_Class = '';
$item_dokument_135_Class = '';
$item_ergonomika_Class = '';
$item_proektnoy_rabote_Class = '';
$item_basis_Class = 'active';
include 'inc-head.php';
include 'inc-header-menu.php';
include 'inc-left-side-menu-metodichki.php';
?> 
                <!-- main  -->
                <div class="col-md-8 col-md-8-non" role="main" id="main-page">

                    <article >
                      <section  >
                        <div class="page-header">
                          <h1 itemprop="name" id="SCRIPTS">СКРИПТЫ</h1>
                        </div>
                       
                     
                        <div class="bs-callout bs-callout-warning cont" >
                         <p> 
                         <h2 itemprop="name" id="AddOrderProdudtCE">Добавить свойства: Заказ/ Изделие/ СЕ </h2>
                            <a href="./dist/files/js/AddOrderProductCE.js" type="button" class="btn btn-primary"  download="AddOrderProductCE.js">Скачать - AddOrderProductCE.js</a>
                         </p>
                         <p >&nbsp;</p> 
                         <div class="main-box-body clearfix">
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <video preload="auto" autoplay="true" loop="true" muted="muted" controls class="embed-responsive-item">
                                            <source src="./dist/video/basis/2019-02-25 at 08-17-55.mp4" type="video/mp4">
                                        </video>
                                    </div>
                                    <p >Создан: 25/02/2019г.</p>      
                                    <p >Обновлен: 28/02/2019г.</p>      
                          </div> 
                        
                         </div>
                     
                      </section>
                    </article>
                    
               


               
                </div> <!-- main  -->
                <!-- боковое меню блоки дверные начало -->
                <div class="col-md-2" id="navmain-izdeliya">
                    <div class="bs-sidebar hidden-print affix vertical-menu " role="complementary" >
                        <ul class="nav bs-sidenav">
                            <li><a href="#metodicheskoe-posobie-po-izdeliyam">СКРИПТЫ</a>
                            <ul class="nav">
                                    <li><a href="#AddOrderProdudtCE">Добавить свойства: Заказ/ Изделие/ СЕ</a>
                                    </li>
                                                                      
                                </ul>
                            </li>                            
                                          
                        </ul>
                    </div>
                </div><!-- боковое меню блоки дверные конец -->
<?php include 'inc-footer.php'; ?>