trigger updateContactsName on Account (after update) {
    Map<id, String> accNames = new Map<id, String>();
    List<Contact> contacts = new List<Contact>();
    for(Account acc : Trigger.New) {
        accNames.put(acc.id,acc.Name);
    }
    system.debug('Accounts Map'+accNames);
    for(Contact con : [select id, LastName, AccountId from contact where AccountId in: accNames.keySet()]) {
        contacts.add(new Contact(id = con.id, LastName = accNames.get(con.AccountId), email = accNames.get(con.AccountId)+'@gmail.com'));
    }
    system.debug('contact name'+contacts);
    if(!contacts.isEmpty()){
        update contacts;
    }

}