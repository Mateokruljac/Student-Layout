import { LightningElement,track } from 'lwc';
import sum2numbers from '@salesforce/apex/CalculateNumbers.sum2numbers';
export default class Calculate2Numbers extends LightningElement {
     @track first;
     @track second;
     @track result;
     @track error; 
     
     handleClick(){
        sum2numbers({first: this.firstNumber, second : this.secondNumber})
            .then(result => {
                this.result = result;
            })
            .catch(error =>{
                this.error = error;
            })
        }
     
    
     
     handleChange(event){
        if (event.target.name === "first"){
            this.firstNumber = firstNumber;
        }
        else if (event.target.name === "second"){
            this.secondNumber = secondNumber;
        }
        
    }
}