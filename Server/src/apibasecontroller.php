<?php

/**
 * Class that acts as a controller for the base gateway
 * 
 * @author Jordan Short
 */
class ApiBaseController extends Controller {
    protected function setGateway() {
        $this->gateway = new BaseGateway();
    }
    protected function processRequest() {
        $this->getGateway()->apiDesc();
        return $this->getGateway()->getResult();
    }
}