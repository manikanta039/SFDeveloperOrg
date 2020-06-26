public class FetchContact {
    
    @AuraEnabled
    public static Contact searchContactByEmail(String email){
        system.debug('email'+email);
        return [select id, Name from contact where Email =: email Limit 1];
    }
    
    @AuraEnabled
    public static wrapper accounts(){
        system.debug('accounts method');
        Map<String, Schema.FieldSet> FsMap = Schema.SObjectType.Account.fieldSets.getMap();
		system.debug('accounts method FsMap'+FsMap);
        system.debug('accounts method FsMap get(field_set_name)'+FsMap.get('test_set'));
        List<String> colNames = new List<String>();
        wrapper wp = new wrapper();
        
        String query = 'SELECT ';
        for(Schema.FieldSetMember f : SObjectType.Account.FieldSets.test_set.getFields()) {
            query += f.getFieldPath() + ', ';
            colNames.add(f.getFieldPath());
        }
        query += 'id FROM Account LIMIT 30';
        //return Database.query(query);
        wp.LstColNames = colNames;
        wp.LstAccounts = Database.query(query);
		system.debug('accounts method Query'+query);        
        return wp;
    }
    
    public class wrapper {
        @AuraEnabled public List<String> LstColNames;
        @AuraEnabled public List<Account> LstAccounts;
    }

}