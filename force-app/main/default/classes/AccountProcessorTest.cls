@isTest
public class AccountProcessorTest {
	@testSetup
    static void setup() {
        List<Account> accList = new List<Account>();
        List<Contact> conList = new List<Contact>();
        for(Integer i = 0; i<200; i++) {
            accList.add(new Account( Name = 'Account'+i));
        }
        insert accList;
        
        for(Integer j = 0; j<200; j++){
            conList.add(new Contact( LastName = accList[j].Name+' Contact', AccountId = accList[j].Id));
        }
        
        insert conList;
    }
    @isTest
    static void test() {
        Test.startTest();
        List<Id> ids = new List<Id>(new Map<Id, Account>([select Id from Account]).keySet());
        AccountProcessor.countContacts(ids);
        Test.stopTest();
    }
    
}