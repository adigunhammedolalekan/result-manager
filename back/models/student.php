<?php
/**
 * Created by PhpStorm.
 * User: Lekan Adigun
 * Date: 6/5/2018
 * Time: 2:37 AM
 */

class Student {

    public $matricNumber = 0;
    public $firstName = "";
    public $lastName = "";
    public $level = "";
    public $department;
    public $faculty;

    public function __construct($data) {
        $this->matricNumber = $data['matric_no'];
        $this->firstName = $data['first_name'];
        $this->lastName = $data['last_name'];
        $this->department = $data['department'];
        $this->faculty = $data['faculty'];
    }

    public function create() {

        $query = "INSERT INTO students(matric_no, first_name, last_name, level) VALUES (:matric, :fname, :lname, :lv)";
        $handle = DatabaseManager::getInstance()->query($query);
        $handle->bindValue(':matric', $this->matricNumber);
        $handle->bindValue(':fname', $this->firstName);
        $handle->bindValue(':lname', $this->lastName);
        $handle->bindValue(':lv', $this->level);
        $result = $handle->execute();

        if (!$result) {
            return array('status' => false, 'data' => null);
        }

        return array(
            'status' => true, 'data' => $this->get()
        );
    }

    /*
     * Return this Student
     * */
    public function get() {

        $query = "SELECT * FROM students WHERE matric_no = :matric";
        $handle = DatabaseManager::getInstance()->query($query);
        $handle->bindValue(':matric', $this->matricNumber);
        $handle->execute();

        $data = $handle->fetch(PDO::FETCH_ASSOC);
        return new Student($data);
    }
}
