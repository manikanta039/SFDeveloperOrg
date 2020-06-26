public class checkDuplicate {
    public static void checker(List<Lead> ldList,Map<id,Lead> mapold,Boolean isInsert){
        Map<String,Lead> mapEmailLead = new Map<String,Lead>();
        for(Lead l : ldList){
            if(l.email != NULL && (isInsert || mapold.get(l.id).email <> l.email)){
                if(mapEmailLead.containsKey(l.email)){
                    l.email.addError('Email already exists');
                }
                else{
                    mapEmailLead.put(l.email,l);
                }
            }
        }
        
        for(Lead l : [SELECT id,email from Lead where email IN : mapEmailLead.keySet()]){
            Lead l1 = mapEmailLead.get(l.email);
            if(l1 != null)
            	l1.Email.addError('Duplicate detected');
        }
        
    }
}

/* public class checkDuplicate {
    public static void checker(List<Lead> ldList){
        Set<String> oldEmails = new Set<String>();
        List<String> oe = new List<String>();
        for(Lead ld : ldList){
            oldEmails.add(ld.email);
        }
        
        List<Lead> oldLead = [SELECT email from Lead where email in: oldEmails];
        for(Lead l1 : oldLead){
            oe.add(l1.email);
        }
        
        //System.debug('stored:-'+ oldLead);
        for(Lead l : ldList){
            if(oe.contains(l.email))
                l.email.addError('Duplicate');
        } 
    }
}
trigger PreventDuplicateContact on Contact (before insert,before update) {
    if(trigger.isInsert || trigger.isUpdate)
    {
        Map<String, Contact> emailMap = new Map<String, Contact>();
        
        for (Contact c : System.Trigger.new) 
        {
            if ((c.Email != null) && (System.Trigger.isInsert || (c.Email != System.Trigger.oldMap.get(c.Id).Email))) {
                if(emailMap.containsKey(c.Email)) {
                    c.Email.addError('Contact has the same Email address');
                }
                else {
                    emailMap.put(c.Email, c);
                }
            }            
            
        }
    
        for (Contact c : [SELECT Email FROM Contact WHERE Email IN :emailMap.KeySet()]) {
            Contact c1 = emailMap.get(c.Email);            
            c1.Email.addError('Contact with this email address already exists');
        }
    
    }
   
} */