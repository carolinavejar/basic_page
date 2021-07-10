console.log(`Carga archivo app.js`);

function Persona(p_nombre, p_apellido_paterno, p_apellido_materno, p_edad, p_correo, p_domicilio, p_infoExtra) {
    console.log(`Funcion Persona`);
    var nuevaPersona = {
        nombre: p_nombre,
        apellido_paterno: p_apellido_paterno,
        apellido_materno: p_apellido_materno,
        edad: p_edad,
        correo: p_correo,
        domicilio: {
            direccion: p_domicilio.direccion,
            comuna: p_domicilio.comuna,
        },
        info_extra: p_infoExtra
    };
    this.personaResultado = nuevaPersona;
    this.imprimir = function () {
        return ("Retorno de imprimir", this.personaResultado)
    }
}

function creaPersona() {
    console.log(`Funcion creaPersona`);
    var nombre = document.getElementById("txtNombre").value;
    var apellido_paterno = document.getElementById("txtApellidoP").value;
    var apellido_materno = document.getElementById("txtApellidoM").value;
    var edad = document.getElementById("txtEdad").value;
    var correo = document.getElementById("txtCorreo").value;
    var domicilio = {
        direccion: document.getElementById("txtDirección").value,
        comuna: document.getElementById("selComuna").value,
    };
    var infoExtra = document.getElementById("txtInfoAdicional").value;
    var nuevaPersona = new Persona(nombre, apellido_paterno, apellido_materno, edad, correo, domicilio, infoExtra);
    console.log(nuevaPersona.imprimir());
}

function validarRut(p_rut) {
    console.log("RUT A VALIDAR: ", p_rut, "\n\n\n");
    p_rut = p_rut.substr(0, p_rut.length - 2);
    console.log("PASO 1 QUITAMOS EL DIGITO VERIFICADOR \n", p_rut, "\n\n\n");
    let rut_invertido = "";
    let largo_rut_inicial = p_rut.length;

    // Primer for para invertir el rut
    for (let contador = 0; contador <= largo_rut_inicial; contador++) {
        let ultimo_numero = p_rut.substr(p_rut.length - 1);
        p_rut = p_rut.slice(0, p_rut.length - 1);
        rut_invertido = rut_invertido + ultimo_numero.toString();
    }
    console.log("PASO 2 INVERTIMOS EL RUT", rut_invertido, "\n\n\n");
    // Ssegundo for para hacer las multiplicaciones

    console.log("PASO 3 MULTIPLICAMOS UNO A UNO LOS NUMEROS DEL RUT, DEL 2 AL 7, SI LLEGAMOS AL 7 , EL SIGUIENTE PARTE NUEVAMENTE EN 2");
    let numero_multiplicar = 1;
    let suma_total = 0;
    for (let contador = 0; contador < largo_rut_inicial; contador++) {
        let numaAMultiplicar = rut_invertido.substr(0, 1);
        numero_multiplicar++;
        if (numero_multiplicar == 8) {
            numero_multiplicar = 2;
        }
        console.log("MULT : ", numaAMultiplicar, " x ", numero_multiplicar , " = ", numaAMultiplicar * numero_multiplicar );
        suma_total = suma_total + (numaAMultiplicar * numero_multiplicar);
        rut_invertido = rut_invertido.slice(1, rut_invertido.length);
    }
    console.log("\n\n\n4 OBTENEMOS LA SUMA DE LAS MULTIPLICACIONES", suma_total, "\n\n\n");

    let divPor11 = suma_total / 11;
    divPor11 = parseInt(divPor11)
    console.log("5 DIVIDIMOS EL RESULTADO POR 11 (ELIMINAMOS LOS DECIMALES DEL RESULTADO SI ES QUE TRAE)", divPor11, "\n\n\n");

    let multiplicaionPor11 = divPor11 * 11;
    console.log("6 MULTIPLICAMOS ESE RESULTADO POR 11", multiplicaionPor11);

    let restaMultiplicaciones = suma_total - multiplicaionPor11;
    console.log("7 RESTAMOS A LA SUMA DE LAS MULTIPLICACIONES ANTERIOR , EL REULTADO MULTIPLICADO POR 11", restaMultiplicaciones, "\n\n\n");

    let resultadoFinal = 11 - restaMultiplicaciones;
    console.log("8 A 11 RESTAMOS EL RESULTADO DE LA RESTA ANTERIOR", resultadoFinal);
}