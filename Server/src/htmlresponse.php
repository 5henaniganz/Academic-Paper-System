<?php

/**
 * Allows any http requests to the server
 * 
 * @author Jordan Short
 */
class HTMLResponse extends Response {
    protected function headers() {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: text/html; charset=UTF-8");
    }
}