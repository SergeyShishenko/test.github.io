<?php
ini_set('session.gc_maxlifetime', 86400);// 24 часа
ini_set('session.cookie_lifetime', 0);
session_set_cookie_params(0);
session_start();
$_SESSION['ref'] = $_SERVER['REQUEST_URI'];
require_once('data.php');
if (!isset($_SESSION['sess_login']) || !isset($_SESSION['sess_pass']) || $_SESSION['sess_login']!==$enter_login || $_SESSION['sess_pass']!==$enter_passw) { header('Location:index-session.php');    exit();}
?>