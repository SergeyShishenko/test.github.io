<?php
ini_set('session.gc_maxlifetime', 43200);// 12 часов
ini_set('session.cookie_lifetime', 0);
// session_set_cookie_params(0);
session_start();
$_SESSION['ref'] = $_SERVER['REQUEST_URI'];
define('__ROOT__', dirname(dirname(dirname(__FILE__)))); 
// echo __ROOT__.'/DATA/data.php';
require_once(__ROOT__.'/DATA/data.php'); 
require_once(__ROOT__.'/DATA/TABLES/configDB.php');
// require_once('DATA/data.php');
if (!isset($_SESSION['sess_login']) || !isset($_SESSION['sess_pass']) || $_SESSION['sess_login']!==$enter_login || $_SESSION['sess_pass']!==$enter_passw) { header('Location:index-session.php');    exit();}
?>