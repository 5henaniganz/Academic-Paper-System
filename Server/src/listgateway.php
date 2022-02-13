<?php

/**
 * Logic for readinglist/users database
 * 
 * This class makes use of a number of methods
 * to add, remove papers from the database as 
 * well as finding all papers based on the logged in
 * user.
 * 
 * @author Jordan Short
 */
class ListGateway extends Gateway {
    public function __construct() {
        $this->setDatabase(USER_DATABASE);
    }
    public function findAll($user_id) {
        $sql = "SELECT DISTINCT paper_id FROM list WHERE user_id = :user_id";
        $params = [":user_id" => $user_id];
        $result = $this->getDatabase()->executeSQL($sql, $params);
        $this->setResult($result);
    }
    public function add($user_id, $paper_id) {
        $sql = "INSERT into list (user_id, paper_id) VALUES (:user_id, :paper_id)";
        $params = [":user_id" => $user_id, ":paper_id" => $paper_id];
        $result = $this->getDatabase()->executeSQL($sql, $params);
    }
    public function remove($user_id, $paper_id) {
        $sql = "DELETE from list where (user_id = :user_id) AND (paper_id = :paper_id)";
        $params = [":user_id" => $user_id, ":paper_id" => $paper_id];
        $result = $this->getDatabase()->executeSQL($sql, $params);
    }
}