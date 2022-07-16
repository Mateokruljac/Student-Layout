import { LightningElement,track, api } from 'lwc';

export default class Calculator extends LightningElement {
        firstnumber = 0;
        secondnumber = 0;
        @track resultA = 0;
        @track resultD = 0;
        @track resultM = 0;
        @track resultS = 0;
        @api greeting;
        @api title;
        handleChanges(event){
        if (event.target.name === "firstnumber"){
            this.firstnumber = event.target.value;
        }
        if (event.target.name === "secondnumber"){
            this.secondnumber = event.target.value
        }
        this.resultA = parseInt(this.firstnumber) + parseInt(this.secondnumber); 
        this.resultD = parseInt(this.firstnumber) / parseInt(this.secondnumber); 
        this.resultM = parseInt(this.firstnumber) * parseInt(this.secondnumber); 
        this.resultS = parseInt(this.firstnumber) - parseInt(this.secondnumber); 
    } }    