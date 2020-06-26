trigger OldVsNew on Contact (after update) {
    
    List<Account> account = new List<Account>();
        
        for(Contact con: Trigger.New) {
            if (con.MailingPostalCode <> Trigger.OldMap.get(con.Id).MailingPostalCode) {
                Account acc = New Account(Id = con.AccountId, BillingPostalCode = con.MailingPostalCode);
                
                account.add(acc);
            }
            
        }
    
    update account;
    
}