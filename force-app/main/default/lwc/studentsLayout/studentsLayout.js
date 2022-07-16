import { LightningElement,track } from 'lwc';

export default class StudentsLayout extends LightningElement {
    @track greetings;
    handleGreetingChoices(event){
        this.greetings = event.target.value;
        console.log(this.greetings);
    }
}