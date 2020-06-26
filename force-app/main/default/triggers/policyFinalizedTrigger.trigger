trigger policyFinalizedTrigger on Insurance_Policy_Lead__c (Before Insert,Before Update) {
policy.Suggested(Trigger.new);

}