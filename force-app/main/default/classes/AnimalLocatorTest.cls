@isTest
public with sharing class AnimalLocatorTest {
    @isTest
     static void testGetCallout() {
        Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
        String result = AnimalLocator.getAnimalNameById(1);
         System.debug('result:' + result );
        //System.assertEquals(result,'Chicken');
    }
}