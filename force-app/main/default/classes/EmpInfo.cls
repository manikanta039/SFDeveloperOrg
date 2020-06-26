public class EmpInfo {
    public static void collectEmail(List<Employee_certification_score__c> lstEmp){
        List<Instructor__c> lstIns=new List<Instructor__c>();
        lstIns=[SELECT Id,Email__c FROM Instructor__c];
        for(Employee_certification_score__c i:lstEmp)
        {
            for(Instructor__c j:lstIns)
            {
                if(i.Instructor_Name__c==j.Id)
                {
                    i.Instructor_email__c=j.Email__c;
                }
            }
        }
    
   }
}