trigger DuplicateContact on Contact (before insert, after insert, after update) {
   
    Map<id,set<Contact>> AccountContactMap = new Map<id,set<Contact>>();
    //List<Contact> contacts = Trigger.new;
    
    for(Account acc : [Select id,(select id, name, email from Contacts) from Account]) {
        AccountContactMap.put(acc.id, new set<Contact>(acc.contacts));
    }
    
    for(Contact con : Trigger.New) {
		if((con.Email!=null) && ((Trigger.isInsert) || (con.Email <> Trigger.oldMap.get(con.Id).Email))){
            for(Contact contactRel : AccountContactMap.get(con.AccountId) ) {
                if(con.Email == contactRel.Email && contactRel.id <> con.Id)
                    con.addError('Duplicate Email...');
            }
		}
        if (AccountContactMap.containsKey(con.AccountId)){
               AccountContactMap.get(con.AccountId).add(con);
            } else {
                AccountContactMap.put(con.AccountId,new set<Contact>{con});
       	}
    }
    
    if(Trigger.isAfter) {
        
        Set<String> atmSet = new Set<String>();
    
        for(AccountTeamMember atm : [select AccountId, UserId from AccountTeamMember]) {
            String key = atm.AccountId+'-'+atm.UserId;
            atmSet.add(key);
        }
        
    	List<AccountTeamMember> atm = new List<AccountTeamMember>();
        for(Contact con : Trigger.New) {
            if(con.Account_Manager__c != null){
                AccountTeamMember am = new AccountTeamMember(AccountId = con.AccountId, UserId = con.Account_Manager__c);
                atm.add(am);
            }
        }
        if(!atm.isEmpty()) {
        	insert atm;
   		}    
    }
    
    

}