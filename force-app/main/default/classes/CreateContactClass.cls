public class CreateContactClass
{
    public static void ifChemical(list<Account> account) 
    {
        for(Account acc: account)
        {
            if(acc.Industry == 'Chemicals')
            {
                contact c = new contact();
                c.FirstName = 'Robert';
                c.LastName = 'Matthew';
                c.phone = '12121212';
                insert c;
            }
        }
    }
    
}