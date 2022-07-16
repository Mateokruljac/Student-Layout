import { LightningElement, track } from 'lwc';
// import getAccounts from '@salesforce/apex/AccountController.getAccountsRecordsList';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class DataDisplayWithImperative extends LightningElement {
    @track accountRecords;
    @track error;
    @track columns =[
        {label :"name",fieldName :"Name",type: "text"},
        {label :"Phone",fieldName : "Phone", type :"phone"},
        {label : "Industry",fieldName : "Industry", type : "text"}
    ];
    connectedCallback(){
        getAccounts()
            .then(result => {
                this.accountRecords = result;
            })
            .catch(error => {
                this.accountRecords = error;
            })
    }
}