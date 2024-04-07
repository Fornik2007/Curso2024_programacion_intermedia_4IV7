
//PROBLEMA 1

function calcularInversion(){
    let inversion = parseFloat(document.getElementById('inversion').value);

    let ganancias = inversion*0.02;

    let total = ganancias + inversion;

    document.getElementById('resultado').innerHTML = `Pasado un mes, este es el total que ganará: \$${ganancias.toFixed(2)} <br> El total que recibirá es de \$${total.toFixed(2)}`;
}

//PROBLEMA 2

function calcularSueldoFinal(){
    let sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    let venta1 = parseFloat(document.getElementById('venta1').value);
    let venta2 = parseFloat(document.getElementById('venta2').value); 
    let venta3 = parseFloat(document.getElementById('venta3').value);

    let comisiones = (venta1 + venta2 + venta3) * 0.1;
    let totalMensual = sueldoBase + comisiones;

    document.getElementById('resultado').innerHTML = `Debido a las rentas realizadas recibira: \$${comisiones.toFixed(2)} por concepto de comision<br>El sueldo total que recibira este mes, teniendo en cuenta su sueldo base y comisiones, sera de: \$${totalMensual.toFixed(2)}`;
}

//PROBLEMA 3

function calcularDescuento(){
    let precio = parseFloat(document.getElementById('precio').value);

    let descuento = precio*0.15;

    let totalmonto = precio - descuento;

    document.getElementById('resultado').innerHTML = `La cantidad del descuento es de: \$${descuento.toFixed(2)} <br> El total a pagar es de: \$${totalmonto.toFixed(2)}`;
}

//PROBLEMA 4

function calcularCalificacionFinal(){
    let calificacion1 = parseFloat(document.getElementById('calificacion1').value);
    let calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    let calificacion3 = parseFloat(document.getElementById('calificacion3').value);
    let calificacionExamen = parseFloat(document.getElementById('calificacionExamen').value);
    let calificacionTrabajo = parseFloat(document.getElementById('calificacionTrabajo').value);

    let promedio = (calificacion1 + calificacion2 + calificacion3)/ 3;
    let calificacionFinal =(promedio * 0.55) + (calificacionExamen * 0.3) + (calificacionTrabajo * 0.15);

    document.getElementById('resultado').innerHTML = `El promedio de sus tres calificaciones parciales es: ${promedio.toFixed(2)} <br> Su calificacion final es: ${calificacionFinal.toFixed(2)}`;
}

//PROBLEMA 5

function calcularPorcentaje(){
    let hombres = parseFloat(document.getElementById('hombres').value);
    let mujeres = parseFloat(document.getElementById('mujeres').value);

    let totalEstudiantes = hombres + mujeres;
    let porcentajeHombres = (hombres / totalEstudiantes) * 100;
    let porcentajeMujeres = (mujeres / totalEstudiantes) * 100;

    document.getElementById('resultado').innerHTML = `El porcentaje de hombres es: ${porcentajeHombres.toFixed(2)}\% <br> El porcentaje de mujeres es: ${porcentajeMujeres.toFixed(2)}\%`;
}

//PROBLEMA 6

function calcularEdad(){
    let fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    let fechaReferencia = new Date(document.getElementById('fechaReferencia').value);

    let edad = fechaReferencia.getFullYear() - fechaNacimiento.getFullYear();

    //lo siguiente es una verificación de que la fecha a comparar con la de nacimiento no sea menor.
    if (fechaReferencia.getFullYear() < fechaNacimiento.getFullYear()) {
        alert("No puede ingresar fechas menores a la de nacimiento. Por favor ingrese otra.");
        fechaReferencia.focus();
        return false;     
    }

    //el siguiente if es para hacer un ajuste a la edad si aun no a pasado su cumpleaños en este año :3
    if (fechaNacimiento.getMonth() > fechaReferencia.getMonth() || (fechaNacimiento.getMonth() === fechaReferencia.getMonth() && fechaNacimiento.getDate() > fechaReferencia.getDate())) {
        edad--;
    }

    document.getElementById('resultado').innerHTML = `su edad es de: ${edad} años`
}