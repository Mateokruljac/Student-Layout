import { LightningElement,track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class DisplayDataUsingWire extends LightningElement {
    @track data;
    @wire (getAccounts) accountsRecords({error,data}){
        if (data){
            this.data = data;
        }
        else if (error){
            this.data = undefined;
        }
    }
    ready = false;
    connectedCallback(){
        setTimeout(() => {
            this.ready = true;
        },3000)
    }

}