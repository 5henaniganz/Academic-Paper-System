<?php

/**
 * Class that performs logic based on url parameters
 * 
 * This class checks the url and completes other sorting
 * logic in order to allow users to recieve the correct
 * paper based on parameters selected, such as:
 * /api/papers?id=#####
 * 
 * @author Jordan Short
 */
class ApiPapersController extends Controller {
    protected function setGateway() {
        $this->gateway = new BaseGateway();
    }
    protected function processRequest() {
        if (strpos($_SERVER['REQUEST_URI'], "papers?id")) {
            $this->getResponse()->setMessage("ok");
            $this->getResponse()->setStatusCode(200);
            $id = $this->getRequest()->getParameter("id");
            $this->getGateway()->onePaper($id);
        } else if (strpos($_SERVER['REQUEST_URI'], "papers?authorid")) {
            $this->getResponse()->setMessage("ok");
            $this->getResponse()->setStatusCode(200);
            $paperAuthorId = $this->getRequest()->getParameter("authorid");
            $this->getGateway()->paperAuthor($paperAuthorId);
        } else if (strpos($_SERVER['REQUEST_URI'], "papers?award=all")) {
            $this->getResponse()->setMessage("ok");
            $this->getResponse()->setStatusCode(200);
            $this->getGateway()->allAwards();
        } else if (strpos($_SERVER['REQUEST_URI'], "part1/api/papers")) {
            $this->getResponse()->setMessage("ok");
            $this->getResponse()->setStatusCode(200);
            $this->getGateway()->allPapers();
        }else{
            $this->getResponse()->setMessage("Endpoint not Found");
            $this->getResponse()->setStatusCode(404);
        }
        return $this->getGateway()->getResult();
    }
}