<?php
// переменные на странице 
// $detaliClass = '';
// $izdeliyaClass = '';
// $shablonyClass = 'class="active"';
// $metodichkiClass = '';
// $furnituraClass = '';
// $materialyClass = '';
// $literaturaClass = '';
// include 'inc-head.php';
// include 'inc-header-menu.php';
?>
<?php echo'
</head>
<body>
    <header class="navbar navbar-inverse navbar-fixed-top" >
        <div class="container">            
            <div class="navbar navbar-inverse " role="navigation">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.php">500.СТП</a >                    
                </div>                
                <div class="navbar-collapse collapse top-menu">
                    <ul class="nav navbar-nav navbar-link " id="navmain">
                        <li '.$detaliClass.'>
                            <a href="detali-profili.php">ДЕТАЛИ</a>
                        </li>
                        <li '.$izdeliyaClass.'>
                            <a href="izdeliya-bloki-dvernye.php">ИЗДЕЛИЯ</a>
                        </li>
                        <li '.$shablonyClass.'>
                            <a href="shablony-dokumentov-titulniki.php">ШАБЛОНЫ ДОКУМЕНТОВ</a>
                        </li>
                        <li '.$metodichkiClass.'>
                            <a href="metodichki-dokument-117.php">ПОСОБИЯ МЕТОДИЧЕСКИЕ</a>
                        </li>
                        <li '.$furnituraClass.'>
                            <a href="furnitura-dlya-dvernyh-blokov.php">ФУРНИТУРА</a>
                        </li>
                        <li '.$materialyClass.'>
                            <a href="materialy-ne-derevyannye-steklo-zerkalo-vitrazh.php">МАТЕРИАЛЫ</a>
                        </li>
                        <li '.$literaturaClass.' class=" disabled">
                            <a href="literatura-gost.php">ЛИТЕРАТУРА</a>
                        </li>
                    </ul>  
                </div>
                <div class="navbar-form navbar-right " id="search">
                    <div class="form-group">                                
                        <span class="glyphicon glyphicon-search zbz"></span>
                        <input type="text" class="form-control who zbz-input-clearable" placeholder="Поиск">                               
                    </div>                            
                    <ul class="search_result" style="display: none;"></ul>
                </div>            
            </div>
        </div>
    </header>
    <!-- .modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                    
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                
            </div>
            <div class="modal-body full-screen">
                    <!-- <p id="content"></p> -->
                <div id="im" data-dismiss="modal">
                    <!-- <img src="./dist/images/mdf-nakladka-051-dsh.png" alt=""class="img-thumbnail " > -->
                </div>
            </div>
            <!-- <div class="modal-footer">-->
            <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>-->
                <!-- <a href="img.jpg" type="button" class="btn btn-primary"download="img.jpg">Save</a> -->
                <!-- </div>-->
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <div  style="position:fixed; left:0; top:150px; " class="btn-side">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-default  animated tada" data-toggle="modal" data-target="#mySendModal" title="Отправить сообщение">
            <span class=" glyphicon glyphicon-envelope" ></span>
        </button>
       
    </div>
    <div  style="position:fixed; left:0; top:185px;" class="btn-side">
        <!-- Button trigger modal -->
        
        <button type="button" class="btn btn-default center" onclick="location.href=\'exit.php\';" title="Выйти">  
        <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
        </button>
    </div>
    <div  style="position:fixed; left:0; top:220px;" class="btn-side">
    <!-- Button trigger modal -->
    
        <button type="button" class="btn btn-default center" onclick="location.href=\'index.php\';" title="Карта сайта">  
        <span class="glyphicon glyphicon-home" ></span>
        </button>
    </div>
    <div  style="position:fixed; left:0; top:255px;" class="btn-side left-menu">
    <!-- Button trigger modal -->
    
        <button type="button" class="btn btn-default center "  title="Левое меню">  
        <span class="glyphicon glyphicon-list" ></span>
        </button>
    </div>
';
include 'inc-header-send-modal.php';
?>

