<?php

/**
 * Creates new instace of documentation webpage
 * 
 * @author Jordan Short
 */
class DocumentController extends Controller {
    protected function processRequest() {
        $docs = new WebPage;
        $dBod = new Docs;
        echo $docs->generateWebpage("Documentation", "https://cdn.tailwindcss.com", $dBod->docBody());
    }
}