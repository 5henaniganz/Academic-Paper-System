<?php

/**
 * Handles api's json responses
 * 
 * Sets message, status code and data to then
 * be parsed and send in a json format to the client.
 * 
 * @author Jordan Short
 */
class JSONResponse extends Response 
{
    private $message;
    private $statusCode;
    protected function headers() {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
    }
    public function setMessage($message) {
        $this->message = $message;
    }
    public function setStatusCode($statusCode) {
        $this->statusCode = $statusCode;
    }
    public function getData() {
        if (is_null($this->data)) {
            $this->data = [];
        }
        if (is_null($this->message)) {
            if (count($this->data) > 0) {
                $this->message = "ok";
                $this->setStatusCode(200);
            } else {
                $this->message = "no content";
                $this->setStatusCode(204);
            }
        }
        http_response_code($this->statusCode);
        $response['message'] = $this->message;
        $response['count'] = count($this->data);
        $response['results'] = $this->data;
        return json_encode($response);
    }
}