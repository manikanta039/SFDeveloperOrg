public with sharing class StudentBrowser {
@AuraEnabled
    public static List<Contact> getStudents(){
        String query= 'SELECT id,Name from Contact Limit 20';
        List<Contact> contacts = Database.query(query);
        return contacts;
    }
}