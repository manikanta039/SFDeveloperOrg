public with sharing class GetContacts {
    
    @AuraEnabled(cacheable=true)
    public static List<contact> fetchcontacts(){
        return [select name from contact limit 5];
    }
    
}