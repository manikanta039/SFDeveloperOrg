public class Policy
{
    public static void Suggested(List<Insurance_Policy_Lead__c> insLead)
    {
         for(Insurance_Policy_Lead__c ins : insLead)
         {     
              if(ins.Income__c>0 && ins.Income__c<=1000000)
              {
                  ins.Policy_Suggested__c = [select Name from Policy__c where Premium__c = 100000 and Category__c =:ins.Policy_Category__c].id;
              }
              
              if(ins.Income__c>1000000 && ins.Income__c<=2000000)
              {
                  ins.Policy_Suggested__c = [select Name from Policy__c where Premium__c = 200000 and Category__c =:ins.Policy_Category__c].id;
              }
              
              if(ins.Income__c>2000000)
              {
                  ins.Policy_Suggested__c = [select Name from Policy__c where Premium__c = 300000 and Category__c =:ins.Policy_Category__c].id;
              }
          }    
    }
}