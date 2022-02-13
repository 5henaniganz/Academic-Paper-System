<?php

/**
 * Development mode error handling.
 * 
 * Parses error and throws an exception with file path,
 * error code and line.
 * 
 * @author Jordan Short
 */
function errorHandler($errno, $errstr, $errfile, $errline) {
    if (($errno != 2 && $errno != 8) || DEVELOPMENT_MODE) {
        throw new Exception("Error: [$errno] $errstr file: $errfile line: $errline", 1);
    }
}