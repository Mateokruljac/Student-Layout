import { LightningElement } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Type from '@salesforce/schema/Account.Type';
import Account_Industry from '@salesforce/schema/Account.Industry';
import Account_Phone from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CreateSimpleComponents extends NavigationMixin(LightningElement) {
    objectApiName = 'Account';
    fieldList = [Account_Name,Account_Type,Account_Industry,Account_Phone];
    
    handleAccountCreate(event){
        const evt = new ShowToastEvent({
                title :"Account Create",
                message : "Record ID: " + event.detail.id,
                variant : "success"   //if you want to show success message or error if you want to show error message
        });

    this.dispatchEvent(evt);
    //syntax for navigation to record
    this[NavigationMixin.Navigate]({
            type : "standard__recordPage", //standard record page navigation
            attributes : {
                recordID : event.detail.id,
                objectApiName : "Account",
                actionName : "view" // we want to navigate detail page...view only
            },
    });

}
}