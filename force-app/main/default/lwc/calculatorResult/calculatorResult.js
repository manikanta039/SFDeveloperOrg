import { LightningElement, api, wire } from 'lwc';
import fetchcontacts from '@salesforce/apex/GetContacts.fetchcontacts'

export default class CalculatorResult extends LightningElement {
    @api calculatedResult
    contactsData
    @wire(fetchcontacts)
    contactlist({error, data}){
        if (data) {
            this.contactsData = data
            console.log("lwc contacts data"+JSON.stringify(this.contactsData));
        } else if (error) {
            console.log("lwc contacts error"+error);
        }
    }
   
}