import { LightningElement,track,wire } from 'lwc';
import getStudentList from '@salesforce/apex/SrudentsExam.getStudentList';
export default class ListStudentTurnInExam extends LightningElement {
     @track data;
     @wire (getStudentList)  SrudentExamRecord({error,data}){
        if (data){
            this.data = data;
        }
        if (error){
            this.data = undefined; 
        }
     } 
}