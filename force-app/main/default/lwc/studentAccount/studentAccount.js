import { LightningElement,wire,track } from 'lwc';
import STUDENT_OBJECT from '@salesforce/schema/Student__c';
import NAME_FIELD from '@salesforce/schema/Student__c.Name';
import SURNAME_FIELD from '@salesforce/schema/Student__c.Surname__c';
import EMAIL_FIELD from '@salesforce/schema/Student__c.Email__c';
import EMS_FIELD from '@salesforce/schema/Student__c.Ems__c';
import getInfo from '@salesforce/apex/ChooseClasss.getInfo';
import REGULAREXTRAORDINARY_FIELD from '@salesforce/schema/Student__c.RegularExtraordinary__c'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { createRecord } from 'lightning/uiRecordApi';

let i = 0
export default class StudentAccount extends NavigationMixin(LightningElement) {
    name =' ';
    surname = ' ';
    email = ' ';
    ems = ' ';
    @track items = [];
    @track value = ' ';
    @track choosenvalue = ' ';


    @wire(getInfo) getREO({data,error}){
        if (data){
            for(i = 0; i < data.length;i++) {
                this.items = [...this.items,[{value : data[i].RegularExtraordinary__c,label:data[i].RegularExtraordinary__c,}]];
            }

        }
        else if (error){

        }
    }

    roleOptions(){
        return this.items;
    }
    
    handleChange(event){
        if (event.target.label == "Name"){
            this.name = event.target.value;
        }
        if (event.target.label == "Surname"){
            this.surname = event.target.value;
        }
        if (event.target.label == "Email"){
            this.email = event.target.value;
        }
        if (event.target.label == "Ems"){
            this.ems = event.target.value;
        }
    }
    pickHandle(event){
        const selectedOption = event.detail.value;
        this.choosenvalue   = selectedOption; 
        return this.choosenvalue
    }

        create(){
            const fields = {};
            fields[NAME_FIELD.fieldApiName] = this.name;
            fields[SURNAME_FIELD.fieldApiName] = this.surname;
            fields[EMAIL_FIELD.fieldApiName] = this.email;
            fields[EMS_FIELD.fieldApiName] = this.ems;
            fields[REGULAREXTRAORDINARY_FIELD.fieldApiName] = this.value;
            const recordInput = {apiName : STUDENT_OBJECT.objectApiName,fields};
           createRecord(recordInput)
                .then(student => {
                    this.studentId = student.id;
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title : "Success",
                            message : "Student account created!",
                            variant : "success"
                        })
                    )
                    this[NavigationMixin.Navigate]({
                        type: "standard__recordPage",
                        attributes : {
                            recordId : student.id,
                            objectApiName : "Student__c",
                            actionName : "view"
                        }
                    })
                })
                 .catch( error => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title :"Error Create",
                            message : "EMSO is invalid. Verification code is not correct.",
                            variant : "error"
                        })
                    )
                 })
            
        }
        
    
}