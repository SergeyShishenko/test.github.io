<?php
session_start();
?>	
<!DOCTYPE html>
<html>
<head>
<title>popular products</title> 
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
</head>
<body>
<?php
include ("func.inc");
$bd_popular_products=db_select_popular_products();
 $sum=$_POST['pages'];
 $foto=4;
 $total_page=sizeof($bd_popular_products) - floor(sizeof($bd_popular_products) / $foto)*$foto;
 if ($total_page > 0)
 {$total_page=floor(sizeof($bd_popular_products) / $foto)+1;}
 else{$total_page=floor(sizeof($bd_popular_products) / $foto);}
 
 $bd_sizeof = sizeof($bd_popular_products)-1;
//////////////// доплнение пустых ячеек
if  ($_POST['hidl'] == "+")
	{
	$pg=$_POST['pages'] + 1;

	$num=-4;
	for ($i=0; $i<$pg;$i++)
		 { $num = $num+4;}
				cellA ($num,$bd_popular_products,$name_cells,8,100,0);			
				$num++;
				if ($num > $bd_sizeof){$num=0;}
				cellA ($num,$bd_popular_products,$name_cells,9,100,293);
				$num++;
				if ($num > $bd_sizeof){$num=0;}
				cellA ($num,$bd_popular_products,$name_cells,10,100,586);
				$num++;
				if ($num > $bd_sizeof){$num=0;}
				cellA ($num,$bd_popular_products,$name_cells,11,100,879);
	}
else if  ($_POST['hidl'] == "-")
	{
	$pg=$_POST['pages'] - 1;
	$num=-4;
	for ($i=0; $i<$pg;$i++)
		 { $num = $num+4;}
				cellA ($num,$bd_popular_products,$name_cells,8,100,0);			
				$num++;
				if ($num > $bd_sizeof){$num=0;}
				cellA ($num,$bd_popular_products,$name_cells,9,100,293);
				$num++;
				if ($num > $bd_sizeof){$num=0;}
				cellA ($num,$bd_popular_products,$name_cells,10,100,586);
				$num++;
				if ($num > $bd_sizeof){$num=0;}
				cellA ($num,$bd_popular_products,$name_cells,11,100,879);
	}
////////////////	

     ;
echo '<div id="pages">'.$_POST['hidl'].'</div><br>'  ;
echo '<div id="curr_page">'.$pg.'</div><br>'  ;	
echo '<div id="total">'.$total_page.'</div><br>'  ;				
?>

</body>
</html>