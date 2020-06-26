trigger AccountContactByRakesh on Account (after insert, after update) {
	List<Contact> contactList  = new List<Contact>();
    Map<Id,Account> accWithCon = new Map<Id,Account>([SELECT Name,(SELECT Id,Name from Contacts) FROM Account WHERE Id IN : Trigger.new]);
      system.debug('accWithCon'+accWithCon);
    
    if(RecursiveTriggerHandler.isFirstTime){
        RecursiveTriggerHandler.isFirstTime = false;
    
    for(Account acc : Trigger.new){
        //system.debug('accWithCon contacts'+accWithCon.get(acc.Id).Contacts[0].Name);
        
        if(accWithCon.get(acc.Id).Contacts.size()==0){
            Contact con = new Contact();
            con.LastName = acc.Name+' Contact';
            con.AccountId = acc.Id;
            contactList.add(con);
        }
        system.debug('contactList'+contactList);
    }
    if(contactList.size() > 0){
        insert contactList;
        system.debug('contactList inserted');
    }
    
    //calling future method from trigger
    if(System.IsBatch() == false && System.isFuture() == false){ 
    // make your future call here 
        system.debug('Before feture method');
        List<Id> ids = new List<Id>(new Map<Id, Account>([select Id from Account]).keySet());
        AccountProcessor.countContacts(ids);
        system.debug('after feture method' + ids);
	}
    }
    
}