trigger AccountAddressTrigger on Account (before insert, before update) {
    for(Account acc : Trigger.New){
        
        if(acc.Match_Billing_Address__c == true && acc.BillingPostalCode != null) {
            
            acc.ShippingPostalCode = acc.BillingPostalCode ;
        }
    }
}