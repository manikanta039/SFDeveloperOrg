public class ContactsController {
    @AuraEnabled
    public static List<Contact> fetchContacts(string AccountId) {
        system.debug('AccountId'+AccountId);
        List<Contact> contacts = [select id, LastName, EMAIL from Contact where AccountId =: AccountId Limit 50];
         return contacts;
    }
    
    @AuraEnabled
    public static Contact createContact(Contact con, string AccountId) {
        con.AccountId = AccountId;
        insert con;
        system.debug('Contact'+con);
        return con;
    }

}