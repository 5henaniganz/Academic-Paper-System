<?php

/**
 * Controller for handling html redirect errors.
 * 
 * @author Jordan Short
 */
class ErrorController extends Controller 
{
    protected function processRequest() {
        $page = "Whoops, That page cant be found! <a href='http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1'>Return Home</a>";
        return $page;
    }
}