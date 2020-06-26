public class  MonthlyBatch{

/*
 * 
 * ---
 * --  Test.setCreatedDate(caseList[0].Id, DateTime.newInstance(2018,06,12));
 *  check with the team if you need data to delete from recyclebin too.. then use , database.emptyRecyclebin()
 * study this one too , i think the below link suggests it will work in our case--
 * https://developer.salesforce.com/forums/?id=906F0000000AuAEIA0
 -----
global class MonthlyBatch implements Database.Batchable<sObject> {
   

 LAM_SalesLeadSubmitMonthlyBatchHandler SubReport = new LAM_SalesLeadSubmitMonthlyBatchHandler();
    global String ReportParam = ''; 
    
    global MonthlyBatch(String RptMap) {
        ReportParam = RptMap;
        system.debug('ReportParam inside constructor' +ReportParam);
    }
    
    global Database.QueryLocator start(Database.BatchableContext bc) {
        
        system.debug('inside start'+ReportParam);        
        Integer monthToBeChecked;
        Integer correspondingYearToBeChecked;
        Integer currentYear =   DateTime.now().year();
        Integer previousMon =  DateTime.now().month()-1;
        Integer previousYear = DateTime.now().year()-1;        
        
        if(previousMon==0) {
            monthToBeChecked=12;
            correspondingYearToBeChecked=previousYear;
        }
        else { 
            monthToBeChecked=previousMon;
            correspondingYearToBeChecked=currentYear;
        }
        system.debug('report month'+monthToBeChecked);
        system.debug('report Year'+correspondingYearToBeChecked);
        
        //to obtain leads and opportunity of previous months on which the report is to be made.
        if(ReportParam == '1') {   
            String query='SELECT Id,Region__c from Lead '+System.Label.Sales_Lead_Submitted_Monthly;        
            return Database.getQueryLocator(query);  
        }
        else {   
            String query='SELECT Id,Region__c,Lead_Provider_Id__c from Opportunity '+System.Label.Sales_Opportunity_Submitted_Monthly;
            return Database.getQueryLocator(query);  
        }    
    }
    
    global void execute (Database.BatchableContext bc, List<SObject> scope) {
        
        SubReport.LAM_SalesLeadSubmitMonthlyBatchHandlerMethod(scope,ReportParam); 
        
    }
    
    global void finish(Database.BatchableContext BC) {
        try { 
            //setting the param to 1 which would execute the same class for opportunity records.
            if (ReportParam == '1') {   
                LAM_SalesLeadSubmitMonthlyBatch YTDSubSales = new LAM_SalesLeadSubmitMonthlyBatch('2');
                DataBase.executeBatch(YTDSubSales,200);
            } 
        }
        catch (exception e) {
            System.debug('Error Message'+e.getMessage());
            System.debug('The following exception has occurred:@@ ' + e.getMessage());
            System.debug('exception has occurred in the line:@@ ' + e.getLineNumber());
        }
    }**/
}