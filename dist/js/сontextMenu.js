// dist\js\сontextMenu.js
// переопределение контекстного меню в vpi\getxlsx-bazis-specification4.php строка 200


var menu = document.querySelector('.menu-cm');

// var tblVPI = document.querySelector('.tblVPI');
// var chancel_cmenu = document.getElementById('chancel_cmenu');
// var domRect=chancel_cmenu.getBoundingClientRect();
var winpage=document.documentElement.clientHeight;
// var loadImg='<img src="dist/css/ajax-loader-7.gif" alt="Загрузка..." style="padding-left: 35px;">';
var loadImg='<img src="dist/css/ajax-loader-7.gif" alt="Загрузка..." style="width: 200px;">';

function showMenu(x, y){
    $("#contextmenu").html(loadImg);
    console.log('==========');

    // console.log('Ширина '+getClientWidth());
    // console.log('Высота окна '+getClientHeight());
    
    // console.log('Высота окна '+winpage);//!!!
    // console.log('Высота body '+document.body.clientHeight);

    var tblVPI = document.getElementById('tblVPI');
    // var chancel_cmenu = document.getElementById('chancel_cmenu');
    // console.log('Смещение по высоте chancel_cmenu '+chancel_cmenu.offsetY);
    
    // info.innerHTML = "Top: " + domRect.top +
    // "<br>Right: " + domRect.right +
    // "<br>Bottom: " + domRect.bottom +
    // "<br>Left: " + domRect.left +
    // "<br>Width: " + domRect.width +
    // "<br>Height: " + domRect.height; 
// var menu = document.querySelector('.menu-cm');

    // console.log('chancel_cmenu '+is_visible(chancel_cmenu));
    // var xtbl=tblVPI.offsetX==undefined?tblVPI.layerX:tblVPI.offsetX
    // var ytbl=tblVPI.offsetY==undefined?tblVPI.layerY:tblVPI.offsetY
    // console.log('xtbl '+xtbl);
    // console.log('ytbl '+ytbl);
    // console.log('Ширина tblVPI '+tblVPI.clientWidth);
    // console.log('Высота tblVPI '+tblVPI.clientHeight);//!!!
    // console.log('Ширина меню '+menu.clientWidth);
    // console.log('Высота меню '+menu.clientHeight);//!!!
    // // console.log("left "+x);
    // console.log("top "+y);
    // console.log("нижняя граница меню "+(y + menu.clientHeight));
    
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.classList.add('show-menu-cm');
       // положение кнопки отменить в меню
    //    chancel_cmenu = document.getElementById('chancel_cmenu');
    // var domRect=menu.getBoundingClientRect();
    //    fundomRect(y); 
    // console.log('domRect.bottom '+domRect.bottom);   
    
    // var div= winpage-domRect.bottom;
    // if(div<0) {
    //    console.log('разница  '+(div)); 
    //    console.log('menu.style.top  '+ (y-Math.abs(div)) + 'px'); 
    //     menu.style.top = (y-Math.abs(div)) + 'px';
    //     // menu.style.top = (y-Math.abs(div)) + 'px';
    // } 

    
}
// function is_visible(e) {return e.offsetWidth > 0 || e.offsetHeight > 0;}

// function fundomRect(y){
//     e=document.querySelector('.menu-cm');
//     domRect=e.getBoundingClientRect();
//     var div= winpage-domRect.bottom;
//     if(div<0) {
//         console.log('разница  '+(div)); 
//         console.log('menu.style.top  '+ (y-Math.abs(div)) + 'px'); 
//          e.style.top = (y-Math.abs(div)) + 'px';
//          // menu.style.top = (y-Math.abs(div)) + 'px';
//      }  
// }
function hideMenu(){
    menu.classList.remove('show-menu-cm'); 
    removeSel();  
    $("#contextmenu").html(loadImg);
}

function onContextMenu(e){

    e.preventDefault();
   // console.log('onContextMenu');
    removeSel();
 
    showMenu(e.pageX, e.pageY);
    

    getDataBaseVPI(e.target.closest('tr').childNodes[4].dataset.id,e.target.closest('tr').id)
    tr=e.target.closest('tr').classList.add('sel');
    menu.classList.add('show-menu-cm');
    // document.getElementById('del').dataset.element=e.target.closest('tr').id;   
    // document.getElementById('menu_img').src=e.target.closest('tr').childNodes[4].dataset.src;

}

// function onMouseDown(e){
//     hideMenu();
//     document.removeEventListener('mousedown', onMouseDown);
// }

function delSel(tr){
    
    document.getElementById(tr.dataset.element).classList.remove('sel'); 
    del=document.getElementById('del').dataset.element;
    // console.log(del);
    ell=document.getElementById(del);
    ell.parentElement.removeChild(ell);  
   
    // vpibazis=document.getElementById('vpibazis');
    // vpibazis.classList.remove('active-gen', 'finished-gen');
    // vpibazis.removeAttribute('download');
    // vpibazis.setAttribute('href', 'javascript:void(0)')
    resetVpibazis();

    // var ell = table.rows[j].cells[0].closest("tr"); // tr element (ваша строчка)
    // document.getElementById(tr.dataset.element).parentElement.removeChild(tr.dataset.element); 
    hideMenu(); 
}


function resetVpibazis(){   
    vpibazis=document.getElementById('vpibazis');
    vpibazis.classList.remove('active-gen', 'finished-gen');
    vpibazis.removeAttribute('download');
    vpibazis.setAttribute('href', 'javascript:void(0)')  
}

function removeSel(){
   
    wrapObj = document.querySelectorAll('.sel');

    for(let i = 0;i<wrapObj.length;i++){
      wrapObj[i].classList.remove('sel');
    }
}
// скрытие контекстного меню при скроле
 $(window, "#GENModal").bind('mousewheel DOMMouseScroll MozMousePixelScroll wheel onmousewheel scroll', function(e){
//     console.log(e.pageX, e.pageY);
var pos = $('.sel').offset();
if (pos){
    // console.log( pos ); // выводим в консоль объект с двуми значениями (позиция элемента <p>)
    // console.log( menu.style.top + " = "+ parseInt(menu.style.top, 10)); // выводим в консоль значение ключа top (позиция элемента <p> от верхнего края)
    // console.log( pos.top ); // выводим в консоль значение ключа top (позиция элемента <p> от верхнего края)
    // console.log("Разница " + (parseInt(menu.style.top, 10) - pos.top) );
    // console.log( pos.left ) 
    var div=parseInt(menu.style.top, 10) - pos.top;
   menu.style.top = (pos.top-90) + 'px'; 

}

 });


$('#GENModal').on('hide.bs.modal', function() {
    hideMenu();
  })

function getDataBaseVPI(el,del) {
//console.log("JS:"+el+" del:"+del);

// var IdData =  {
//     //  recordToDelete : "vpi/"+currfile,
//      id : el    
//     };
// if(el!=""){
    var IdData = "id="+el+"&del="+del;  
    jQuery.ajax({
        type: "POST", // HTTP метод  POST или GET
        url: "./vpi/getDataBaseVPI.php", //url-адрес, по которому будет отправлен запрос
        dataType:"text", // Тип данных
        data:IdData, //post переменные
        success:function(response){
        // в случае успеха, скрываем, выбранный пользователем для удаления, элемент
        // console.log(response);
     
        $("#contextmenu").html(response);

        },
        error:function (xhr, ajaxOptions, thrownError){
            //выводим ошибку
           // console.log(thrownError);
        }
    });
// }
}  

// function toggle(el) {
//     el.style.display = (el.style.display == 'none') ? 'block' : 'none'
//   }


  function buttonToggle(el) {
// console.log(el);
// var imgsub = document.querySelectorAll('.togg');
// for(var i = 0; i < imgsub.length; i++){
//     imgsub[i].style.display="none";
//     // console.log(imgsub[i]);
//     }
$(el).next().toggle();
    // toggle(el.closest('li').childNodes[3]);
  }
// document.querySelectorAll('#tblVPI  tr:not(.head-cm)')
// .forEach(e => e.addEventListener('contextmenu', onContextMenu, false)); 

$("body").on("click","button.contextm-toggle", function(e) { 
    //console.log(e.target);
    // $("menu .menu-cm.cm").hide(); //  скрываем, или отображаем все элементы <div>
    var m=$(e.target).parent().data('togg');
    //console.log(m);
    if (typeof m === "undefined"){
        // console.log("m");
        if ($(e.target).data('togg')=="cm1"){
        //   m="cm2";  
          $("#cm1").hide();
        //   $(e.target).parent().parent().find('menu').toggle();
          $("#cm2").toggle();
        }else{
            // m="cm2"; 
            $("#cm2").hide();
            // $(e.target).parent().parent().find('menu').toggle();
            $("#cm1").toggle();
        }
        
    }else{
      //  console.log(m);
        $("#"+m).hide();
    $(e.target).parent().parent().find('menu').toggle();
    }
   // console.log(m);
    // console.log(e.target);
    // 
    
    // 
  });