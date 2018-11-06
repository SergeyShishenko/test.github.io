<?php
/*
* File: SimpleImage.php
* Author: Simon Jarvis
* Copyright: 2006 Simon Jarvis
* Date: 08/11/06
* Link: http://www.white-hat-web-design.co.uk/articles/php-image-resizing.php
*
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 2
* of the License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details:
* http://www.gnu.org/licenses/gpl.html
*
*/
// класс под название SimpleImage, который позволяет довольно гибко изменять размеры изображения

class SimpleImage {

   var $image;
   var $image_type;

   function load($filename) {
      $image_info = getimagesize($filename);
      $this->image_type = $image_info[2];
      if( $this->image_type == IMAGETYPE_JPEG ) {
         $this->image = imagecreatefromjpeg($filename);
      } elseif( $this->image_type == IMAGETYPE_GIF ) {
         $this->image = imagecreatefromgif($filename);
      } elseif( $this->image_type == IMAGETYPE_PNG ) {
         $this->image = imagecreatefrompng($filename);
      }
   }
   function save($filename, $image_type=IMAGETYPE_JPEG, $compression=75, $permissions=null) {
      if( $image_type == IMAGETYPE_JPEG ) {
         imagejpeg($this->image,$filename,$compression);
      } elseif( $image_type == IMAGETYPE_GIF ) {
         imagegif($this->image,$filename);
      } elseif( $image_type == IMAGETYPE_PNG ) {
         imagepng($this->image,$filename);
      }
      if( $permissions != null) {
         chmod($filename,$permissions);
      }
   }
   function output($image_type=IMAGETYPE_JPEG) {
      if( $image_type == IMAGETYPE_JPEG ) {
         imagejpeg($this->image);
      } elseif( $image_type == IMAGETYPE_GIF ) {
         imagegif($this->image);
      } elseif( $image_type == IMAGETYPE_PNG ) {
         imagepng($this->image);
      }
   }
   function getWidth() {
      return imagesx($this->image);
   }
   function getHeight() {
      return imagesy($this->image);
   }
   function resizeToHeight($height) {
      $ratio = $height / $this->getHeight();
      $width = $this->getWidth() * $ratio;
      $this->resize($width,$height);
   }
   function resizeToWidth($width) {
      $ratio = $width / $this->getWidth();
      $height = $this->getheight() * $ratio;
      $this->resize($width,$height);
   }
   function scale($scale) {
      $width = $this->getWidth() * $scale/100;
      $height = $this->getheight() * $scale/100;
      $this->resize($width,$height);
   }
   function resize($width,$height) {
      $new_image = imagecreatetruecolor($width, $height);
      imagecopyresampled($new_image, $this->image, 0, 0, 0, 0, $width, $height, $this->getWidth(), $this->getHeight());
      $this->image = $new_image;
   }
}
?>

<!-- Следующий участок кода загрузит изображение image.jpg, 
изменить его ширину до 400 пикселей и высоту до 200 пикселей, 
а затем сохранит как image1.jpg. -->

   <!-- include('classSimpleImage.php');
   $image = new SimpleImage();
   $image->load('image.jpg');
   $image->resize(400, 200);
   $image->save('image1.jpg'); -->


<!-- Если необходимо изменить размеры изображения, 
основываясь только на ширине и при этом сохранить его пропорции, 
то сценарий сам выберет необходимую высоту. 
Для этого необходимо использовать метод resizeToWidth. -->

   <!-- include('classSimpleImage.php');
   $image = new SimpleImage();
   $image->load('image.jpg');
   $image->resizeToWidth(250);
   $image->save('image1.jpg'); -->


<!-- Возможно вы пожелаете изменить размер в процентном 
соотношении от его оригинала. 
Для этого существует метод scale, 
в качестве параметра которому передаются проценты. -->

   <!-- include('classSimpleImage.php');
   $image = new SimpleImage();
   $image->load('image.jpg');
   $image->scale(50);
   $image->save('image1.jpg'); -->


<!-- У данного класса есть еще один очень полезный метод output, который позволяет выводить изображения прямо в браузер,
 без предварительного сохранения. 
 Данный метод может быть очень полезен при создании миниатюр. -->
 
   <!-- header('Content-Type: image/jpeg');
   include('classSimpleImage.php');
   $image = new SimpleImage();
   $image->load('image.jpg');
   $image->resizeToWidth(150);
   $image->output(); -->


<!-- Автор данного класса Simon Jarvis, на своем сайте https://white-hat-web-design.co.uk
предлагает следующий пример для 
изменения размера изображения загруженного через форму. -->


<!-- if (isset($_POST['submit']) ) {
    include('classSimpleImage.php');
    $image = new SimpleImage();
    $image->load($_FILES['uploaded_image']['tmp_name']);
    $image->resizeToWidth(150);
    $image->output();
}
else {
  $form = '<form action="upload.php" method="post" enctype="multipart/form-data">
      <input type="file" name="uploaded_image" />
      <input type="submit" name="submit" value="Upload" />
    </form>';
  echo $form;
} -->