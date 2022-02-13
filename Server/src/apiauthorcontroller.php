<?php

/**
 * Class that checks the url for the author endpoint
 * 
 * This class checks the url and completes other sorting
 * logic in order to allow users to recieve the correct
 * author, via $id.
 * 
 * @author Jordan Short
 */
class ApiAuthorController extends Controller {
    protected function setGateway() {
        $this->gateway = new BaseGateway();
    }
    protected function processRequest() {
        $id = isset($_GET['id']) ? $_GET['id'] : '';
        if (htmlspecialchars($id) > 59462) {
            $this->getResponse()->setMessage("Ok");
            $this->getResponse()->setStatusCode(200);
            $id = $this->getRequest()->getParameter("id");
            $this->getGateway()->oneAuthor($id);
        } else if (htmlspecialchars($id) < 59463 && $id != "") {
            $this->getResponse()->setMessage("No Content");
            $this->getResponse()->setStatusCode(204);
        } else {
            $this->getGateway()->allAuthor();
        }
        return $this->getGateway()->getResult();
    }
}