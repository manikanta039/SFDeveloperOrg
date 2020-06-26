public with sharing class ContactControllerDB {
	
    @AuraEnabled
    Public static List<Contact> getContactList(){
        //get all contact list
        List<Contact> conList = [SELECT Id, Name, Email, Invoice_Email__c FROM Contact where Email != null LIMIT 40];
        return conList;
    }
    
    @AuraEnabled    
    public static String insertData(List<Contact> conList) {
        System.debug('conList'+conList);
        try{
            update conList;
            return 'Yes';
        }
        catch(Exception ex) {
            return ex.getMessage();
        }
    }

}