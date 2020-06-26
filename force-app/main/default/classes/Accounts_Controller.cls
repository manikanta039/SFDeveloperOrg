public with sharing class Accounts_Controller {
    public Accounts_Controller() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, NumberOfEmployees, Number_of_Contacts__c FROM Account LIMIT 100];
    }

    @AuraEnabled
    public static List<Account> getSearchedContacts(String searchKey){
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, NumberOfEmployees, Number_of_Contacts__c FROM Account WHERE Name Like : key Limit 100]; 
    }

    
}

//SELECT Id, Name, NumberOfEmployees, Number_of_Contacts__c, (Select Id, Name FROM Contacts )FROM Account LIMIT 100