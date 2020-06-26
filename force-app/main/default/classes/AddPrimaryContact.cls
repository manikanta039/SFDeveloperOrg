public class AddPrimaryContact implements Queueable {
    
    public Contact con;
	public String stateAb;
	    
    public AddPrimaryContact(Contact con,string stateAb){
        this.con = con;
        this.stateAb = stateAb;
    }
    
    
    public void execute(QueueableContext  qc){
        List<Account> accounts = [select id from Account where BillingState =: stateAb ];
        List<Contact> contacts = new List<Contact>();
        
        for(Account a : accounts){
            Contact contact = con.clone(false,false,false,false);
            contact.AccountId = a.Id;
            contacts.add(contact);
        }
        
        if(contacts.size() > 0) 
            insert contacts;
    }

}