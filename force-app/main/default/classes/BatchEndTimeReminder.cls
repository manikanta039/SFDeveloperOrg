global class BatchEndTimeReminder implements Database.Batchable<sObject>, Schedulable{
    
    global Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator('SELECT CreatedById,CreatedDate,CreatedBy.Name,CronExpression,CronJobDetail.Name,EndTime,Id,LastModifiedById,NextFireTime,OwnerId,PreviousFireTime,StartTime,State,TimesTriggered,TimeZoneSidKey FROM CronTrigger WHERE EndTime >= TODAY AND EndTime  <= Next_N_Days:30');
    }
    
    global void execute(Database.BatchableContext BC, list<CronTrigger> rec) {
        List<String> lstEmails = new List<String>{'manikantapolamada@hotmail.com','veenee1111@gmail.com'};
        List<Messaging.SingleEmailMessage> lstEmailToSend = new List<Messaging.SingleEmailMessage>(); 
            for(CronTrigger conT :rec ) {
                Messaging.SingleEmailMessage semail = new Messaging.SingleEmailMessage();
                semail.setToAddresses(lstEmails);
                semail.setSubject('Reminder Email for Scheduled Jobs'+conT.CronJobDetail.Name);
                String Body = 'Below are the Details of that is going to Expire on ' + conT.EndTime +'\n'+ 'Job Name : ' + conT.CronJobDetail.Name + '\n' + 'Scheduled By : ' +  conT.CreatedBy.Name;
                semail.setPlainTextBody(Body);
                lstEmailToSend.add(semail);
            }
        	system.debug('lstEmailToSend'+lstEmailToSend);
        	Messaging.sendEmail(lstEmailToSend);
        
        //System.schedule('A&E - Permission Set Manager - 5', '0 55 * * * ?', new SchedulerBatchChain());
    }
    
    global void finish(Database.BatchableContext BC) {}
    
    global void execute(SchedulableContext ctx) {
		Database.executeBatch(new BatchEndTimeReminder());
    }

}