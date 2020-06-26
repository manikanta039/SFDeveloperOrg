trigger EmpInfoTriger on Employee_certification_score__c (before insert,before update) {
EmpInfo.collectEmail(Trigger.new);
}