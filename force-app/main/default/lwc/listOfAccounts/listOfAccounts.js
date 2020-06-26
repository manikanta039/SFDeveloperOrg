import { LightningElement, wire } from 'lwc';
import {refreshApex} from '@salesforce/apex'; 
import getAccounts from '@salesforce/apex/Accounts_Controller.getAccounts';
import getSearchedContacts from '@salesforce/apex/Accounts_Controller.getSearchedContacts';

export default class ListOfAccounts extends LightningElement {
    pageSize = 6;
    pageList = [];
    orginalData;
    startPage;
    endPage;
    totalNoOfRecs;
    showModal;
    searchText = 'abc';
    fetchAcc;

    data;
    error;
    columns = [{
        label: 'Name',
        type: 'text',
        fieldName: 'Name'
    },{
        label: 'Number Of Employees',
        type: 'number',
        fieldName: 'NumberOfEmployees'
    },{
        label: 'Number of Contacts',
        type: 'number',
        fieldName: 'Number_of_Contacts__c'
    }]

    @wire(getAccounts)
    fetchAccounts(value) {
        console.log("in clear search wire");
        this.fetchAcc = value;
        const {data, error} = value;

        //console.log("lwc accounts data before if"+JSON.stringify(error));
        if(data){
            console.log("lwc accounts data before"+JSON.stringify(data));
            this.data = data;
            this.orginalData = data;
            this.pagination(data);
            console.log("lwc accounts data after"+JSON.stringify(this.data));
        } else {
            this.error = error;
        }
    }

    clearSearch(){
        //this.pageList = [];
        //console.log("in clear search");
        //return refreshApex(this.fetchAcc);
        this.searchText = ''
        this.pagination(this.orginalData)
    }
    
    pagination(data){
        this.totalNoOfRecs = data.length;
        this.startPage = 0;
        this.endPage = this.pageSize - 1;
        this.pageList = [];
        console.log("pageList " + this.pageList);
        console.log("data length" + data.length);
        if(data.length > 0) {
            for(var i = 0; i < this.pageSize; i++) {
                if(data.length > i) {
                    this.pageList.push(data[i]);
                }
            }
        }
    }

    searchAccount(evt) {
        console.log("in side searchAccount");
        this.showModal = false;
        const isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            console.log("in side enterkey");
            this.queryTerm = evt.target.value;
            getSearchedContacts({searchKey : this.queryTerm})
            .then(result => {
                console.log("in side result"+JSON.stringify(result));
                
                this.data = result;
                //this.orginalData = result;
                this.totalNoOfRecs = result.length;
                this.startPage = 0;
                this.endPage = this.pageSize - 1;
                this.pageList = [];

                if(result.length > 0) {
                    for(var i = 0; i < this.pageSize; i++) {
                        if(result.length > i) {
                            this.pageList.push(result[i]);
                        }
                    }
                }
                //this.data = result;
            }).catch(error => {
                console.log("in side error"+JSON.stringify(error));
                this.error = error;
            })
        }
    }

    previous(){
        console.log("in previous");
        this.pageList = [];
        var counter = 0;
        for(var i = this.startPage - this.pageSize; i < this.startPage; i++) {
            if( i > -1) {
                this.pageList.push(this.data[i]);
                counter++;
            } else {
                this.startPage++;
            }
        }
        this.startPage = this.startPage - counter;
        this.endPage = this.endPage - counter;
    }

    next(){
        console.log("in next");
        this.pageList = [];
        var counter = 0;
        for(var i = this.endPage + 1; i < this.endPage + this.pageSize + 1; i++) {
            if(this.data.length > i) {
                this.pageList.push(this.data[i]);
            }
            counter++; 
        }
        this.startPage = this.startPage + counter;
        this.endPage = this.endPage + counter;
    }

    get validPrevious() {
        return this.startPage == 0 ? true : false;
    }

    get validNext() {
        return this.endPage + 1 >= this.totalNoOfRecs ? true : false; 
    }

    get showError() {
        return this.pageList.length > 0 ? false : true;
    }

    showAccountModal() {
        this.showModal = !this.showModal;
    }
}