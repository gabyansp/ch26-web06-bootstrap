const displayValorAnterior=document.getElementById('valor-anterior');
const displayValorActual=document.getElementById('valor-actual');
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operador');



//---------------Ver calculadora-----------------
class Calculator{
    basic_operar(num1, num2, operador){
        this.solucion = (num1+operador+num2);
        this.numPantalla = eval(this.solucion);
        return this.numPantalla;
    }
    advanced_operar(num1, num2, operador){
        this.num1 = parseFloat(num1);
        this.num2 = parseFloat(num2);

        switch (operador){
            case 'raiz':
                this.numPantalla = Math.pow(this.num2, 1/this.num1);
                return this.numPantalla;
                break;
        }
    }
}
 

//-----------Ver Display---------------
class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculator();
        this.operador = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*',
            potenciar: '**'
        }
        this.advancedSignos = {
            raiz: '√'
            //Agregar mas funciones
        }
    }

    addNumber(numero){
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.printValues();
    }

    printValues(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.operador] || this.advancedSignos[this.operador] || ''}`;
    }

    deleteValue(){
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.operador = undefined;
        this.printValues();
    }
    computar(tipo){
        this.operador !== 'igual' && this.calcular(this.funcion);
        this.operador = tipo;
        if (this.operador in this.signos){
            this.operacion = this.signos[this.operador];
            this.funcion = 'basic_operar';
        }
        if (this.operador in this.advancedSignos){
            this.operacion = this.operador;
            this.funcion = 'advanced_operar';
        }
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual='';
        this.printValues();
    }

    calcular(x){
        this.funcion = x;
        if((this.valorAnterior !== '')&&(this.valorActual !=='')){
            this.valorActual = this.calculadora[this.funcion](this.valorAnterior, this.valorActual, this.operacion);
        }
    }
}

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumero.forEach(boton=>{
    boton.addEventListener('click', ()=>{
        display.addNumber(boton.innerHTML);
    });
});

botonesOperador.forEach(boton=>{
    boton.addEventListener('click',()=>{
        display.computar(boton.value);
    });
});




