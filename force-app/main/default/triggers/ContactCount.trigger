trigger ContactCount on Account (after insert, before update) {
    List<Account> accountList = new List<Account>();
    Map<Id,Account> accWithCon = new Map<Id,Account>([Select Id, (select Id from Contacts) From Account where Id IN : Trigger.New]);
    for(Account acc : Trigger.new) {
        Account a = new Account(Id = acc.Id);
        	a.contact_count__c = accWithCon.get(acc.Id).Contacts.size();
        	accountList.add(a);
    }
    if(accountList.size() > 0){
        update accountList;
    }
}