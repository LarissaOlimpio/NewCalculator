class CalcController{

    constructor(){

        this._displayEl = document.querySelector("#display");
        this.starting();
    }

    starting(){

        
        
    }

    get display(){

        return this._displayEl.innerHTML;

    }

    set display(value){

        return this._displayEl.innerHTML = value;

    }
}