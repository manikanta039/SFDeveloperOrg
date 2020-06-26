@isTest 
Public class MyTestClass 
{
    static testMethod void MyTestFunction() 
    {
        
        Insurance_Policy_Lead__c i3 = new Insurance_Policy_Lead__c();
        i3.Lead_Name__c = 'Manikanta';
        i3.Age__c = 21;
        i3.email__c = 'manikantapolamada@gmail.com';
        i3.Income__c = 30000000;
        i3.Medical_History__c = 'Everything fine';
        i3.Policy_Category__c = 'Endowment Plans';
        
        
        
        
       
        
        insert i3;
        i3.Policy_Suggested__c = '';
        
    }
}