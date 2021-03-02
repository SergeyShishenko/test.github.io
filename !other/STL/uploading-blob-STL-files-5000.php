<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="stl.png" type="image/x-icon">
    <title>Загрузка файла STL</title>
    <style>
    #greyProgress {
        /* width: 100%; */
        width: 30%;
        background-color: #ddd;
    }

    #greenBar {
        width: 0%;
        height: 30px;
        background: green;
        text-align: center;
        line-height: 30px;
        color: white;


    }




    .meter>div {
        display: block;
        height: 30%;

        position: relative;
        overflow: hidden;
    }

    .meter>div:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(-45deg,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            transparent 75%,
            transparent);
        z-index: 1;
        background-size: 50px 50px;
        animation: move 2s linear infinite;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: hidden;
    }



    @keyframes move {
        0% {
            background-position: 0 0;
        }

        100% {
            background-position: 50px 50px;
        }
    }

    /* checkbox */
    /* .container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            
            user-select: none;
        } */



    ul {
        list-style-type: none;
    }

    }
    </style>
</head>

<body>


    <input type="file" id="video-url-example">
    <br>
    <br>
    <div id="greyProgress" class="">
        <div id="greenBar"></div>
    </div>
    <br>

    <div id="video-information1" style="width: 50%"></div>
    <div id="video-information" style="width: 50%"></div>
    <div id="chunk-information" style="width: 50%"></div>
    <div id="response-information" style="width: 50%">Загрузите файл STL</div>
    <div id="info3" style="width: 50%"></div>
    <form name="Sum">
        <!-- Front, Back, Top, Bottom, Left, Right, General -->
        <ul>

            <li class="container">
                <input type="checkbox" id="Front" value="0" checked>
                Спереди:
                <span class="checkmark Front">0</span>
            </li>

            <li class="container">
                <input type="checkbox" id="Back" value="0" checked>
                Сзади:
                <span class="checkmark Back">0</span>
            </li>

            <li class="container">
                <input type="checkbox" id="Top" value="0" checked>
                Сверху:
                <span class="checkmark Top">0</span>
            </li>

            <li class="container">
                <input type="checkbox" id="Bottom" value="0" checked>
                <b>Снизу:</b>
                <span class="checkmark Bottom">0</span>
            </li>

            <li class="container">
                <input type="checkbox" id="Left" value="0" checked>
                Слева:
                <span class="checkmark Left">0</span>
            </li>

            <li class="container">
                <input type="checkbox" id="Right" value="0" checked>
                Справа:
                <span class="checkmark Right">0</span>
            </li>
            <li class="container">
                <input type="checkbox" id="General" value="0" checked>
                Общий вид:
                <span class="checkmark General">0</span>
            </li>
            <output id="rezultat">Площадь поверхности: 0</output>
        </ul>
    </form>


    <!-- <li id="Right">Справа<input type="checkbox" name="a" value="1417"> 1417</li>
   <li><input type="checkbox" name="a" value="1680" checked> 1680</li>
   <li><input type="checkbox" name="a" value="1883" checked> 1883</li>
   <li><input type="checkbox" name="a" value="1934"> 1934</li>
   <li><input type="checkbox" name="a" value="2010"> 2010</li> -->



    <script>
    // Далее на странице находится раздел сценария - и вот где тяжелая атлетика будет происходить.
    var greyProgress = document.getElementById("greyProgress");
    const input = document.querySelector('#video-url-example');
    var elem = document.getElementById("greenBar");
    var respinfo = document.getElementById("response-information");
    var info1 = document.getElementById("video-information1");
    var info3 = document.getElementById("info3");

    const url = "uploadBlobSTL.php"
    // const url = "uploadBlobSTLwrite.php"
    var chunkCounter = 0;
    var totalArea;
    var dbFront, dbBack, dbTop, dbBottom, dbLeft, dbRight, dbGeneral;

    //break into 1 MB chunks for demo purposes
    var chunkSize = 84;
    var sessId = "";
    // var playerUrl = "";
    var file;
    var numberofChunks;
    var start = 0;
    let dend, dstart;
    const chunkSize50 = 50000000 / 2;
    const chunkSize84 = chunkSize50 - 84;
    var dataArray = [];
    // Далее мы создаем EventListener на входе - когда файл добавляется, разделить файл и начать процесс загрузки:
    input.addEventListener('change', () => {
        greyProgress.classList.add("meter"); // добавить класс 
        document.getElementById("video-information").innerHTML = "";
        respinfo.innerHTML = "";
        start = 0;
        chunkSize = 84;
        chunkCounter = 0;
        dstart = new Date();
        file = input.files[0];
        totalArea = 0;
        dataArray = [];
        dbFront = dbBack = dbTop = dbBottom = dbLeft = dbRight = dbGeneral = 0;
        document.getElementById("rezultat").innerHTML = "Площадь поверхности: 0 м&sup2";
        var r1 = document.forms.Sum.querySelectorAll('[type="checkbox"]');
        for (var j = 0; j < r1.length; j++) {
            r1[j].value = 0;
            r1[j].disabled = false;
        }
        var c1 = document.forms.Sum.getElementsByClassName('checkmark');
        for (var j = 0; j < c1.length; j++) {
            c1[j].innerHTML = 0;
            // r[j].disabled = false;
        }
       

        // var numberofChunks = Math.ceil(file.size/chunkSize);
        numberofChunks = Math.ceil((file.size - 84) / chunkSize50 + 1);
        info1.innerHTML = file.size + " байт поделено на " +
            numberofChunks +
            " частей."

        var chunkEnd = start + chunkSize;
        //upload the first chunk to get the sessId
        createChunk();
        // var chunkSize = 50;
        //   });

    });

    // Теперь мы называем функцию createChunk.
    function createChunk() {
        chunkCounter++;
        console.log("Создана часть: ", chunkCounter);
        chunkEnd = Math.min(start + chunkSize, file.size);

        var chunk = file.slice(start, chunkEnd);
        console.log("Создан часть файла " + start + "-" + chunkEnd + " минус 1    ");
        var chunkForm = new FormData();
        // if(sessId.length >0){
        //     //we have a sessId
        //     chunkForm.append('sessId', sessId);
        //     console.log("added sessId");   

        // }
        chunkForm.append('file', chunk);
        chunkForm.append('fname', file.name);
        // console.log(file.name);
        console.log("часть добавлен");
        chunkSize = chunkSize50;


        //created the chunk, now upload iit
        uploadChunk(chunkForm, chunkEnd);
        if (chunkEnd == 84) {
            start = chunkSize84 * (-1);
        }
        // chunkSize=50;
    }
    // Загрузка куска

    function uploadChunk(chunkForm, chunkEnd) {
        var oReq = new XMLHttpRequest();
        oReq.upload.addEventListener("progress", updateProgress);
        oReq.open("POST", url, true);
        var blobEnd = chunkEnd - 1;
        var contentRange = "байтов " + start + " - " + blobEnd + "/" + file.size;
        console.log(contentRange);

        // загрузить обновления прогресса
        function updateProgress(oEvent) {
            if (oEvent.lengthComputable) {
                var percentComplete = Math.round(oEvent.loaded / oEvent.total * 100);

                var totalPercentComplete = Math.round((chunkCounter - 1) / numberofChunks * 100 +
                    percentComplete / numberofChunks);
                document.getElementById("chunk-information").innerHTML = "Загрузка части #" + chunkCounter + ": " +
                    percentComplete + "%.";
                // "Загружено: " + totalPercentComplete + "%";
                Pssbar(totalPercentComplete);

            } else {
                console.log("не совместимо");
                // Unable to compute progress information since the total size is unknown
            }

        }

        // Как только часть полностью загружен, мы запускаем следующий код (в случае загрузки).
        oReq.onload = function(oEvent) {
            // Uploaded.
            console.log("загруженная часть");
            console.log("oReq.response", oReq.response);
            var resp = JSON.parse(oReq.response)
            sessId = resp.sessId;
            // div.insertAdjacentHTML('afterend', '<li>Пока</p>');   
            if (resp.hasOwnProperty('totalarea')) {
                totalArea += resp.totalarea;
                // respinfo.insertAdjacentHTML('beforeend',"Площадь поверхности: " + parseFloat((resp.totalarea / 1000000).toFixed(3)) +" м&sup2<br>");
                respinfo.innerHTML = "Площадь поверхности: " + мsup2(totalArea) + " м&sup2";
                dataArray.push(resp);
                // forEachm(resp, fcallback);
                // forEachm2(resp);
            } else {
                info1.insertAdjacentHTML('beforeend', " Triangles: " + resp.head);
            }


            // console.log("sessId", sessId);

            start += chunkSize50;


            if (start < file.size) {
                //create the new chunk
                createChunk();
            } else {

                // console.log("all uploaded! Watch here: ",playerUrl ) ;
                // document.getElementById("video-information").innerHTML = "all uploaded! Watch the video <a href=\'" + playerUrl +"\' target=\'_blank\'>here</a>" ;
                for (let i = 0; i < 1000; i++) {
                    Math.sqrt(i);
                }
                dend = new Date();
                let duration = dend.getTime() - dstart.getTime();
                console.log(duration + ' ms');
                document.getElementById("chunk-information").innerHTML = "";
                document.getElementById("video-information").innerHTML = "Всё загруженно! Прошло: " + msToTime(duration);

                document.getElementById("rezultat").innerHTML = "Площадь поверхности: " + мsup2(totalArea) +" м&sup2";

                console.log("dataArray.lenght: "+dataArray.length);
                for (let i = 0 ; i < dataArray.length; i++) {
                    var arr=dataArray[i]['data'];
                    // console.log("dataArray[i]['data'].length "+Object.keys(arr).length);
                    for (let j = 1 ; j <= Object.keys(arr).length; j++) {
                        console.log(arr[j]['area']);
                    }

                    // arr.forEach(function(item, i, arr) {
                    //     console.log( i + ": " + item + " (массив:" + arr + ")" );
                    //     });
                                            // console.log(dataArray[i]['data'][1]['area']);
                    }

                var t5 = document.forms.Sum.querySelectorAll('input[type="checkbox"][value="0"]');
                for (var i = 0; i < t5.length; i++) // чтобы не было написано NaN, убираем в disabled пункты, где не прописаны значения
                {
                    t5[i].disabled = true;
                }
                // greyProgress.classList.add("class-name"); // добавить класс 
                greyProgress.classList.remove("meter"); // удалить класс 
            }

        };

        oReq.send(chunkForm);
    }
    // });

    function msToTime(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }
    // console.log(msToTime(300000))

    // millisToMinutesAndSeconds(298999); // "4:59"
    // millisToMinutesAndSeconds(60999);  // "1:01"

    function Pssbar(pr) {
        elem.style.width = pr + '%';
        elem.innerHTML = pr * 1 + '%';
    }

    function forEachm(data, callback) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                callback(key, data[key]);
            }
        }
    }
    function forEachm2(data) {
        info3.insertAdjacentHTML('beforeend', "normal: " +Object.keys(data['data']).length + "<BR>");
        for (var i = 1; i <= Object.keys(data['data']).length; i++) {
        info3.insertAdjacentHTML('beforeend', "area: " + data['data'][i]['area'] + "<BR>");
        }
    }

    function fcallback(key, value) {
        if (key == "data") {

            for (let i = 1; i <= Object.keys(value).length; i++) {
                // info3.insertAdjacentHTML('beforeend', "#" + i + "<BR>");
                // info3.insertAdjacentHTML('beforeend', "normal: " + value[i]['normal'] + "<BR>");
                // info3.insertAdjacentHTML('beforeend', "directional: " + value[i]['directional'] + "<BR>");
                // info3.insertAdjacentHTML('beforeend', "vertex1: " + value[i]['vertex1'] + "<BR>");
                // info3.insertAdjacentHTML('beforeend', "vertex1: " + value[i]['vertex2'] + "<BR>");
                // info3.insertAdjacentHTML('beforeend', "vertex3: " + value[i]['vertex3'] + "<BR>");
                // info3.insertAdjacentHTML('beforeend', "area: " + value[i]['area'] + " мм&sup2<BR>");
                // info3.insertAdjacentHTML('beforeend', "<hr>");

                // Front, Back, Top, Bottom, Left, Right, General
                switch (value[i]['directional']) {
                    case 'Front':
                        dbFront += value[i]['area'];
                        // document.getElementById("Front").value = dbFront;
                        // document.getElementsByClassName('Front')[0].innerHTML = мsup2(dbFront);
                        break;
                    case 'Back':
                        dbBack += value[i]['area'];
                        // document.getElementById("Back").value = dbBack;
                        // document.getElementsByClassName('Back')[0].innerHTML = мsup2(dbBack);
                        break;
                    case 'Top':
                        dbTop += value[i]['area'];
                        // document.getElementById("Top").value = dbTop;
                        // document.getElementsByClassName('Top')[0].innerHTML = мsup2(dbTop);
                        break;
                    case 'Bottom':
                        dbBottom += value[i]['area'];
                        // document.getElementById("Bottom").value = dbBottom;
                        // document.getElementsByClassName('Bottom')[0].innerHTML = мsup2(dbBottom);
                        break;
                    case 'Left':
                        dbLeft += value[i]['area'];
                        // document.getElementById("Left").value = dbLeft;
                        // document.getElementsByClassName('Left')[0].innerHTML = мsup2(dbLeft);
                        break;
                    case 'Right':
                        dbRight += value[i]['area'];
                        // document.getElementById("Right").value = dbRight;
                        // document.getElementsByClassName('Right')[0].innerHTML = мsup2(dbRight);
                        break;
                    case 'General':
                        dbGeneral += value[i]['area'];
                        // document.getElementById("General").value = dbGeneral;
                        // document.getElementsByClassName('General')[0].innerHTML = мsup2(dbGeneral);
                        break;
                        // default:
                        //     db = "?";
                        //   break
                }
            }

        }
    }
    //// totalsum
    var s1 = document.forms.Sum,
        d5 = s1.querySelectorAll('input[type="checkbox"]:not([value]), input[type="checkbox"][value=""]');
    for (var i = 0; i < d5
        .length; i++) // чтобы не было написано NaN, убираем в disabled пункты, где не прописаны значения
    {
        d5[i].disabled = true;
    }
    s1.onchange = function() { // начало работы функции сложения
        var n1 = s1.querySelectorAll('[type="checkbox"]'),
            itog = 0;
        for (var j = 0; j < n1.length; j++) {
            n1[j].checked ? itog += parseFloat(n1[j].value) : itog;
            document.getElementById('rezultat').innerHTML = 'Площадь поверхности: ' + мsup2(itog) + " м&sup2";
        }

    }

    function мsup2(val) {
        return parseFloat((val / 1000000).toFixed(4));
    }
    </script>
</body>

</html>
<!--https://dev.to/api_video/uploading-large-files-with-javascript-o4i-->