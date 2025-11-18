// --- 1. PREPARACION EXAMEN (PREGUNTAS DEL PDF) ---
const preguntas = [
        {
        pregunta: "1. ¿Qué significa descontar un efecto comercial?:",
        opciones: ["Pedir un anticipo al banco.", "Cobrarlo después de la fecha.", "Aplazar su pago.","Cancelarlo antes de tiempo"],
        respuestaCorrecta: "Pedir un anticipo al banco."
    },
    {
        pregunta: "2. Para calcular el capital final según la ley de la capitalización simple tenemos que ...:",
        opciones: ["Sumar los intereses totales al capital inicial.", "Restar los intereses totales al capital inicial.", "Multiplicar el tipo de interés por el capital final.","Multiplicar el tipo de interés por el plazo."],
        respuestaCorrecta: "Multiplicar el tipo de interés por el plazo."
    },
    {
        pregunta: "3. Cuando hablamos de un aplazamiento en el pago que un proveedor concede a una empresa estamos hablando de ...?",
        opciones: ["Descuento de efectos comerciales.", "Confirming.", "Crédito comercial.","Crédito bancacrio"],
        respuestaCorrecta: "Crédito comercial."
    },
    {
        pregunta: "4. Las fuentes de financiación a corto plazo son aquellas que cubren necesidades de pago con un plazo de ...",
        opciones: ["Menos de 1 mes.", "Menos de 6 meses.", "Menos de 1 año.","Menos de 2 años"],
        respuestaCorrecta: "Menos de 1 año"
    },
    {
        pregunta: "5. Un crédito bancario es ...",
        opciones: ["Un préstamo de una cantidad monetaria que debe devolverse después de un plazo, aplicando intereses sobre la cantidad total.", "Un aplazamiento en el pago a un proveedor.", "Un anticipo de cobro a clientes que se solicita a una entidad bancaria.","Un servicio financiero que ofrecen las entidades financieras por las que la empresas puede disponer de una cantidad de dinero máxima y pagar intereses solo por la cantidad que utilice"],
        respuestaCorrecta: "Un préstamo de una cantidad monetaria que debe devolverse después de un plazo, aplicando intereses sobre la cantidad total."
    },
    {
        pregunta: "6. Los cheques y pagarés son ejemplos de efectos comerciales",
        opciones: ["Verdadero", "Falso"],
        respuestaCorrecta: "Verdadero"
    },
    {
        pregunta: "7.Cuanto menor sea el tipo de interés, más costoso será para una empresa obtener financiación",
        opciones: ["Verdadero", "Falso"],
        respuestaCorrecta: "Falso"
    },
    {
        pregunta: "8. Cuando hablamos de que una empresa tiene la opción de pagar en el momento con un descuento o aplazar el pago a un proveedor nos referimos a ...",
        opciones: ["Descuentos con efectos comerciales.", "Crédito comercial.", "Crédito bancario.","Factoring"],
        respuestaCorrecta: "Crédito comercial."
    },
    {
        pregunta: "9. ¿Qué es un efecto comercial?",
        opciones: ["Un préstamo a largo plazo.", "Un descuento financiero", "Un documento que contiene una promesa de pago.","Una factura pagada al contado"],
        respuestaCorrecta: "Un documento que contiene una promesa de pago."
    },
    {
        pregunta: "10. Dos maneras de obtener financiación son adelantar pagos y aplazar cobros",
        opciones: ["Verdadero.", "Falso."],
        respuestaCorrecta: "Verdadero."
    },
    {
        pregunta: "11.¿Qué es la financiación de una empresa?",
        opciones: ["El dinero que gana la empresa al vender.", "La obtención de recursos financieros.", "Los gastos que paga la empresa","El beneficio anual obtenido"],
        respuestaCorrecta: "La obtención de recursos financieros."
    },
    {
        pregunta: "12. ¿Qué es una fuente de financiación?",
        opciones: ["El lugar donde se guarda el dinero", "Una opción para obtener recursos económicos.", "Un préstamo sin intereses.","Un gasto financiero"],
        respuestaCorrecta: "Una opción para obtener recursos económicos."
    },
    {
        pregunta: "13. ¿Para qué se usa la financiación a corto plazo?",
        opciones: ["Para comprar maquinaria pesada.","Para pagar gastos inmediatos.", "Para adquirir locales comerciales.", "Para abrir una nueva tienda."],
        respuestaCorrecta: "Para pagar gastos inmediatos."
    },
    {
        pregunta: "14. ¿Qué es el crédito comercial?",
        opciones: ["Un préstamo entre amigos", "Una subvención pública", "Una cuenta de ahorro empresarial","Un aplazamiento del pago concedido por el proveedor."],
        respuestaCorrecta: "Un aplazamiento del pago concedido por el proveedor."
    },
    {
        pregunta: "15. ¿Qué es una póliza de crédito?",
        opciones: ["Un contrato de alquiler de local", "Un seguro de crédito comercial", "Una cuenta corriente donde el banco pone dinero a disposición de la empresa","Una ayuda a fondo perdido"],
        respuestaCorrecta: "Una cuenta corriente donde el banco pone dinero a disposición de la empresa"
    },
    {
        pregunta: "16. En una póliza de crédito, los intereses se pagan...",
        opciones: ["Solo por el dinero realmente usado", "Por todo el crédito concedido", " Solo al final del año","Nunca"],
        respuestaCorrecta: "Solo por el dinero realmente usado"
    },
    {
        pregunta: "17. ¿Qué es el efectivo en un descuento comercial?",
        opciones: ["El dinero que adelanta el banco", "El valor total del préstamo", "La deuda final","La comisión pagada"],
        respuestaCorrecta: "El dinero que adelanta el banco"
    },
    {
        pregunta: "18. ¿Qué es el factoring?",
        opciones: ["Un contrato de alquiler de maquinaria", "Un préstamo hipotecario", "Un servicio financiero que gestiona el cobro a clientes","Una forma de crowdfunding"],
        respuestaCorrecta: "Un servicio financiero que gestiona el cobro a clientes"
    },
    {
        pregunta: "19. ¿Qué es un préstamo bancario?",
        opciones: ["Una ayuda sin devolución", "Una cuenta corriente con comisiones", "Un pago por adelantado","Un contrato donde el banco presta dinero y cobra intereses a cambio"],
        respuestaCorrecta: "Un contrato donde el banco presta dinero y cobra intereses a cambio"
    },
    {
        pregunta: "20. ¿Qué es el leasing?",
        opciones: ["Alquiler con opción a compra", "Compra directa", "Préstamo sin intereses","Renting de locales"],
        respuestaCorrecta: "Alquiler con opción a compra"
    },
    {
        pregunta: "21. ¿Qué es el renting?",
        opciones: ["Alquiler con opción a compra", "Compra directa", "Alquiler sin opción a compra","Compra aplazada"],
        respuestaCorrecta: "Alquiler sin opción a compra"
    },
    {
        pregunta: "22. ¿Qué es un business angel?",
        opciones: ["Un préstamo bancario", "Un inversor privado que aporta dinero y asesoramiento", "Una sociedad anónima","Un banco público"],
        respuestaCorrecta: "Un inversor privado que aporta dinero y asesoramiento"
    },
    {
        pregunta: "23. ¿Qué es el crowdfunding?",
        opciones: ["Financiación colectiva a través de Internet", "Un tipo de crédito a corto plazo", "Un contrato de leasing","Una póliza de seguros"],
        respuestaCorrecta: "Financiación colectiva a través de Internet"
    },
    
     ];

// --- 2. REFERENCIAS A ELEMENTOS DEL DOM ---
const preguntaEl = document.getElementById('pregunta');
const opcionesRespuestaEl = document.getElementById('opciones-respuesta');
const feedbackEl = document.getElementById('feedback');
const siguienteBtn = document.getElementById('siguiente-btn');
const progresoEl = document.getElementById('progreso');
const correctasEl = document.getElementById('correctas');
const incorrectasEl = document.getElementById('incorrectas');
const quizContainerEl = document.getElementById('quiz-container');

// --- 3. ESTADO DEL JUEGO (Variables Globales) ---
let indicePreguntaActual = 0;
let preguntasCorrectas = 0;
let preguntasIncorrectas = 0;
let totalPreguntas = 0;
let primerIntento = true; // Variable clave para contar errores solo una vez

// --- 4. FUNCIONES DEL JUEGO ---

/**
 * Función para cargar la pregunta actual y sus opciones.
 */
function cargarPregunta() {
    // Restablecer el estado para la nueva pregunta
    primerIntento = true;
    const preguntaActual = preguntas[indicePreguntaActual];

    // Limpiar el estado anterior
    opcionesRespuestaEl.innerHTML = '';
    feedbackEl.textContent = '';
    feedbackEl.className = ''; // Limpiar clases 'correct' o 'incorrect'
    siguienteBtn.style.display = 'none'; // Ocultar botón "Siguiente"

    // Actualizar la UI
    preguntaEl.textContent = preguntaActual.pregunta;
    progresoEl.textContent = `Pregunta ${indicePreguntaActual + 1} de ${totalPreguntas}`;

    // Crear un botón por cada opción
    preguntaActual.opciones.forEach(opcion => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        // Asignar el evento onclick para llamar a seleccionarRespuesta
        boton.onclick = seleccionarRespuesta; 
        opcionesRespuestaEl.appendChild(boton);
    });
}

/**
 * Función que se ejecuta al hacer clic en una opción.
 * (VERSIÓN ARREGLADA: Siempre avanza después del primer intento)
 */
function seleccionarRespuesta(evento) {
    // Si no es el primer intento, no hagas nada (evita clics extra)
    if (!primerIntento) return; 

    const botonSeleccionado = evento.target;
    const respuestaSeleccionada = botonSeleccionado.textContent;
    const respuestaCorrecta = preguntas[indicePreguntaActual].respuestaCorrecta;

    // --- LÓGICA MODIFICADA ---

    // 1. Deshabilitar todos los botones inmediatamente
    Array.from(opcionesRespuestaEl.children).forEach(btn => {
        btn.disabled = true;
        // Resaltar la respuesta correcta para que el usuario la vea
        if (btn.textContent === respuestaCorrecta) {
            btn.classList.add('correct');
        }
    });

    // 2. Comprobar si la respuesta fue correcta o incorrecta
    if (respuestaSeleccionada === respuestaCorrecta) {
        // --- RESPUESTA CORRECTA ---
        feedbackEl.textContent = "¡Correcto!";
        feedbackEl.className = 'correct';
        
        preguntasCorrectas++; // Solo contamos en el primer intento
        correctasEl.textContent = `Correctas: ${preguntasCorrectas}`;
        
    } else {
        // --- RESPUESTA INCORRECTA ---
        feedbackEl.textContent = `¡Incorrecto! La respuesta correcta era: ${respuestaCorrecta}`;
        feedbackEl.className = 'incorrect';
        
        // Marcar la que el usuario eligió mal (además de la correcta)
        botonSeleccionado.classList.add('incorrect'); 

        preguntasIncorrectas++; // Solo contamos en el primer intento
        incorrectasEl.textContent = `Incorrectas: ${preguntasIncorrectas}`;
    }

    // 3. Marcar que el primer intento ya pasó
    primerIntento = false;

    // 4. Mostrar SIEMPRE el botón "Siguiente Pregunta"
    siguienteBtn.style.display = 'block';
}


/**
 * Función para pasar a la siguiente pregunta o finalizar el juego.
 * (VERSIÓN ACTUALIZADA CON SWEETALERT)
 */
function siguientePregunta() {
    indicePreguntaActual++; // Avanza a la siguiente pregunta

    if (indicePreguntaActual < totalPreguntas) {
        // Si hay más preguntas
        cargarPregunta();
    } else {
        // Si se acabaron las preguntas, usamos SweetAlert2
        Swal.fire({
          title: "¡Final!!",
          text: "¡Has completado el examen!",
          icon: "success",
          draggable: true, 
          confirmButtonText: 'Ver Puntuación'
        }).then(() => {
          // Esto se ejecuta cuando el usuario pulsa "Ver Puntuación"
          mostrarPantallaDeResultados(); // Cambiado de 'mostrarResultados'
        });
    }
}

/**
 * Muestra la PANTALLA final del juego (la puntuación).
 * (Esta era tu antigua función 'mostrarResultados', con la felicitación)
 */
function mostrarPantallaDeResultados() {
    // Variable para el mensaje de felicitación
    let mensajeFelicidad = '';

    // Comprobar si todas las respuestas fueron correctas
    if (preguntasCorrectas === totalPreguntas) {
        mensajeFelicidad = `
            <span class="felicitacion">
                ¡Felicidades! ¡Respondiste todo perfectamente!
            </span>
        `;
    }

    // Limpiar el contenedor del quiz y mostrar los resultados
    quizContainerEl.innerHTML = `
        <h1>¡Fin del juego!</h1>
        <p>Tu puntuación final es:</p>
        <p class="resultado"><strong>${preguntasCorrectas} correctas</strong> de ${totalPreguntas}.</p>
        <p class="resultado"><strong>${preguntasIncorrectas} incorrectas</strong> (en el primer intento).</p>
        
        ${mensajeFelicidad} 

        <button onclick="location.reload()" class="reiniciar">Volver a jugar</button>
    `;
    // (Asegúrate de tener los estilos para .reiniciar y .felicitacion en style.css)
}

/**
 * Función inicial para configurar el juego.
 */
function iniciarJuego() {
    totalPreguntas = preguntas.length;

    // Actualizar contadores iniciales en el HTML
    correctasEl.textContent = `Correctas: 0`;
    incorrectasEl.textContent = `Incorrectas: 0`;
    
    // Cargar la primera pregunta
    cargarPregunta();
}

// --- 5. INICIAR EL JUEGO ---

// Asignar el evento al botón "Siguiente"
siguienteBtn.onclick = siguientePregunta;
