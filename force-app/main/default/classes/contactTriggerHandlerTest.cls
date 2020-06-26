@isTest
public class contactTriggerHandlerTest {
	@testSetup
    public static void testData(){
      List<Contact> contacts = new List<Contact>();
        Account a = new Account(Name = 'Vini');
        insert a;
        Contact c1 = new Contact(Type__c='Positive',Amount_X__c=100,Amount_Y__c=200,LastName='Bhatti', AccountId = a.Id, Email='123@123.com');
        Contact c2 = new Contact(Type__c='Negative',Amount_X__c=200,Amount_Y__c=100,LastName='polamada', AccountId = a.Id, Email='1123@123.com');
        contacts.add(c1);
        contacts.add(c2);
        insert contacts;
    }
    @isTest
    public static void testMethod1(){
        test.startTest();
        
        Account acc = [select Rollup_Amount__c, Rollup_Amount_X__c, Rollup_Amount_Y__c from Account];
        system.assertEquals(300, acc.Rollup_Amount__c);
        system.assertEquals(100, acc.Rollup_Amount_X__c);
        system.assertEquals(100, acc.Rollup_Amount_Y__c);
        
        test.stopTest();
    }
}