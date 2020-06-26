public class FetchAccounts {
    @AuraEnabled
    public static List<Account> getAccounts(){
        List<Account> accounts = [select id,Name from Account Limit 10];
        return accounts;
    }

}