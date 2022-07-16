import { LightningElement,wire,track } from 'lwc';
import getStudent  from '@salesforce/apex/SearchStudent.getStudent'
export default class SearchingComponent extends LightningElement {
    browse = ' ';
    ready = false;
    @track StudentList = [];
    @wire (getStudent,{Searched:"$browse"})
    
    connectedCallback(){
        setTimeout(() => {
            this.ready = true;
        },5000)
    }
    readData({error,data}){
        if (data){
            this.StudentList = data;
        }
        else if (error){
          
        }
    }

    handleChange(event){
        this.browse = event.target.value;
    }

}