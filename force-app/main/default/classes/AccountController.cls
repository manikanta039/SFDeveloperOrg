public with sharing class AccountController {

    @AuraEnabled
    public static List<Account> findAll() {
    return [SELECT Id, Name, Location__Latitude__s, Location__Longitude__s, Industry, Phone, Website
            FROM Account
            WHERE Location__Latitude__s != NULL AND Location__Longitude__s != NULL
            LIMIT 50];
    }
    
    @AuraEnabled
    public static List<Account> allAccounts() {
    return [SELECT Id, Name, Location__Latitude__s, Location__Longitude__s, Industry, Phone, Website
            FROM Account
            LIMIT 20];
    }
    
    @AuraEnabled
    public static boolean saveAccounts(List<Account> accList) {
        system.debug('accList '+accList);
        try {
            
            update accList;
            return true;
        }
        catch(Exception e) {
            system.debug('exception'+e);
            return false;   
        }
    }
    
    @AuraEnabled
    public static List<Account> searchAccounts(String searchKey){
        system.debug('searchKey'+ searchKey);
        String keyword ='%'+searchKey+'%';
        return [SELECT Id, Name, Location__Latitude__s, Location__Longitude__s, Industry, Phone, Website
            FROM Account
            WHERE Name Like: keyword or Phone Like: keyword
            LIMIT 20];
    }
    
    @AuraEnabled
    public static void deleteAccount(Id recId){
		if(recId !=null) {
            Account acc = [select id from Account where id =: recId];
            system.debug('acc '+ acc);
            delete acc;
        }
    }
    

}