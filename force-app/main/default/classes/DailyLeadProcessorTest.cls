@isTest
public class DailyLeadProcessorTest {
    
    public static String CRON_EXP = '0 0 0 15 3 ? 2022';
    
    @TestSetup
    static void setup(){
        List<Lead> leadList = new List<Lead>();
        for(Integer i = 0; i<200; i++) {
            leadList.add(new Lead(Company = 'ABC.co', LastName = 'Lead'+i, Status= 'Open - Not Contacted'));
        }
        insert leadList;
    }
    
	@isTest
    static void testScheduledJob() {
        
        Test.startTest();
        String jobId = System.schedule('scheduling Daily Lead Processor',CRON_EXP, new DailyLeadProcessor() );
        List<Lead> leadsBefore= new List<Lead>([Select id From Lead where LeadSource ='Dreamforce']); 
        system.assertEquals(0, leadsBefore.size(), 'Before');
        Test.stopTest();
        List<Lead> leadsAfter = new List<Lead>([Select id From Lead where LeadSource ='Dreamforce']); 
        system.assertEquals(199, leadsAfter.size(), 'After');
        
    }
}