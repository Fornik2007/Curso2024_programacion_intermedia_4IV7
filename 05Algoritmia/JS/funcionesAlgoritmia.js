function validacionp1(evt){
    if(window.event){
        keynum = evt.keyCode;
    }else{
        keynum = evt.which;
    }

    if ((keynum > 64 && keynum < 91 || keynum > 96 && keynum < 166 || keynum == 32 || keynum == 08)) {
        return true;
    } else {
        alert("Ingrese palabras separadas por ESPACIOS únicamente")
    }
    

function problema1(){
    let datosP1 = document.querySelector('#p1-input').value;

    let array = datosP1.split(' ').reverse();
    
    let resultadoP1 = '';


    array.forEach(function (palabra, i){
        if(i != 0 || i != array.length) resultadoP1 += ' ';
        resultadoP1 += palabra;
    });

    document.querySelector('#p1-output').textContent = resultadoP1;

}

function validacionp2(evt){
    if(window.event){
        keynum = evt.keyCode;
    }else{
        keynum = evt.which;
    }

    if ((keynum > 47 && keynum < 58 || keynum == 32 || keynum == 08)) {
        return true;
    } else {
        alert("Ingrese números únicamente")
    }    

function problema2(){
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //vamos a formar los vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //vamos a meter una funcion de ordenamiento
    v1 = v1.sort(function(a,b){
        return b-a;
    });
    v2 = v2.sort(function(a,b){
        return b-a;
    });

    //invierto la cadena
    v2 = v2.reverse();

    //vamos a recorrer el v1 y lo vamos a multiplicar el inverso del v2
    var p2_producto = 0;
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }
    //muestro el resultado
    document.querySelector('#p2-output').textContent = 'El producto escalar minimo es de: ' + p2_producto;
}

function validacionp3(evt){
    if(window.event){
        keynum = evt.keyCode;
    }else{
        keynum = evt.which;
    }

    if ((keynum > 64 && keynum < 91)) {
        return true;
    } else {
        alert("Ingrese solamente MAYUSCULAS SIN ESPACIOS, separelos por una COMA")
    }
}

function problema3(){
    let abc = ['A', 'B', 'C', 'D', 'E', 'F',
            'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
            'V', 'W', 'X', 'Y', 'Z'];
    
    let datosP3 = document.querySelector('#p3-input').value;

    let palarasP3 = datosP3.split(',');

    palarasP3 = palarasP3.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    let resultadoP3 = '';

    palarasP3.forEach(function (palabra, i){
        let letrasU = [];
        let arrayPalabras = palabra.split('');
        abc.forEach(function (letra, j){
            arrayPalabras.forEach(function (letraPalabra, k){
                if(letraPalabra == letra){
                    if(letrasU.indexOf(letra) < 0){
                        letrasU.push(letra);
                    }
                }
            });

        });
        resultadoP3 += 'Palabra: ' + palabra + ' = ' + letrasU.length + '\n';
    });

    document.querySelector('#p3-output').textContent = resultadoP3;

}
