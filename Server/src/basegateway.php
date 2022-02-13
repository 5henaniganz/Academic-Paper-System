<?php

/**
 * Contains all the SQLite logic
 * 
 * This class contains all the methods in order
 * to execute the SQLite queries for the api as
 * well as the description for the default endpoint.
 * 
 * @author Jordan Short
 */
class BaseGateway extends Gateway {
    public function __construct() {
        $this->setDatabase(DATABASE);
    }
    public function apiDesc() {
        $result['name'] = "Jordan Short";
        $result['student_id'] = "W18039155";
        $result['api_desc'] = "";
        $result['api_access'] = "";
        $this->setResult($result);
    }
    public function oneAuthor($id) {
        $sql = "select author_id, first_name, middle_name, last_name from author where author_id = :id";
        $params = ["id" => $id];
        $result = $this->getDatabase()->executeSQL($sql, $params);
        $this->setResult($result);
    }
    public function allAuthor() {
        $sql = "select author_id, first_name, middle_name, last_name from author";
        $result = $this->getDatabase()->executeSQL($sql);
        $this->setResult($result);
    }
    public function onePaper($id) {
        $sql = "select paper.paper_id, author.author_id, title, abstract, doi, video, preview, award_type.name as 'awards', author.first_name, author.middle_name, author.last_name from paper
                left join award on (paper.paper_id = award.paper_id)
                left join award_type on (award.award_type_id = award_type.award_type_id)
                left join paper_author on (paper.paper_id = paper_author.paper_id)
                left JOIN author on (paper_author.author_id = author.author_id) where paper.paper_id = :id";
        $params = ["id" => $id];
        $result = $this->getDatabase()->executeSQL($sql, $params);
        $this->setResult($result);
    }
    public function allPapers() {
        $sql = "select paper.paper_id, author.author_id,title, abstract, doi, video, preview, award_type.name as 'awards', author.first_name, author.middle_name, author.last_name from paper
                left join award on (paper.paper_id = award.paper_id)
                left join award_type on (award.award_type_id = award_type.award_type_id)
                left join paper_author on (paper.paper_id = paper_author.paper_id)
                left JOIN author on (paper_author.author_id = author.author_id)";
        $result = $this->getDatabase()->executeSQL($sql);
        $this->setResult($result);
    }
    public function allAwards() {
        $sql = "select paper.paper_id, author.author_id,title, abstract, doi, video, preview, award_type.name as 'awards', author.first_name, author.middle_name, author.last_name from paper
                left join award on (paper.paper_id = award.paper_id)
                left join award_type on (award.award_type_id = award_type.award_type_id)
                left join paper_author on (paper.paper_id = paper_author.paper_id)
                left JOIN author on (paper_author.author_id = author.author_id) where award.paper_id;";
        $result = $this->getDatabase()->executeSQL($sql);
        $this->setResult($result);
    }
    public function paperAuthor($authorid) {
        $sql = "select paper.paper_id, author.author_id,title, abstract, doi, video, preview, award_type.name as 'awards', author.first_name, author.middle_name, author.last_name from paper
                left join award on (paper.paper_id = award.paper_id)
                left join award_type on (award.award_type_id  = award_type.award_type_id)
                left join paper_author on (paper.paper_id = paper_author.paper_id)
                left JOIN author on (paper_author.author_id = author.author_id) where author.author_id = :authorid";
        $params = ["authorid" => $authorid];
        $result = $this->getDatabase()->executeSQL($sql, $params);
        $this->setResult($result);
    }
}
