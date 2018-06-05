<?php
/**
 * Created by PhpStorm.
 * User: Lekan Adigun
 * Date: 6/5/2018
 * Time: 2:21 AM
 */

class DatabaseManager {

    private static $instance;
    private $connection; //DB connection handle

    private function __construct() {
        $cred = include_once __DIR__ . '../includes/credentials.php';

       try {
           $dsn = "mysql:host=" . $cred["DB_HOST"] . ";dbname=" . $cred["DB_NAME"];
           $this->connection = new PDO($dsn, $cred["DB_USERNAME"], $cred["DB_PASSWORD"]);
       }catch (Exception $ex) {}

    }

    /*
     * Get singleton instance of this class
     * */
    public static function getInstance() {

        if (!isset(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    private function getConnection() {
        return $this->connection;
    }

    public function query($sql) {
        return $this->connection->query($sql);
    }
}