import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    fname
    lname
    isActive
    namearray = ['Mani','Rakesh','Shankar','vignesh']
    valueX
    valueY
    result

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