import { LightningElement, wire } from 'lwc';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';

const SUCCESS_TITLE = 'Success';
const MESSAGE_SHIP_IT     = 'Ship it!';
const SUCCESS_VARIANT     = 'success';
const ERROR_TITLE   = 'Error';
const ERROR_VARIANT = 'error';

export default class BoatSearchResults extends LightningElement {
    selectedBoatId;
    columns = [
        { label: 'Name', fieldName: 'Name', type: 'text', editable: 'true'  },
        { label: 'Length', fieldName: 'Length__c', type: 'number', editable: 'true' },
        { label: 'Price', fieldName: 'Price__c', type: 'currency', editable: 'true' },
        { label: 'Description', fieldName: 'Description__c', type: 'text', editable: 'true' }
    ];
    boatTypeId = '';
    boats;
    isLoading = false;
    
    // wired message context
    messageContext;
    // wired getBoats method 
    @wire(getBoats, { boatTypeId: '$boatTypeId' })
    wiredBoats(result) { 
        this.boats = result;
        if (result.error) {
            this.error = result.error;
            this.boats = undefined;
        }
        this.isLoading = false;
        this.notifyLoading(this.isLoading);
    }
    
    // public function that updates the existing boatTypeId property
    // uses notifyLoading
    searchBoats(boatTypeId) { }
    
    // this public function must refresh the boats asynchronously
    // uses notifyLoading
    refresh() { }
    
    // this function must update selectedBoatId and call sendMessageService
    updateSelectedTile() {
        this.selectedBoatId = event.detail.boatId;
        this.sendMessageService(this.selectedBoatId);
    }
    
    // Publishes the selected boat Id on the BoatMC.
    sendMessageService(boatId) { 
      // explicitly pass boatId to the parameter recordId
    }
    
    // This method must save the changes in the Boat Editor
    // Show a toast message with the title
    // clear lightning-datatable draft values
    handleSave() {
      const recordInputs = event.detail.draftValues.slice().map(draft => {
          const fields = Object.assign({}, draft);
          return { fields };
      });
    //   const promises = recordInputs.map(recordInput =>
    //           //update boat record
    //       );
      Promise.all(promises)
          .then(() => {})
          .catch(error => {})
          .finally(() => {});
    }
    // Check the current value of isLoading before dispatching the doneloading or loading custom event
    notifyLoading(isLoading) { }
  }