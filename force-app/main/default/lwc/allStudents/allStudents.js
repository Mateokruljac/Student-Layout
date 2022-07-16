import { LightningElement,track,wire } from 'lwc';
import Info from '@salesforce/apex/GetAllInfo.Info';
export default class AllStudents extends LightningElement {
    @track data;
    @wire (Info) getStudents({error,data}){
        if (data){
            this.data = data;
            this.error = undefined;
        }
        else if (error){
            this.error = error;
            this.data = undefined;
        }
    }
}