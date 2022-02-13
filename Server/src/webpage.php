<?php

/**
 * Page generation for splash page
 * 
 * @author Jordan Short
 */
class WebPage {
    private $head;
    private $body;
    private $foot;

    public function getHead() {
        return $this->head;
    }
    public function getBody() {
        return $this->body;
    }
    public function getFoot() {
        return $this->foot;
    }
    public function setHead($title, $style) {
        return $this->head = <<<EOT
    <!DOCTYPE html>
    <head>
    <meta charset="utf-8">
        <title>$title</title>
        <script src="$style"></script>
    </head>
EOT;
        
    }
    public function setBody($heading) {
        return $this->body = "$heading";
    }
    public function setFoot() {
        return $this->foot = <<<EOT
    </html>
EOT;
    }
    public function generateWebpage($head, $style, $body) {
        return $this->setHead($head, $style) . "" . $this->setBody($body) . " " . $this->setFoot();
    }
}