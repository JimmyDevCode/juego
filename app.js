//  // Selecciona los elementos HTML necesarios.
//  const container = document.querySelector("#sortable-container");
//  const message = document.querySelector("#message");
//  const nextWordButton = document.querySelector("#next-word-button");

//  // Define las palabras para el juego.
//  var WORDS = ["HOLA", "AMOR", "CASA", "TIEMPO", "VIDA", "MUNDO", "HOMBRE", "MUJER", "NIÑO", "FAMILIA", "COMIDA", "AGUA", "AIRE", "SOL", "LUNA", "ESTRELLA", "COCHE", "TREN", "AVIÓN", "BARCO", "CIUDAD", "PAÍS", "AMIGO", "TRABAJO", "DINERO", "VERDAD", "FELICIDAD", "TRISTEZA", "AMOR", "ODIO", "ALEGRÍA", "ESPERANZA", "MIEDO", "SUEÑO", "DOLOR", "SALUD", "ENFERMEDAD", "CANCER", "MUERTE", "ARTE", "MÚSICA", "LIBRO", "CINE", "TEATRO", "DEPORTE", "NATURALEZA", "ANIMAL", "PLANTA", "ÁRBOL", "MAR", "RÍO", "MONTAÑA", "DESERTO", "PAZ", "GUERRA", "POLÍTICA", "RELIGIÓN", "CIENCIA", "TECNOLOGÍA", "EDUCACIÓN", "CULTURA", "HISTORIA", "LENGUAJE", "LETRA", "PALABRA", "FRASE", "ORACIÓN", "PÁGINA", "LIBRO", "PERIÓDICO", "REVISTA", "TELEVISIÓN", "RADIO", "INTERNET", "COMPUTADORA", "TELÉFONO", "CÁMARA", "FOTO", "VIDEO", "JUEGO", "VIAJE", "VACACIONES", "FIESTA", "CELEBRACIÓN", "BODA", "CUMPLEAÑOS", "NAVIDAD", "AÑO NUEVO"];


//  // Inicializa la palabra actual y las letras.
//  let currentWordIndex = Math.floor(Math.random() * WORDS.length);
//  let currentWord = WORDS[currentWordIndex];
//  let letters = currentWord.split("");

//  // Función que crea los elementos div para las letras.
//  const createLetterDivs = () => {
//    // Elimina los elementos anteriores.
//    container.innerHTML = "";

//    // Crea nuevos elementos div.
//    letters.forEach((letter) => {
//      const letterDiv = document.createElement("div");
//      letterDiv.classList.add("draggable-letter");
//      letterDiv.innerHTML = letter;
//      container.appendChild(letterDiv);
//    });
//  };

//  // Función que desordena las letras.
//  const shuffleLetters = () => {
//    letters.sort(() => Math.random() - 0.5);
// };

// // Función que verifica si las letras están ordenadas correctamente.
// const checkOrder = () => {
// const currentOrder = Array.from(container.children).map(
//  (el) => el.innerHTML
// );
// if (currentOrder.join("").toUpperCase() === currentWord) {
//  message.innerHTML = "¡Correcto!";
// } else {
//  message.innerHTML = "Incorrecto";
// }
// };

// // Inicializa el juego.
// createLetterDivs();
// shuffleLetters();
// checkOrder();

// Sortable.create(container, {
// animation: 150,
// direction: "horizontal",
// onEnd: checkOrder,
// });
// container.addEventListener("dragend", checkOrder);

// // Actualiza la palabra cuando se hace clic en el botón "Siguiente Palabra".
// nextWordButton.addEventListener("click", () => {
// currentWordIndex = (currentWordIndex + 1) % WORDS.length;
// currentWord = WORDS[currentWordIndex];
// letters = currentWord.split("");
// shuffleLetters();
// createLetterDivs();
// checkOrder();
// });