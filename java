
// --- 1. PREPARACION EXAMEN (PREGUNTAS DEL PDF) ---
const preguntas = [
    // --- EPÍGRAFE 1: MARKETING DIGITAL ---
    {
        pregunta: "1. El marketing tiene como objetivo principal:",
        opciones: ["Mejorar la logística de la empresa.", "Conectar lo que el cliente valora con lo que la empresa ofrece.", "Sustituir las ventas físicas por ventas online."],
        respuestaCorrecta: "Conectar lo que el cliente valora con lo que la empresa ofrece."
    },
    {
        pregunta: "2. El marketing digital se diferencia del tradicional porque:",
        opciones: ["Se centra en el contacto personal cara a cara.", "Adapta las técnicas clásicas a entornos digitales y permite medir resultados en tiempo real.", "Solo se aplica en grandes empresas."],
        respuestaCorrecta: "Adapta las técnicas clásicas a entornos digitales y permite medir resultados en tiempo real."
    },
    {
        pregunta: "3. ¿Cuál de los siguientes NO es un objetivo del marketing digital?",
        opciones: ["Aumentar la visibilidad online.", "Crear oportunidades comerciales.", "Eliminar la competencia en el mercado."],
        respuestaCorrecta: "Eliminar la competencia en el mercado."
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

// Iniciar el juego cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', iniciarJuego);
