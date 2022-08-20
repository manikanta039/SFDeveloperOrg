@RestResource(urlMapping='/Accounts/*/contacts')
global class AccountManager{
    @HttpGet
    global static Account getAccount(){
        System.RestRequest req = System.RestContext.request;
        String accId = req.requestURI.substringBetween('Accounts/','/contacts');
        return [SELECT Id, Name, (SELECT Id, Name FROM contacts) FROM Account WHERE Id = :accId];
    }
}