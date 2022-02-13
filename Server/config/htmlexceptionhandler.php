<?php

/**
 * Error handling hor html pages.
 * 
 * @author Jordan Short
 */
function HTMLexceptionHandler($e) {
    echo "<p>Server error!</p>";
        if (DEVELOPMENT_MODE) {
            echo "<p>";
            echo "Message: ".  $e->getMessage();
            echo "<br>File: ". $e->getFile();
            echo "<br>Line: ". $e->getLine();
            echo "</p>";
        }
}