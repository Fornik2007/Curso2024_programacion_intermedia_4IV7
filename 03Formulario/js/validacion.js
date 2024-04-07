/*
Javascript es un lenguaje de programacion multiparadigma.

Acepta programacion funcional, estructurada, POO, eventos.

Dentro de JS no existe int, double, float, string, etc.

Para el manejo de variables con tipo de dato que existe el estandar ES6 el cual nos dice que para el manejo de variables tenemos:

VAR  LET  CONST
*/

//vamos a hacer una funcion para comprobar que en el campo nombre sea mayor a 3 caracteres

function validar(formulario){

    if(formulario.nombre.value.length < 4){
        alert("Por favor escribe por lo menos 3 caracteres en el nombre");
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var checkStr = formulario.nombre.value;

    alert(checkStr);

    var allValido = true;

    //vamos a hacer un bucle mediante el cual primero obtenfa la cadena del nombre y separa en caracteres, una vez que tenga cada caraceter debo de compararlo con la cadena que en este momento estoy considerando como la verdad absoluta y si despues de recorrer toda la cadena encuentro que el caracter ni se encuentra envie un error
    for(var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido = false;
            break;
        }
    }
    if(!allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "0123456789";

    var checkStr = formulario.edad.value;

    alert(checkStr);

    var allValido = true;

    //vamos a hacer un bucle mediante el cual primero obtenfa la cadena del nombre y separa en caracteres, una vez que tenga cada caraceter debo de compararlo con la cadena que en este momento estoy considerando como la verdad absoluta y si despues de recorrer toda la cadena encuentro que el caracter ni se encuentra envie un error

    for(var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido = false;
            break;
        }
    }
    if(!allValido){
        alert("Escriba unicamente numeros en este campo");
        formulario.edad.focus();
        return false;
    }

    //funcion para validar el correo es nesesario contar con una expreción regular xq tenemos un formato el cual es:
    //texto.texto@texto.texto

    var b = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    
    var txt = formulario.correo.value;

    alert("Email " + (b.test(txt)?" " : "no") + " valido");

    return b.test;
}