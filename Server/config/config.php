<?php

/**
 * Configuration for db and base paths
 * 
 * @author Jordan Short
 */
include 'config/autoloader.php';
include 'config/htmlexceptionhandler.php';
include 'config/jsonexceptionhandler.php';
include 'config/errorhandler.php';
spl_autoload_register("autoloader");

define('BASEPATH', '/kf6012/coursework/part1/');
define('DATABASE', 'db/dis.sqlite');
define('USER_DATABASE', 'db/user.sqlite');
define('SECRET_KEY', 'xyz1234');
define('DEVELOPMENT_MODE', true);

ini_set('display_errors', DEVELOPMENT_MODE);
ini_set('display_startup_errors', DEVELOPMENT_MODE);

set_exception_handler("JSONexceptionHandler");
set_error_handler("errorHandler");