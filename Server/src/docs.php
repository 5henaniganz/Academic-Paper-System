<?php

/**
 * Creates a static html documentation page
 * 
 * @author Jordan Short
 */
class Docs {
    public function docBody() {
        return <<<EOL
        <body class="grid bg-teal-50 text-1xl font-sans font-bold grid-cols-5 grid-rows-2 gap-y-4 text-neutral-700">
        <div class="col-span-5 pt-5 pb-5 bg-sky-600 text-teal-50 pl-5 text-xl h-16">Jordan Short | Documentation</div>
        <div class="hidden md:block col-start-1 col-end-2 h-16">
            <h1 class="pb-4 pl-5 text-xl">Navigation</h1>
            <ul class="pl-5 text-lg">
                <li class="hover:text-neutral-400"><a href="#home">Home</a></li>
                <li class="hover:text-neutral-400"><a href="#authors">Authors</a></li>
                <li class="hover:text-neutral-400"><a href="#papers">Papers</a></li>
                <li class="hover:text-neutral-400"><a href="#auth">Authenticate</a></li>
                <li class="hover:text-neutral-400"><a href="#reading">Reading List</a></li>
            </ul>
        </div>
        <div class="col-start-2 col-end-5 h-10 space-y-4">
            <h1 class="pb-4 pl-5 text-xl">API Endpoints</h1>
            <div class="border-solid border rounded-md">
            <h1 id="home" class="pb-4 pt-3 pl-5 text-xl">Home</h1>
            <div class="ml-5 space-y-2">
            <div>Path: /part1/api</div>
            <div>Allowed Methods: <div class="inline bg-sky-600 p-1 rounded-lg text-teal-50 text-center mt-2 mb-2">GET</div></div>
            <div>Link: <a class="text-sky-600" href="http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/">Click here</a></div>
            <div class="pb-4">Description: /api is the base endpoint for the api and will return JSON containing a student name (in this case my own) and a brief explaination of what an api is. It will also include information on how to access the API documentation.</div>
        </div>
        </div>
        
        <div class="border-solid border rounded-md">
            <h1 id="authors" class="pb-4 pt-3 pl-5 text-xl">Authors</h1>
            <div class="ml-5 space-y-2">
            <div>Path: /part1/api/authors</div>
            <div>Allowed Methods: <div class="inline bg-sky-600 p-1 rounded-lg text-teal-50 text-center mt-2 mb-2">GET</div></div>
            <div>Link: <a class="text-sky-600" href="http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/authors">Click here</a></div>
            <div class="pb-4">The default route for "api/authors" will provide a list of all authors on record, however using the prefix "?id=" you can search for an author via their author id. See example below:</div>
            <div class="pb-4">Search by author id: <a class="text-sky-600" href="http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/authors?id=59463">http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/authors?id=59463</a></div>
        </div>
        </div>
        
        <div class="border-solid border rounded-md">
            <h1 id="papers" class="pb-4 pt-3 pl-5 text-xl">Papers</h1>
            <div class="ml-5 space-y-2">
            <div>Path: /part1/api/papers</div>
            <div>Allowed Methods: <div class="inline bg-sky-600 p-1 rounded-lg text-teal-50 text-center mt-2 mb-2">GET</div></div>
            <div>Link: <a class="text-sky-600" href="http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers">Click here</a></div>
            <div class="pb-4">The default route for "/api/papers/" will provide a list of all papers, with aditional methods being "?id=" to return a specified paper through their paper id, "?authorid=" to return all papers associated with the authors id and "?award=all" to return papers that have recieved an award. See examples below:</div>
            <div>Search by paper id: <a class="text-sky-600" href="http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?id=60087">http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?id=60087</a></div>
            <div>Search by author id <a class="text-sky-600" href="http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?authorid=59630">http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?authorid=59630</a></div>
            <div class="pb-4">Search by awards: <a class="text-sky-600" href="http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?award=all">http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?award=all</a></div>
        </div>
        </div>
        
        <div class="border-solid border rounded-md">
            <h1 id="auth" class="pb-4 pt-3 pl-5 text-xl">Authenticate</h1>
            <div class="ml-5 space-y-2">
            <div>Path: /part1/api/authenticate</div>
            <div>Allowed Methods: <div class="inline bg-emerald-600 p-1 rounded-lg text-teal-50 text-center mt-2 mb-2">POST</div></div>
            <div>Link: <a class="text-sky-600" href="http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/authenticate">Click here</a></div>
            <div class="pb-4">The authenticate endpoint takes two strings as parameters, an email and a password. This should be sent in the body of the http request. If successful the client will be sent a JSON Web Token (JWT) that is needed to authenticate certain api endpoints such as "api/readinglist"</div>
        </div>
        </div>
        
        <div class="border-solid border rounded-md">
            <h1 id="reading" class="pb-4 pt-3 pl-5 text-xl">Reading List</h1>
            <div class="ml-5 space-y-2">
            <div>Path: /part1/api/readinglist</div>
            <div>Allowed Methods: <div class="inline bg-sky-600 p-1 rounded-lg text-teal-50 text-center mt-2 mb-2">GET</div> <div class="inline bg-emerald-600 p-1 rounded-lg text-teal-50 text-center mt-2 mb-2">POST</div></div>
            <div>Link: <a class="text-sky-600" href="http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"> Click here</a></div>
            <div class="pb-4">Only while the user is authenticated will they have access to this endpoint. This endpoint can add or remove from a users reading list, and this should be done through the body of the http request. An example of adding a record would be:</div>
        </div>
        </div>
        
        </div>
        </body>
EOL;
        
    }
}