@isTest
public class HierarchyControllerTest {
    @isTest
    static void getmainplacetest(){
        Place__c p1 = new Place__c();
        p1.Name = 'India';
        p1.Level__c = 'Country';
        insert p1;
        id p1id = p1.Id;
            
        Place__c p2 = new Place__c();
        p2.Name = 'Andhra Pradesh';
        p2.Level__c = 'State';
        p2.Country__c = p1id;
        insert p2;
        id p2id = p2.id;
        
        Place__c p3 = new Place__c();
        p3.Name = 'Kurnool';
        p3.Level__c = 'District';
        p3.Country__c = p1id;
        p3.State__c = p2id;
        insert p3;
        id p3id = p3.id;
        
        Place__c p4 = new Place__c();
        p4.Name = 'Dhone';
        p4.Level__c = 'City';
        p4.Country__c = p1id;
        p4.State__c = p2id;
        p4.District__c = p3id;
        insert p4;
        
        test.startTest();
        HierarchyController hc = new HierarchyController();
        hc.getmainplace();
        test.stopTest();
    }

}