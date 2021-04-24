class CalcController{

    constructor(){

        this._displayEl = document.querySelector("#display");
        this.starting();
        this.buttonsEvents();
    }

    starting(){

        
        
    }

    addEventListenerAll(element, events, fun) {
        
        events.split(' ').forEach(event =>{

            element.addEventListener(event, fun, false);

        });

    }

clearAll(){

}

clearEntry(){


}

setError(){

this.display = "ERROR"

}

    execB(value){

        switch (value ){

            case 'C':
                this.clearAll();
                break;
            case 'CE':
                this.clearEntry();
                break;
            case '+':

                break;
            case '-':

                break;
            case '÷':

                break;
            case 'X':

                break;
            case '%':

                break;
            case '=':

                break;
            
            default:
                this.setError
            }
            

        

    }


    buttonsEvents(){

        let buttons = document.querySelectorAll(".container > div > button");
        
        buttons.forEach((btn, index)=> {

            this.addEventListenerAll(btn,"click drag", e=>{

                let textB = (btn.className.replace("btn btn-number col-sm","").replace("btn btn-others col-sm",""));
                console.log(textB)
                this.execB(textB);
        })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{ //mudando aparência do cursor
                btn.style.cursor = "pointer";
            })

        })

    }

    get display(){

        return this._displayEl.innerHTML;

    }

    set display(value){

        return this._displayEl.innerHTML = value;

    }
}