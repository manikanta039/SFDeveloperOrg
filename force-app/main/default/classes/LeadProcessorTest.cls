@isTest
public class LeadProcessorTest {
	@testSetup
    static void setup(){
        List<Lead> leadList = new List<Lead>();
        for(Integer i = 0; i<200; i++) {
            leadList.add(new Lead(Company = 'ABC.co', LastName = 'Lead'+i, Status= 'Open - Not Contacted'));
        }
        insert leadList;
    }
    
    @isTest
    static void test(){
        Test.startTest();
        LeadProcessor lp = new LeadProcessor();
        Database.executeBatch(lp);
        Test.stopTest();
        System.assertEquals(200, [select count() from Lead where LeadSource = 'Dreamforce']);
    }
}