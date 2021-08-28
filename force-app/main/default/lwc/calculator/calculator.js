import { LightningElement, track } from 'lwc';
import leafletResource from '@salesforce/resourceUrl/lottiePlayer';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Calculator extends LightningElement {
    fname
    lname
    isActive
    namearray = ['Mani','Rakesh','Shankar','vignesh']
    valueX
    valueY
    result
    @track error;
    @track successMessage = 'loading...';

    renderedCallback() {
        console.log('abc1'+JSON.stringify(leafletResource));
        //Promise.all(
            loadScript(this, leafletResource+ '/lottie-player.js')
        .then(() => { 
            this.error = undefined;
            // Call back function if scripts loaded successfully
            this.showSuccessMessage();
        })
        .catch(error => {
            this.error = error;
            console.log('abc'+JSON.stringify(error));
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error!!',
                    message: error,
                    variant: 'error',
                }),
            );
        });
       
    }
    showSuccessMessage() { // call back method 
       this.successMessage = 'Scripts are loaded successfully!!';
    }
    

    handleName(event){
        if(event.target.name == "fName")
            this.fname = event.target.value;
        else (event.target.name == "lName")
            this.lname = event.target.value;
    }

    displayName(event){
        this.isActive = event.target.checked;
     
    }

    compute(event){
        if(event.target.name == "x")
            this.valueX = event.target.value
        else (event.target.name == "y")
            this.valueY = event.target.value
    }

    calculate(event) {
        if(event.target.label == "+")
            this.result = parseInt(this.valueX) + parseInt(this.valueY);
        else if(event.target.label == "*")
        this.result = parseInt(this.valueX) * parseInt(this.valueY);
        else if(event.target.label == "-")
        this.result = parseInt(this.valueX) - parseInt(this.valueY);
        else if(event.target.label == "/")
            this.result = parseInt(this.valueX) / parseInt(this.valueY);
    }
}