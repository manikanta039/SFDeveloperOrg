public class RegionalChartApexController {

    @AuraEnabled
    public static string getChartData(){
        List<AggregateResult> chartList = new List<AggregateResult>();
        chartList = [SELECT Customer_Region__c,count(id) FROM Chart_Demo__c group by Customer_Region__c]; 
        system.debug('chartList'+chartList);
        system.debug('json'+JSON.serialize(chartList));
        return JSON.serialize(chartList);
    }
    
    @AuraEnabled
    public static string getChartData1(){
        List<AggregateResult> chartList = new List<AggregateResult>();
        chartList = [SELECT Customer_Region__c,sum(Number_of_Customers__c) FROM Chart_Demo__c group by Customer_Region__c]; 
        system.debug('chartList'+chartList);
        system.debug('json'+JSON.serialize(chartList));
        return JSON.serialize(chartList);
    }
}