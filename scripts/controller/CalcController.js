class CalcController{

    constructor(){

        this._operation = [];
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

        this._operation = [];//limpando o array

    }

    clearEntry(){

        this._operation.pop();//retirando o último item do array
    }

    addOperation(value){

        this._operation.push(value);//acrescentando item no array
        console.log(this._operation);

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
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':   
            case '8':
            case '9':

                this.addOperation(parseInt(value));
                
                break;

            default:
                this.setError
            }
        console.log(this._operation)
        }


        buttonsEvents(){

            let buttons = document.querySelectorAll(".container > .row > button ");
            
            
            buttons.forEach((btn, index)=> {

                this.addEventListenerAll(btn,"click drag", e=>{

                    let textB = (btn.className.replace("btn btn-number col-sm","").replace("btn btn-others col-sm",""));
                    console.log(textB);
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
