<?php
  //include "classes_cnc/Logger.php";
//  include '../Classes/Logger.php';
//  require_once dirname(__DIR__ ). '/Classes/Logger.php';
 
//   Logger::$PATH = dirname(__FILE__);
//   Logger::$PATH = __DIR__;
//   Logger::$PATH = dirname(__FILE__);

// Название <input type="file">
$input_name = 'file';
 
// Разрешенные расширения файлов.
$allow = array();


 
// Запрещенные расширения файлов.
$deny = array(
	'phtml', 'php', 'php3', 'php4', 'php5', 'php6', 'php7', 'phps', 'cgi', 'pl', 'asp', 
	'aspx', 'shtml', 'shtm', 'htaccess', 'htpasswd', 'ini', 'log', 'sh', 'js', 'html', 
	'htm', 'css', 'sql', 'spl', 'scgi', 'fcgi', 'exe'
);
 
// Директория куда будут загружаться файлы.
// уникальное имя папки
// if (!file_exists(__DIR__ . '/uploads/')) {
// 	mkdir(__DIR__ . '/uploads/', 0777, true);	

// }
if ($_POST["dircnc"] !==""){
	$folder_current=$_POST["dircnc"];
	$path = __DIR__ . '/uploads/'.$folder_current.'/';
}else{
	$rand_folder=rand();
	$folder_current=$rand_folder;
	$path = __DIR__ . '/uploads/'.$folder_current.'/';	

	mkdir($path, 0777, true);	
}




// $path = __DIR__ . '/uploads/'.$folder_current.'/';

// mkdir($path, 0777, true);				


$data = array();
$data[] = $folder_current; 
if (!isset($_FILES[$input_name])) {
	$error = 'Файлы не загружены.';
	$data[] = 'Файлы не загружены.';
} else {
	// Преобразуем массив $_FILES в удобный вид для перебора в foreach.
	$files = array();
	$diff = count($_FILES[$input_name]) - count($_FILES[$input_name], COUNT_RECURSIVE);
	if ($diff == 0) {
		$files = array($_FILES[$input_name]);
	} else {
		foreach($_FILES[$input_name] as $k => $l) {
			foreach($l as $i => $v) {
				$files[$i][$k] = $v;
			}
		}		
	}	
 
	foreach ($files as $file) {
		$error = $success = '';
 
		// Проверим на ошибки загрузки.
		if (!empty($file['error']) || empty($file['tmp_name'])) {
			$error = 'Не удалось загрузить файл.';
		} elseif ($file['tmp_name'] == 'none' || !is_uploaded_file($file['tmp_name'])) {
			$error = 'Не удалось загрузить файл.';
		} else {
			// Оставляем в имени файла только буквы, цифры и некоторые символы.
			$pattern = "[^a-zа-яё0-9,~!@#%^-_\$\?\(\)\{\}\[\]\.]";
			$name = mb_eregi_replace($pattern, '-', $file['name']);
			$name = mb_ereg_replace('[-]+', '-', $name);
			$parts = pathinfo($name);
			$extension=strtolower($parts['extension']);
			if (empty($name) || empty($parts['extension'])) {
				$error = 'Недопустимый тип файла';
			// } elseif ($extension!='cnc'&& $extension!='csv') {
			} elseif ($extension!='cnc'&& $extension!='csv'
						&& $extension!='xls'&& $extension!='xlsx') {
				$error = 'Недопустимый тип файла';
				
			} elseif (!empty($allow) && !in_array($extension, $allow)) {
				$error = 'Недопустимый тип файла';
				
			} elseif (!empty($deny) && in_array($extension, $deny)) {
				$error = 'Недопустимый тип файла';
				
			} else {
				// Перемещаем файл в директорию.
				
				if($extension=='csv'){				
					$success = 'unlink '.array_map('unlink', glob($path.'*.[cC][sS][vV]'));
				}
				////***XLS */
				if($extension=='xls' || $extension=='xlsx' ){					
					$filename=__DIR__ ."/temp/" . $name;					
					move_uploaded_file($file['tmp_name'], $filename);
					$fxls= include "getxlsx-specification6.php";
					if($fxls){
						array_map('unlink', glob($path.'*.[cC][sS][vV]'));
						rename(__DIR__ ."/temp/".$fxls, $path . $fxls);
						unlink($filename);	
						$success = 'Файл «' . $name . '» успешно загружен.';
					}else {
						$error = 'Не удалось загрузить файл.';
					}
				}elseif (move_uploaded_file($file['tmp_name'], $path . $name)) {
					// Далее можно сохранить название файла в БД и т.п.
					$success = 'Файл «' . $name . '» успешно загружен.';
				} else {
					$error = 'Не удалось загрузить файл.';
				}
				////***XLS */
				

				// if (move_uploaded_file($file['tmp_name'], $path . $name)) {
				
				// 	$success = 'Файл «' . $name . '» успешно загружен.';
				// } else {
				// 	$error = 'Не удалось загрузить файл.';
				// }
			}
		}
		
		if (!empty($success)) {
			$data[] = '<p style="color: green">' . $success . '</p>';  


		}
		if (!empty($error)) {
		
			$data[] = null;  
		}
	}
	
	
}


if (!empty($success)) {
			
	$data[] = include "checkCPU.php";
			
}
 
// Вывод сообщений о результате загрузки.
header('Content-Type: application/json');
echo json_encode($data, JSON_UNESCAPED_UNICODE);
exit();