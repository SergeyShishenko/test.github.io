<?php 

class class_ReadingCNCfiles
{
    private $arrNameFile ;
    private $arrFile ;
    private $folderCNC ;

    public function __construct($folderCNC) {
        $this->folderCNC = $folderCNC;
        if (file_exists($folderCNC)) {
        $this->arrNameFile=scandir($folderCNC);
       
        array_shift($this->arrNameFile);// удаление  '.'
        array_shift($this->arrNameFile);// удаление  '..'
            
        }else{
            echo "Директория не найдена<br>";
        }
           
        $this->addObj();
    } 
    
    /**
     * Вывод всех имен файлов 
     *
     * @return void
     */
    public function output(){
        for ($i=0; $i < count($this->arrNameFile); $i++) { 
            echo $this->folderCNC."/".$this->arrNameFile[$i]."<br>";

        }
    }


    private function addObj(){
        for ($i=0; $i < count($this->arrNameFile); $i++) { 
            $this->arrFile[$i]=new class_CNC( $this->folderCNC."/".$this->arrNameFile[$i]);

        }

    }


    public function getArr(){

        for ($i=0; $i < count($this->arrFile); $i++) { 
           echo  $this->arrFile[$i]->nameFile()." ........ "
           .$this->arrFile[$i]->getDL()." x "
           .$this->arrFile[$i]->getDH()." x "
           .$this->arrFile[$i]->getDS()
           ."<br>";

        }
      
    }
    public function checkAllCNC(){

        for ($i=0; $i < count($this->arrFile); $i++) { 

            echo $this->arrFile[$i]->nameFile()."<br>";
            echo "Длина = ".$this->arrFile[$i]->getDL()."<br>";
            echo "Ширина = ".$this->arrFile[$i]->getDH()."<br>";
            echo "Толщина = ".$this->arrFile[$i]->getDS()."<br>";
           
            $this->arrFile[$i]->checkCNC();

            echo "<br>***ОШИБКИ***<br>";
            echo $this->arrFile[$i]->err;
            echo "<br>****************<br>";
           

        }
      
    }
}

?>