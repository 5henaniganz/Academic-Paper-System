<?php

/**
 * Makes a connection to the database
 * 
 * This class contains the logic in order to
 * connect to any database within the /db file
 * path.
 * 
 * @author Jordan Short
 */
class Database {
    private $dbConnection;
    public function __construct($dbName) {
        $this->setDbConnection($dbName);
    }
    private function setDbConnection($dbName) {
        try {
            $this->dbConnection = new PDO('sqlite:' . $dbName);
            $this->dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e) {
            echo "Database Connection Error: " . $e->getMessage();
            exit();
        }
    }

    public function executeSQL($sql, $params = []) {
        $stmt = $this->dbConnection->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}