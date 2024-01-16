

function solicitarPresupuestoTotal(){

  let param = parseInt(prompt('Ingrese el presupuesto total: '));

    presupuestoTotal = param;

     obtenerGastosNecesarios(presupuestoTotal);
     obtenerGastosOpcionales(presupuestoTotal);
     obtenerAhorroInversion(presupuestoTotal);
}


function obtenerGastosNecesarios(param){

     gastosNecesarios = param / 100 * 50;

}

function obtenerGastosOpcionales(param){

    gastosOpcionales = param / 100 * 30;   

}

function obtenerAhorroInversion(param){

    ahorroInversion = param / 100 * 20;
    
}

function mostrarInformacion(){
    
    document.write('Gastos necesarios: ' + gastosNecesarios);
    document.write('</br>');
    document.write('Gastos opcionales: ' + gastosOpcionales);
    document.write('</br>');
    document.write('Ahorro e inversion: ' + ahorroInversion);

}


let titulo = "Presupuesto 50-30-20";

let presupuestoTotal;

let gastosNecesarios;

let gastosOpcionales;

let ahorroInversion;

document.write('<h1>'+titulo+'</h1>');

solicitarPresupuestoTotal();
mostrarInformacion();

