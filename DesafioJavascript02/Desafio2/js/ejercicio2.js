
let form = document.getElementById('formLogin');

let inputUser = document.getElementById('txtUsername');

let inputPassword = document.getElementById('txtPassword');


form.addEventListener('submit', (e)=>{

          e.preventDefault();

        let user = inputUser.value;

        let password = inputPassword.value;

        let isValidUser = false;

        let isValidPassword = false;

        if(user!="admin"){
            window.alert("El usuario ingresado no es valido");
            isValidUser = false;
        } else{
            window.alert("El usuario ingresado es valido");
            isValidUser = true;
        }

        if(password!=1234){
            window.alert("La contaseña no es valida");
            isValidPassword = false;
        } else{
           window.alert("La contraseña ingresada es valida");
            isValidPassword = true;
        }

        if(isValidPassword && isValidUser) {
               window.alert("Autenticacion finalizada. Ha ingresado correctamente sus credenciales")
        } else{
            window.alert("Las credenciales ingresadas son incorrectas");
        }


})