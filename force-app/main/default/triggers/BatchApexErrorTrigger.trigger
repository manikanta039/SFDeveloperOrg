trigger BatchApexErrorTrigger on BatchApexErrorEvent (after insert) {
    
    List<BatchLeadConvertErrors__c> lce = new List<BatchLeadConvertErrors__c>();
    
    for(BatchApexErrorEvent ba : Trigger.New) {
        lce.add(new BatchLeadConvertErrors__c(AsyncApexJobId__c =ba.AsyncApexJobId , Records__c=ba.JobScope , StackTrace__c =ba.StackTrace ));
    }
	
    insert lce;
}