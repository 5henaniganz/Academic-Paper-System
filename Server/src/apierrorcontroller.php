<?php

/**
 * Processes messages in the event of an error.
 * 
 * @author Jordan Short
 */
class ApiErrorController extends Controller {
    protected function processRequest() {
        $data['message'] = "Endpoint not found";
        $data['documentation'] = "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/";
        $this->getResponse()->setMessage("File Not Found");
        $this->getResponse()->setStatusCode(404);
        return $data;
    }
}