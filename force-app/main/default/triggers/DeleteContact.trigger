trigger DeleteContact on Account (After delete, After undelete) {
    Map<id,List<Contact>> AccConMap = new Map<id,List<Contact>>();
    List<Contact> contacts = new List<Contact>();
    for(Account acc :[select id,(select id from contacts) from Account where id in: Trigger.oldMap.keySet()]) {
        AccConMap.put(acc.id,acc.contacts);
    }
    for(Id acc : AccConMap.keySet()){
        contacts.addAll(AccConMap.get(acc));
    }
    delete contacts;
    
    

}