<?php

use Firebase\JWT\JWT;

/**
 * Class that authenticates the user using JWT
 * 
 * This class takes in two parameters from the html body
 * "$email & $password", checks if correct, then returns
 * a JWT to the client. User JWT expires in 30 mins.
 * 
 * @author Jordan
 */
class ApiAuthenticateController extends Controller {
    
    protected function setGateway() {
        $this->gateway = new UserGateway();
    }
    
    protected function processRequest() {
        $data = [];

        $email = $this->getRequest()->getParameter("email");
        $password = $this->getRequest()->getParameter("password");
        $parsedEmail = $this->getGateway()->findId($email);

        if ($this->getRequest()->getRequestMethod() === "POST") {
            if (!is_null($email) && !is_null($password)) {
                $this->getGateway()->findPassword($email);
                if (count($this->getGateway()->getResult()) == 1) {
                    $hashpassword = $this->getGateway()->getResult()[0]['password'];
                    if (password_verify($password, $hashpassword)) {
                        $key = SECRET_KEY;
                        $payload = array(
                            "user_id" => $parsedEmail[0]['id'],
                            "exp" => time() + 1800
                        );
                        try {
                            $jwt = JWT::encode($payload, $key, 'HS256');
                            $data = ['token' => $jwt];
                        }catch(Exception $e){
                            echo 'Exception caught: ',  $e->getMessage(), "\n";  
                        }

                    }
                }
              
            } else {
                $this->getResponse()->setMessage("Unauthorized");
                $this->getResponse()->setStatusCode(401);
            }
          
        } else {
            $this->getResponse()->setMessage("Method not allowed");
            $this->getResponse()->setStatusCode(405);
        }

        return $data;
    }
}