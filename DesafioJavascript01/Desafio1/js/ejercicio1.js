


function obtenerCostosFijos(){
    
    let param = parseInt(prompt('Ingrese los costos fijos: '));

    costosFijos = param;

    obtenerPrecioDeVenta();

}

function obtenerPrecioDeVenta(){

    let param = parseInt(prompt('Ingrese el precio de venta: '));

       precioDeVenta = param; 

       obtenerCostosVariables();

}


function obtenerCostosVariables(){

    let param = parseInt(prompt('Ingrese los costos variables: '));

     costosVariables = param; 

     calcularPuntoDeEquilibrio();

}


function calcularPuntoDeEquilibrio(){

   let operation1 = precioDeVenta - costosVariables;

   let operation2 = costosFijos / operation1;

   puntoDeEquilibrio = operation2;

   mostrarInformacion();

}

function mostrarInformacion(){
  
document.write('Costos fijos: '+ costosFijos);
document.write('</br>');
document.write('Precio de venta: '+ precioDeVenta);
document.write('</br>');
document.write('Costos variables: '+ costosVariables);
document.write('</br>');
document.write('Punto de equlibrio: '+ puntoDeEquilibrio);
document.write('</br>');
document.write('La cantidad minima necesaria de ventas es: '+ puntoDeEquilibrio);

}

let titulo = "Informacion del producto";
let costosFijos;
let costosVariables;
let precioDeVenta;
let puntoDeEquilibrio;

document.write('<h1>'+titulo+'</h1>');
obtenerCostosFijos();








