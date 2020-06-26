trigger DuplicateEmailInContact on Contact ( before insert, before Update) {
    Map<id,List<Contact>> accWithConMap = new Map<id,List<Contact>>();
    
    for(Contact c: [select id, Email, AccountId from Contact]) {
        if(accWithConMap.containsKey(c.AccountId)) {
            accWithConMap.get(c.AccountId).add(c);
        } else {
            accWithConMap.put(c.AccountId,new List<Contact>{c});
        }
    }
    
    /*for(Account acc: [SELECT id,(SELECT email from Contacts) FROM Account]){
        accWithConMap.put(acc.id, new List<Contact>{acc.Contacts});
    }*/
    
    for(Contact c: trigger.new) {
        if((c.Email!=null) && ((Trigger.isInsert) || (c.Email <> Trigger.oldMap.get(c.Id).Email))){
        for(Contact con : accWithConMap.get(c.accountId)){
        	if(c.Email == con.Email){
            	c.Email.addError('Contact with this email address already exists');
            }
        }
           }
    } 
}