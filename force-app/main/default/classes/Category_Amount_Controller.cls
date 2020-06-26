public class Category_Amount_Controller {
    @AuraEnabled
    public static String getChartData(){
        List<AggregateResult> chartList = new List<AggregateResult>();
        chartList = [SELECT Category__c,sum(amount__c) FROM Expense__c where Category__c <> 'UNKNOWN' group by Category__c]; 
        system.debug('chartList'+chartList);
        system.debug('json'+JSON.serialize(chartList));
        return JSON.serialize(chartList);
        //return [SELECT Category__c,sum(amount__c) FROM Expense__c where Category__c not in UNKNOWN group by Category__c];
    }
    
    @AuraEnabled
    public static String getChartData1(String month){
        System.debug('month'+month);
        List<AggregateResult> chartList = new List<AggregateResult>();
        chartList = [SELECT DAY_IN_MONTH(Date__c) mon,sum(amount__c) amt FROM Expense__c where Category__c <> 'UNKNOWN' and Month__c =:month group by Date__c ORDER BY Date__c ASC]; 
        system.debug('dateList'+chartList);
        system.debug('json'+JSON.serialize(chartList));
        
        Map<Integer,chartObject> chartMap = new Map<Integer,chartObject>();
        for(AggregateResult a :chartList){
            Integer key = (Integer) a.get('mon');
            Decimal val = (Decimal) a.get('amt');
            
            chartMap.put(key, new chartObject(key,val));
        }
        
        for(Integer i = 1; i <= 31; i++){
            if(!chartMap.containsKey(i)){
                chartMap.put(i,new chartObject(i,0));
            }
        }
        List<Integer> keyList = new List<Integer>();
        keyList.addAll(chartMap.keySet());
        keyList.sort();
        system.debug('keyList'+keyList);
        Map<Integer,chartObject> chartMap1 = new Map<Integer,chartObject>();
        for(Integer rank : keyList)
        {              
            chartObject thisEntry = chartMap.get(rank);
            chartMap1.put(rank,thisEntry);
            
        }
        
        system.debug('Map Values = '+JSON.serialize(chartMap1.values()));
        return JSON.serialize(chartMap1.values());
    }
    
    @AuraEnabled
    public static String getChartData2(String month1){
        System.debug('month1'+month1);
        List<AggregateResult> chartList = new List<AggregateResult>();
        chartList = [SELECT DAY_IN_MONTH(Date__c) mon,sum(amount__c) amt FROM Expense__c where Category__c <> 'UNKNOWN' and Month__c =:month1 group by Date__c ORDER BY Date__c ASC]; 
        system.debug('dateList1'+chartList);
        system.debug('json'+JSON.serialize(chartList));
        
        Map<Integer,chartObject> chartMap = new Map<Integer,chartObject>();
        for(AggregateResult a :chartList){
            Integer key = (Integer) a.get('mon');
            Decimal val = (Decimal) a.get('amt');
            
            chartMap.put(key, new chartObject(key,val));
        }
        
        for(Integer i = 1; i <= 31; i++){
            if(!chartMap.containsKey(i)){
                chartMap.put(i,new chartObject(i,0));
            }
        }
        // Set<Integer> setList = new Set<Integer>();
        List<Integer> keyList = new List<Integer>();
        keyList.addAll(chartMap.keySet());
        keyList.sort();
        system.debug('keyList'+keyList);
        Map<Integer,chartObject> chartMap1 = new Map<Integer,chartObject>();
        for(Integer rank : keyList)
        {              
            chartObject thisEntry = chartMap.get(rank);
            chartMap1.put(rank,thisEntry);
            
        }
        
        system.debug('Map Values = '+JSON.serialize(chartMap1.values()));
        return JSON.serialize(chartMap1.values());
    }
    
    @AuraEnabled
    public static string getExpenseData(){
        List<Expense__c> expenseList = new List<Expense__c>();
        expenseList = [SELECT Account__c,Amount__c,Category__c,Date__c,Expense__c,Place__c FROM Expense__c];
        system.debug('expenseList');
        system.debug('JSON.serialize(expenseList)');
        return JSON.serialize(expenseList);
        //return [SELECT Account__c,Amount__c,Category__c,Date__c,Expense__c,Place__c FROM Expense__c];
    }
    
    @AuraEnabled
    public static string getMonthData(){
        list<Expense__c> monthList = new list<Expense__c>();
        monthList = [SELECT Month__c FROM Expense__c];
        set<string> monthset =new set<string>();
        for(Expense__c exp : monthList)
        {
            monthset.add(exp.Month__c);
        }
        //system.debug('MonthList = '+monthList);
        system.debug('MonthSet = '+monthset);
        return JSON.serialize(monthset);
        //return [SELECT Account__c,Amount__c,Category__c,Date__c,Expense__c,Place__c FROM Expense__c];
    }
    
    public class chartObject{
        @AuraEnabled
        public Integer category;
        @AuraEnabled
        public Decimal amount;
        
        public chartObject(Integer category,Decimal amount){
            this.category = category;
            this.amount = amount;
        }
    }
    
    @AuraEnabled
    public static void deleteExpense(string recId){
        if(recId !=null) {
            Expense__c exp = [select id from Expense__c where id =: recId];
            
            delete exp;
        }
        
    }
    
    @AuraEnabled
    public static void createExpenseRecord(Expense__c expense) {
        system.debug('expense'+expense);      
        /*JSONParser parser = JSON.createParser('expense');    
        Type expenseType = Type.forName('Expense__c'); 
        Expense__c expenseRecord = (Expense__c) parser.readValueAs(expenseType); 
       // Expense__c expenseToEdit = (Expense__c)JSON.deserialize(expense,Expense__c.class);
        upsert expenseRecord;*/
        insert expense;
    }
    
    @AuraEnabled
    public static void updateExpense(Expense__c expenseData){
        system.debug('inside test');
        //system.debug('expenseId '+expenseId);
         system.debug('expenseData '+expenseData);
		update expenseData;
    
    }
     @AuraEnabled
    public static void updateExpenseRecord(Expense__c expenseRecord) {
       system.debug('expenseRecord '+expenseRecord);      
        /*JSONParser parser = JSON.createParser('expense');    
        Type expenseType = Type.forName('Expense__c'); 
        Expense__c expenseRecord = (Expense__c) parser.readValueAs(expenseType); 
       // Expense__c expenseToEdit = (Expense__c)JSON.deserialize(expense,Expense__c.class);
        upsert expenseRecord;*/
       update expenseRecord;
    }
    
    
    
}