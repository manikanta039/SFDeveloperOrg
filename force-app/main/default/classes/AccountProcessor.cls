public class AccountProcessor {
    @future
    public static void countContacts(List<id> accIds){
        List<Account> accList = [select id, Number_of_Contacts__c, (select id from contacts) from Account where id in :accids];
        for(Account acc:accList) {
            List<Contact> contacts = acc.contacts;
            acc.Number_of_Contacts__c  = contacts.size();
        }
        update accList;
        system.debug('update sucessfull@@@'+ accList);
    }

}

/*
 * List<id> ids = new List<id>();
ids.add('0016F00003P4zDMQAZ');
ids.add('0016F00002MlGPnQAN');
system.debug('ids@@@'+ids);

AccountProcessor.countContacts(ids);
*/