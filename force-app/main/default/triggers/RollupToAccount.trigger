trigger RollupToAccount on Contact (After insert, After update) {
    //add recursive logic
    /*List<Aggregateresult> ar = [select sum(Amount__c), AccountId from contact where AccountId!= null group by AccountId];
    List<Account> accList = new List<Account>();
    
    for(Aggregateresult arl : ar){
        system.debug('Aggregateresult '+arl);
        Account acc = new Account(Id = (Id)arl.get('AccountId'), Amount__c = (Decimal)arl.get('expr0'));
        acclist.add(acc);
    }
    
    if(!accList.isEmpty())
        update accList; */
	
}