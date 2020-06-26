global class BatchChain implements Database.Batchable<sObject> {
    
    global String currentObject = ''; 
    
    global BatchChain(String obj) {
        currentObject = obj;
        system.debug('ReportParam inside constructor '+ currentObject);
    }
    
	global Database.QueryLocator start(Database.BatchableContext bc) {
        
        if(currentObject == 'Inbound') {
            system.debug('start '+  currentObject);
            return Database.getQueryLocator('select Id from Inbound_Message__c where CreatedDate < LAST_N_DAYS:365');
        } else {
            system.debug('start '+  currentObject);
            return Database.getQueryLocator('select Id from Outbound_Message__c where CreatedDate < LAST_N_DAYS:365');
        }
        
    }
    
    global void execute(Database.BatchableContext BC, list<SObject> rec) {
        system.debug('execute '+  currentObject);
        system.debug('execute data '+  rec);
        // use saveResults
        // use try catch for DML and in finish method...
        Database.delete(rec, true);
    }
    
    global void finish(Database.BatchableContext BC) {
        system.debug('finish '+  currentObject);
        if(currentObject == 'Inbound') {
            BatchChain batch = new BatchChain('outbound');
            DataBase.executeBatch(batch);
        }
        
    }
}