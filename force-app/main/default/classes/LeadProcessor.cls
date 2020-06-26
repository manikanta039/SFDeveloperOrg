global class LeadProcessor implements Database.Batchable<sObject> {
    
    global Database.QueryLocator start (Database.BatchableContext bc){
        
        string query = 'SELECT id, LeadSource from Lead';
        return Database.getQueryLocator( query);
        
    }
    
    global void execute(Database.BatchableContext bc, List<Lead> leadList){
        for(Lead l : leadList) {
            l.LeadSource = 'Dreamforce';
        }
        update leadlist;
    }
    
    global void finish(Database.BatchableContext bc){
        
    }

}