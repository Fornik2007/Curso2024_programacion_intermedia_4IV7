var mysql2 = require('mysql2');

//primero vamos a conectarnos

var conexion = mysql2.createConnection({
    host : 'localhost', //aqui va la ip
    database : 'alumnos4IV7',
    user : 'root',
    password : 'jijijijaaña'
});

//ejecutar la conexion
conexion.connect(function(error){
    if(error){
        throw error;
        console.log('Solo juguito contigo');
    }else{
        console.log('Si se conecto');
    }
});

function agregarRegistro(nombre, appat, apmat, correo, password) {
    const insertQuery = 'INSERT INTO registro(nombre, appat, apmat, correo, password) VALUES (?, ?, ?, ?, ?)';
    const insertValues = [nombre, appat, apmat, correo, password];

    conexion.query(insertQuery, insertValues, function (error, respuesta) {
        if (error) {
            console.error('Error al insertar:', error);
            return;
        }
        console.log('Registro exitoso:', respuesta);
    });
}

function borrarRegistro(boleta) {
    const deleteQuery = 'DELETE FROM registro WHERE boleta = ?';
    
    conexion.query(deleteQuery, [boleta], function (error, respuesta) {
        if (error) {
            console.error('Error al borrar:', error);
            return;
        }
        console.log('Borrado exitoso:', respuesta);
    });
}

function editarRegistro(boleta, nombre, appat, apmat, correo, password) {
    const updateQuery = 'UPDATE registro SET nombre = ?, appat = ?, apmat = ?, correo = ?, password = ? WHERE boleta = ?';
    const updateValues = [nombre, appat, apmat, correo, password, boleta];

    conexion.query(updateQuery, updateValues, function (error, respuesta) {
        if (error) {
            console.error('Error al actualizar:', error);
            return;
        }
        console.log('Actualización exitosa:', respuesta);
    });
}

function consultarRegistros() {
    conexion.query('SELECT * FROM registro', function (error, respuesta) {
        if (error) {
            console.error('Error en la consulta:', error);
            return;
        }
        respuesta.forEach(registro => {
            console.log(registro);
        });
    });
}

// con esto uso las funciones 
//agregarRegistro("Neftaly", "Barona", "de la Cruz", "super.fornic@gmail.com", "25071");
borrarRegistro(13); 
//editarRegistro(13, "Fornic", "Barona", "de la Cruz", "super.fornic@gmail.com", "54321");
consultarRegistros();