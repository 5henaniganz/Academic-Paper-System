<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

/**
 * Instantiates logic based on parameters passed to the body
 * 
 * This class checks if the client has sent a valid token,
 * if so then it will then check to see if the body contains
 * either an "add" or "remove" parameter. Then execute the 
 * desired method.
 * 
 * @author Jordan Short
 */
class ApiViewinglistController extends Controller {
    protected function setGateway() {
        $this->gateway = new ListGateway();
    }
    protected function processRequest() {
        $token = $this->getRequest()->getParameter("token");
        $add = $this->getRequest()->getParameter("add");
        $remove = $this->getRequest()->getParameter("remove");
        if ($this->getRequest()->getRequestMethod() === "POST") {
            if (!is_null($token)) {
                $key = SECRET_KEY;
                $decoded = JWT::decode($token, new Key($key, 'HS256'));
                $user_id = $decoded->user_id;
                $this->getGateway()->findAll($user_id);
                if (!is_null($add)) {
                    $this->getGateway()->add($user_id, $add);
                } elseif (!is_null($remove)) {
                    $this->getGateway()->remove($user_id, $remove);
                } else {
                    $this->getGateway()->findAll($user_id);
                }
            } else {
                $this->getResponse()->setMessage("Unauthorized");
                $this->getResponse()->setStatusCode(401);
            }
        } else {
            $this->getResponse()->setMessage("Unauthorized");
            $this->getResponse()->setStatusCode(401);
        }
        return $this->getGateway()->getResult();
    }
}