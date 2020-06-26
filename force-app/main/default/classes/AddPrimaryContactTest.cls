@isTest
public class AddPrimaryContactTest {
	@testSetup
    static void setup(){
        
        List<Account> accounts = new List<Account>();
        for(Integer i=0; i<50; i++){
            accounts.add(new Account(Name='Account'+i, BillingState= 'NY' ));
        }
        for(Integer i=0; i<50; i++){
            accounts.add(new Account(Name='Account'+i, BillingState= 'CA' ));
        }
        insert accounts;
        Contact contact = new Contact();
        contact.LastName = 'test Contact';
        insert contact;
        
    }
    
    @isTest
    static void test(){
        
        Test.startTest();
        Contact con = [select id, Lastname from contact where Lastname='test Contact'][0];
       
        AddPrimaryContact apc = new AddPrimaryContact(con, 'CA');
        system.enqueueJob(apc);
        Test.stopTest();
        
    }
}