import { LightningElement,track,wire } from 'lwc';
//import getExamPeriod from '@salesforce/apex/StandardEaxmPeriod.getExamPeriod';
import getExamPeriod from '@salesforce/apex/ExamClass.getExamPeriod';

export default class StandardExamPeriod extends LightningElement {
    @track data;
    @wire(getExamPeriod) examperiodReccords({error,data}){
        if (data){
            this.data = data;
        }
        if (error){
            this.data = undefined;
        }
    }

}