public with sharing class StudentBrowserForm {
	@AuraEnabled
    public static List<User> getInstructors(){
        String query= 'SELECT id,Name from User Limit 20';
        List<User> users = Database.query(query);
        return users;
    }
}