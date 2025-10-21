// --- 1. PREPARACION EXAMEN ---
const preguntas = [
    {
        pregunta: "Cual es la capital de Venezuela",
        opciones: ["Kioklfffffffffffffffffffffffffffmbvto", "Osafdssssssssssssssssssgka", "Tokio", "Nagoya"],
        respuestaCorrecta: "Tokio"
    },
    {
        pregunta: "¿Qué gas es esencial para la respiración humana?",
        opciones: ["Nitrógeno", "Oxígeno", "Dióxido de Carbffffffffffffffffffffffffffffffono", "Helio"],
        respuestaCorrecta: "Oxígeno"
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Nilo", "Amazonas", "Misisipi"],
        respuestaCorrecta: "Amazonas"
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        opciones: ["Mario Vargas Llosa", "Julio Cortázar", "Gabriel García Márquez"],
        respuestaCorrecta: "Gabriel García Márquez"
    }
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
 * Comprueba si la respuesta es correcta o incorrecta.
 */
function seleccionarRespuesta(evento) {
    const botonSeleccionado = evento.target;
    const respuestaSeleccionada = botonSeleccionado.textContent;
    const respuestaCorrecta = preguntas[indicePreguntaActual].respuestaCorrecta;

    if (respuestaSeleccionada === respuestaCorrecta) {
        // --- RESPUESTA CORRECTA ---
        feedbackEl.textContent = "¡Correcto!";
        feedbackEl.className = 'correct'; // Asigna color verde al feedback
        botonSeleccionado.classList.add('correct');

        if (primerIntento) {
            preguntasCorrectas++;
            correctasEl.textContent = `Correctas: ${preguntasCorrectas}`; // Actualiza contador
            primerIntento = false; // Ya no es el primer intento
        }

        // Deshabilitar todos los botones después de acertar
        Array.from(opcionesRespuestaEl.children).forEach(btn => {
            if (btn.textContent === respuestaCorrecta) {
                btn.classList.add('correct'); // Asegura que la correcta esté verde
            }
            btn.disabled = true;
        });

        // Mostrar el botón "Siguiente Pregunta"
        siguienteBtn.style.display = 'block';

    } else {
        // --- RESPUESTA INCORRECTA ---
        feedbackEl.textContent = "¡Incorrecto! Intenta de nuevo";
        feedbackEl.className = 'incorrect'; // Asigna color rojo al feedback
        botonSeleccionado.classList.add('incorrect');
        botonSeleccionado.disabled = true; // Deshabilita solo el botón incorrecto

        if (primerIntento) {
            preguntasIncorrectas++;
            incorrectasEl.textContent = `Incorrectas: ${preguntasIncorrectas}`; // Actualiza contador
            primerIntento = false; // Los siguientes fallos en esta pregunta no cuentan
        }
    }
}

/**
 * Función para pasar a la siguiente pregunta o finalizar el juego.
 */
function siguientePregunta() {
    indicePreguntaActual++; // Avanza a la siguiente pregunta

    if (indicePreguntaActual < totalPreguntas) {
        // Si hay más preguntas
        cargarPregunta();
    } else {
        // Si se acabaron las preguntas
        mostrarResultados();
    }
}

/**
 * Muestra el mensaje final del juego.
 */
/**
 * Muestra el mensaje final del juego.
 */
function mostrarResultados() {
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
    // (El CSS para .reiniciar y .felicitacion ya está/estará en style.css)
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
