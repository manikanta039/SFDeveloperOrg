@isTest
public class PlaceControllerTest 
{
    @isTest
    public static void testPlace()
    {
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
        
        Place__c p5 = new Place__c();
        p5.Name = 'Nadyal';
        p5.Level__c = 'City';
        p5.Country__c = p1id;
        p5.State__c = p2id;
        p5.District__c = p3id;
        insert p5;
        
        Place__c p6 = new Place__c();
        p6.Name = 'Anatapur';
        p6.Level__c = 'District';
        p6.Country__c = p1id;
        p6.State__c = p2id;
        insert p6;
        id p6id = p6.id;
        
        Place__c p8 = new Place__c();
        p8.Name = 'Gooty';
        p8.Level__c = 'City';
        p8.Country__c = p1id;
        p8.State__c = p2id;
        p8.State__c = p2id;
        p8.District__c = p6id;
        insert p8;
        
        Place__c p7 = new Place__c();
        p7.Name = 'Telengana';
        p7.Level__c = 'State';
        p7.Country__c = p1id;
        insert p7;
        id p7id = p7.id;
        
        Place__c p9 = new Place__c();
        p9.Name = 'Ranga Reddy';
        p9.Level__c = 'District';
        p9.Country__c = p1id;
        p9.State__c = p7id;
        insert p9;
        id p9id = p9.id;
        
        Place__c p11 = new Place__c();
        p11.Name = 'Hyderbad';
        p11.Level__c = 'City';
        p11.Country__c = p1id;
        p11.State__c = p7id;
        p11.District__c = p9id;
        insert p11;
        
		PlaceController pl = new PlaceController();
        pl.getMainPlace();
    }
}