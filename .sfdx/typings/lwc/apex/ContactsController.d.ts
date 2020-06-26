declare module "@salesforce/apex/ContactsController.fetchContacts" {
  export default function fetchContacts(param: {AccountId: any}): Promise<any>;
}
declare module "@salesforce/apex/ContactsController.createContact" {
  export default function createContact(param: {con: any, AccountId: any}): Promise<any>;
}
