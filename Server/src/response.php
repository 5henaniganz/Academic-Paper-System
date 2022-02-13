<?php

/**
 * Sends http response headers to the client and data
 * 
 * @author Jordan Short
 */
abstract class Response {
    protected $data;
    public function __construct() {
        $this->headers();
    }
    protected function headers() {
    }
    public function setData($data) {
        $this->data = $data;
    }
    public function getData() {
        return $this->data;
    }
}
