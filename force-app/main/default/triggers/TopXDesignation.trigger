trigger TopXDesignation on Top_X_Designation__c (after insert, after update) {
    Set<Id> oppId = new Set<Id>();
    Set<Id> falseOppId = new Set<Id>();
    List<Opportunity> OppList = new List<Opportunity>();
    for(Top_X_Designation__c txd : Trigger.New) {
        if ((txd.Type__c == 'Contract Flow Down' || txd.Type__c == 'Handoff') && txd.Document_Attached__c == true) {
            oppId.add(txd.Opportunity__c );
        } else {
            falseOppId.add(txd.Opportunity__c );
        }
    }
    
    for(Opportunity oppy : [select id, Handoff_Attached__c  from Opportunity where id IN: oppId]){
        oppy.Handoff_Attached__c = true;
        OppList.add(oppy);
    }
    for(Opportunity oppy : [select id, Handoff_Attached__c  from Opportunity where id IN: falseOppId]){
        oppy.Handoff_Attached__c = false;
        OppList.add(oppy);
    }
	
    update OppList;
}