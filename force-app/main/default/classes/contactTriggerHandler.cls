public class contactTriggerHandler {
    
    public static void calculateRollupData(List<Contact> contacts) {
        
        List<Account> accList = new List<Account>();
        
        Map<id,List<Contact>> accConMap = new Map<id,List<Contact>>();
        
        for(Contact con : contacts){
            if(accConMap.containsKey(con.AccountId)){
                accConMap.get(con.AccountId).add(con);
            } else {
                accConMap.put(con.AccountId,new List<Contact>());
            }
        }
        
        for(Contact con : [SELECT id, AccountId, Type__c, Amount_X__c, Amount_Y__c from contact where AccountId IN : accConMap.keySet()]){
            accConMap.get(con.AccountId).add(con);
        }
        
        for(Id acc: accConMap.keySet()){
            Decimal amount_x_sum = 0;
            Decimal amount_y_sum = 0;
            Decimal amount_sum = 0;
            for(Contact c : accConMap.get(acc)){
                if(c.Type__c == 'Negative' || c.Type__c == 'Positive'){
                    amount_sum =+ c.Amount_X__c + c.Amount_Y__c; 
                }
                if(c.Type__c == 'Positive') {
                    amount_x_sum =+ c.Amount_X__c;
                }
                if(c.Type__c == 'Negative') {
                    amount_y_sum =+ c.Amount_Y__c;
                }
                 
            }
            
            Account account = new Account(id = acc,Rollup_Amount_X__c = amount_x_sum,Rollup_Amount_Y__c = amount_y_sum,Rollup_Amount__c = amount_sum);
            accList.add(account);
        }
        if(!accList.isEmpty())
        update accList;
    }

}