class CalcController{

    constructor(){


        this._lastOp = '';
        this._lastNum = '';
        this._operation = [];
        this._displayEl = document.querySelector("#display");
        this.starting();
        this.buttonsEvents();
       
    }

    starting(){
        
        this.showTheLastNumber();

    }

    addEventListenerAll(element, events, fun) {
        
        events.split(' ').forEach(event =>{

            element.addEventListener(event, fun, false);

        });

    }

    clearAll(){

        this._operation = [];//limpando o array
        this.showTheLastNumber();

    }

    clearEntry(){

       this._operation.pop();//retirando o último item do array
       this.showTheLastNumber();
    }

    getLastItem(){//pegando último item do array

        return this._operation[this._operation.length-1];

    }
    changeLastItem(value){//mudando o último item do array
        this._operation[this._operation.length - 1] = value;
    }

    isOperator(value){

        return (['%','+', '-', '/', '*', '¹/x', 'x²', '√', '±'].indexOf(value) > -1);
    }
    pushOperation(value){//adicionando no array e verificando a quantidade de itens para efeturar a operação

        this._operation.push(value);
        if (this._operation.length > 3 ){

            this.calculate();
        }

    }
    result(){

        return eval(this._operation.join(""));

    }

    calculate(){//calculando 

        let last = '';

        this._lastOp = this.lookingLastItem();//pegar o último operador

        if(this._operation.length > 3){

            last = this._operation.pop();
            
            this._lastNum = this.result();//pegar o resultado
        }else if (this._operation.length ==3){

            this._lastNum = this.lookingLastItem(false);

        }
        console.log('_lastOp', this._lastOp );
        console.log('_lastNum', this._lastNum );

        let result  = this.result();
        if (last == '%'){

            result /= 100; //variavel recebe ela mesma dividido por 100 neste caso
            this._operation = [result];

        }else{

            this._operation = [result];

            if (last) this._operation.push(last);
        }
        this.showTheLastNumber();

    }
    lookingLastItem(isOperator = true){

        let lookingForItem ;  
        for(let i = this._operation.length-1; i >= 0; i--){
        
            if(this.isOperator(this._operation[i])== isOperator){

                lookingForItem = this._operation[i];
                break;
            }
         } 
        return lookingForItem ;    
    }

    showTheLastNumber(){
        
        let lookingForNumber = this.lookingLastItem(false);  
        
        if (!lookingForNumber)lookingForNumber = 0;
        this.display = lookingForNumber;    
    }

    addOperation(value){//adicionando itens no array verificando se é ou não um número
        
        //Verificando se o último item do array é um número
       
        if (isNaN(this.getLastItem())){// caso não seja um número:
        
            if (this.isOperator(value)){// se for um operador devo trocar o operador 
                
                this.changeLastItem(value);
                
            }else if (isNaN(value)){//se for um ponto, algo que não seja operador
                console.log('outra coisa',value);
            }else{

                this.pushOperation(value);//primeira vez que pressionei o número, então preciso mandar para o array
                this.showTheLastNumber();
            }


        }else{//se for um número pega o  número e concatena com o próximo número digitado
            //se for um operador também precisa começar adicionar no array por meio do push
            if (this.isOperator(value)){

                this.pushOperation(value);

            }else{

                let number = this.getLastItem().toString() + value.toString();
                this.changeLastItem(parseInt(number));//acrescentando item no array
                
                this.showTheLastNumber();
            }
        }
       
    }
    setError(){

        this.display = "ERROR"
    }
    
    execB(value){

        switch (value){

            case 'C':
                this.clearAll();
                break;
            case 'CE':
                this.clearEntry();
                break;
            case '+':
                this.addOperation('+');
                break;

            case '-':
                this.addOperation('-');
                break;

            case '÷':
                this.addOperation('/');
                break;

            case 'X':
                this.addOperation('*');
                break;

            case '%':
                this.addOperation('%');
                break;

            case '√':
                this.addOperation('√');
                break;
                
            case '¹/x':
                this.addOperation('¹/x');
                break;

            case '±':
                this.addOperation('±');
                break;
            
            case 'x²':
                this.addOperation('x²');
                break;

            case '←':
               
                break;
           
            case '=':
                this.calculate();
                break;

            case ',':
                this.addOperation(',');
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
                this.setError();
            }
        
        }

    buttonsEvents(){

        let buttons = document.querySelectorAll(".row > button ");
            
            
        buttons.forEach((btn, index)=> {

            this.addEventListenerAll(btn,"click drag", e=>{

            let textB = (btn.className.replace("btn btn-number col-sm","").replace("btn btn-others col-sm","")).trim();
                    
                    
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

        this._displayEl.innerHTML = value;

    }
}
