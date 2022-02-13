<?php

/**
 * Generates splash page for the api docs.
 * 
 * @author Jordan Short
 */
class HomeController extends Controller {
    protected function processRequest() {
        $home = new WebPage;
        echo <<<EOL
        <body class="bg-teal-50 text-1xl font-sans font-bold">
        <div class="flex flex-col h-screen justify-center items-center space-y-4">
            <h1 class="text-center font-bold text-neutral-700">
                Part 1: Web API - Jordan Short (W18039155)
              </h1>
            <img src="./assets/document.png" alt="Documentation" class="w-80 md:w-80 lg:w-96">
            <div>
    
      <h2 class="text-center font-bold text-neutral-700">
        These works are for university coursework and not associated with or endorsed by the DIS conference.
      </h2>
    </div>
    
    <div>
    <form action="/kf6012/coursework/part1/documentation">
        <button class="bg-sky-600 rounded-full p-2 pr-4 pl-4 font-bold text-teal-50 hover:bg-teal-50 hover:text-sky-600">Documentation</button>
    </form>
    </div>
    </div>
    </body>
EOL;
        echo $home->generateWebpage("Home", "https://cdn.tailwindcss.com", "");
    }
}