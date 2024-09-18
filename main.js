

let cantidad = document.getElementById('cantidad');
let btnGenerar = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');
let color = "";
const  cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


function generar(){
    let numeroDigitado = parseInt(cantidad.value);
    let password = '';
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que sermayor que 8");
    }else{
        for(let i = 0; i < numeroDigitado; i++){
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password+= caracterAleatorio;
        }
    
        contrasena.value =password;
       let verifica = verificarContrasena(password);

    }

    

}

function verificarContrasena(password){
    let fortalezaContrasena = 1;
    //Verifica si tiene letras en minuscula
    if(/[a-z]/.test(password)) fortalezaContrasena++;
    
    //Verifica si tiene letras en mayuscula
    if(/[A-Z]/.test(password)) fortalezaContrasena++;

    //Verifica si tiene numeros
    if (/\d/.test(password)) fortalezaContrasena++;

    //Verifica si tiene caracteres especiales
    if (/[\W_]/.test(password)) fortalezaContrasena++;

    switch (fortalezaContrasena) {
        case 1:
            cambiarColor(0);
            mensaje.innerText = 'Muy débil';
            break;
        case 2:
            cambiarColor(0);
            mensaje.innerText = 'Débil';
            break;
        case 3:
            cambiarColor(1);
            mensaje.innerText = 'Media';
            break;
        case 4:
            cambiarColor(2);
            mensaje.innerText = 'Fuerte';
            break;
        case 5:
            cambiarColor(3);
            mensaje.innerText = 'Muy fuerte';
            break;
        default:
            break; // Solo por seguridad.
    }

}


function cambiarColor(color) {
   switch (parseInt(color)) {
    case 0:
        contrasena.style.border = '2px solid #000000'; 
        break;
    case 1:
        contrasena.style.border = '5px solid #ffff00'; 
        break;
    case 2:
        contrasena.style.border = '5px solid #89ac76';
        break; 
    case 3:
        contrasena.style.border = '5px solid #008f39';
        break; 
    default:
        break;

    }
}

function limpiar(){
    contrasena.style.border = '';
    mensaje.innerText = '';
    contrasena.value = '';
    cantidad.value = '';
}

/*
Reto

Agregar los siguientes caracteres para generar la contraseña: !@#$%^&*()
Mejorar la parte gráfica, poner un boton de limpiar
Ver rainting si la contraseña es fuerte, medio o debil.

*/


