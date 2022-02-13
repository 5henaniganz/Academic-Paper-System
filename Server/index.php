<?php

/**
 * Main api routes
 * 
 * This class contains all the routes associated
 * with the api that the client can access.
 * 
 * @author Jordan Short
 */
include 'config/config.php';
$request = new Request();
$response = (substr($request->getPath(), 0, 3) === "api") ? new JSONResponse() : new HTMLResponse();
switch ($request->getPath()) {
    case 'home':
    case '':
        $controller = new HomeController($request, $response);
    break;
    case 'documentation':
        $controller = new DocumentController($request, $response);
    break;
    case 'api':
        $controller = new ApiBaseController($request, $response);
    break;
    case 'api/authors':
        $controller = new ApiAuthorController($request, $response);
    break;
    case 'api/papers':
        $controller = new ApiPapersController($request, $response);
    break;
    case 'api/authenticate':
        $controller = new ApiAuthenticateController($request, $response);
    break;
    case 'api/readinglist':
        $controller = new ApiViewingListController($request, $response);
    break;
    default:
    if (substr($request->getPath(),0,3) === "api") {
        $controller = new ApiErrorController($request, $response);
    } else {
        $controller = new ErrorController($request, $response);
    }
    break;
}
echo $response->getData();