<?php 

/**
 * Error handling for API
 * 
 * Will throw error as a json response rather than
 * html, when making api calls.
 * 
 * @author Jordan Short
 */
function JSONexceptionHandler($e) {
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $output['error'] = "Server error!";

    if (DEVELOPMENT_MODE) {
        $output['Message'] = $e->getMessage();
        $output['File'] = $e->getFile();
        $output['Line'] = $e->getLine();
    }

    echo json_encode($output);
}