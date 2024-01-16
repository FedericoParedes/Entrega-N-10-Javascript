

function solicitarEdad(){

    let edad =parseInt(prompt('Ingrese su edad: '));

    if(edad>=18){
       window.alert(mensajeBienvenida);
    }else{
        window.alert(mensajeError);
    }
}


let mensajeBienvenida = "¡Bienvenido! Ya puedes usar la aplicacion";
let mensajeError = "Lo sentimos. No tienes la edad suficiente para ingresar";

solicitarEdad();