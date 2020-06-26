@isTest
global class AnimalLocatorMock implements HttpCalloutMock{
    global HttpResponse respond(HttpRequest request){
        //Create Fake Response
        HttpResponse response = new HttpResponse();
        response.setHeader('Content-Type', 'application/json;charset=UTF-8');
        response.setStatusCode(200);
        response.setBody('{"animal":{"id":1,"name":"chicken","eats":"a","says":"b"}} ');
        return response;
    }
}