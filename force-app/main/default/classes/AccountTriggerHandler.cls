public class AccountTriggerHandler implements ITriggerHandler {
    
    public Boolean IsDisabled()
    {
        return false;
    }
 
    public void BeforeInsert(List<SObject> newItems) {
       
        for(Account obj : (List<Account>) newItems) {
            obj.Phone = '1234567890';
        }
    }
 
    public void BeforeUpdate(Map<Id, SObject> newItems, Map<Id, SObject> oldItems) {}
 
    public void BeforeDelete(Map<Id, SObject> oldItems) {}
 
    public void AfterInsert(Map<Id, SObject> newItems) {}
 
    public void AfterUpdate(Map<Id, SObject> newItems, Map<Id, SObject> oldItems) {}
 
    public void AfterDelete(Map<Id, SObject> oldItems) {}
 
	public void AfterUndelete(Map<Id, SObject> oldItems) {}
}