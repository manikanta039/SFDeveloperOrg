declare module "@salesforce/apex/AccountController.findAll" {
  export default function findAll(): Promise<any>;
}
declare module "@salesforce/apex/AccountController.allAccounts" {
  export default function allAccounts(): Promise<any>;
}
declare module "@salesforce/apex/AccountController.saveAccounts" {
  export default function saveAccounts(param: {accList: any}): Promise<any>;
}
declare module "@salesforce/apex/AccountController.searchAccounts" {
  export default function searchAccounts(param: {searchKey: any}): Promise<any>;
}
declare module "@salesforce/apex/AccountController.deleteAccount" {
  export default function deleteAccount(param: {recId: any}): Promise<any>;
}
