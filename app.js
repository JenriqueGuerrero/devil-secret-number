//variables
let playerName = "";
let secretNumber = 0;
updateTextContent('p', 'Dime cuál es tu nombre, humano... Quiero recordarlo cuando grites.');
initialConditions();

//Checks the user's guess
function checkGuess(){
    if(playerName == ""){
        playerName = document.getElementById('userValueT').value;
        clearInputT();
        document.getElementById('userValueT').style.display = 'none'; // Oculta la entrada de texto
        document.getElementById('userValueN').style.display = 'block'; // Muestra la entrada de números
        const wordsI = ["¡Qué sonido tan repugnante! Pero está bien… Juguemos. He pensado en un número entre el 1 y el 20. Tienes 4 intentos para adivinarlo. Si lo logras, te concederé un deseo… pero si fallas, tu alma será mía.", 
            "No puedo decir que me guste ese nombre, pero pronto no importará. El juego es simple: he elegido un número del 1 al 20. Tienes 4 oportunidades para adivinarlo. Cada intento fallido te acercará más… al abismo.", 
            "Ya he sellado tu destino, pero te daré una oportunidad. He pensado en un número entre el 1 y el 20. Solo tienes 4 intentos. Si fallas… te arrastraré a la oscuridad para siempre. Escoge sabiamente.", 
            "Qué nombre tan insignificante. Pero está bien, juguemos. He escogido un número entre el 1 y el 20. Tienes 4 intentos para adivinarlo. Si aciertas, te concederé un deseo… si fallas, tu alma será mi premio.",
            "¿eh? No suena como el nombre de alguien que vaya a sobrevivir este juego... Pero adelante, intenta adivinar cuál es el número secreto, pero solo tienes 4 intentos",
            "Ese nombre me resulta familiar... ¿Nos hemos visto antes? No importa. Juguemos... escoge un número del 1 al 20 pero ten cuidado, solo tienes 4 oportunidades."];
        const wordsInitial = wordsI[Math.floor(Math.random() * wordsI.length)];
        updateTextContent('p', `¿¡${playerName}!? ${wordsInitial}`);

    } else{
        let playerNumber = parseInt(document.getElementById('userValueN').value);
        numAttemptsN--;
        numAttemptsP++;
        clearInputN();

        if (secretNumber === playerNumber) {
            updateTextContent('p', getDemonMessage('win'));
            disableGame();
        } else if (numAttemptsN === 0) {
            updateTextContent('p', getDemonMessage('lose'));
            disableGame();
        } else if(secretNumber > playerNumber){

            if (numAttemptsN == 3){
                const wordsA = [`¡Ja, ja, ja! ¿Eso es todo lo que tienes, ${playerName}? Ese número es demasiado **bajo**. ¿Acaso crees que este juego es tan fácil? Te quedan **3 intentos** antes de que reclame tu alma...`,
                    `Oh, ${playerName}… ese número no es correcto. Es **más alto**, pero no te preocupes… cuando falles los 3 intentos que te quedan, el verdadero horror comenzará.`,
                    `¡Ja! Qué lástima, ${playerName}, elegiste mal. Ese número es **demasiado bajo**. ¿Acaso tiemblan tus manos? Deberían… porque solo te quedan **3 intentos** antes de que acabe el juego.`];
                const wordsAttemtsN = wordsA[Math.floor(Math.random() * wordsA.length)];
                updateTextContent('p', `${wordsAttemtsN}`);
                
            } else if(numAttemptsN == 2){
                const wordsA = [`¿En serio, ${playerName}? ¿Tan bajo? ¡Qué decepción! Esperaba un mejor desafío… pero parece que solo estás **acercándote a tu perdición**. Te quedan **2 intentos** más. ¿O prefieres rendirte y entregar tu alma de una vez?`,
                    `¡Ja, ja, ja! ¿Eso es todo? Ese número es **demasiado pequeño**, como tus posibilidades de ganar. Pero tranquilo… pronto no tendrás que preocuparte por elegir. Te quedan **2 intentos** más antes de que yo decida por ti.`,
                    `¡Ja! Ni siquiera estás cerca, ${playerName}. El número es **más alto**, pero dudo que puedas encontrarlo. Me encanta ver cómo tiemblas… Solo te quedan **2 intentos** antes de que este juego llegue a su fin.`];
                const wordsAttemtsN = wordsA[Math.floor(Math.random() * wordsA.length)];
                updateTextContent('p', `${wordsAttemtsN}`);

            } else if(numAttemptsN == 1){
                const wordsA = [`Oh, ${playerName}, qué pena… ese número es **demasiado bajo**. Casi puedo saborear tu alma temblorosa. Pero aún te queda **1 intento**. Úsalo sabiamente… o prepárate para el final.`,
                    `¡Ja, ja, ja! ¿Eso fue un intento serio? El número es **más alto**, pero dudo que eso te ayude ahora. Solo te queda **1 intento**… y cuando falles, te estaré esperando en la oscuridad.`,
                    `¡Oh, ${playerName}... lo lograste! ¡Ganaste! ¡No puedo creerlo, un simple humano me venció! …Oh, espera… ¡JAJAJAJA! No, no, no… me equivoqué. Ese número es **demasiado bajo**. Te queda **1 intento**… y dudo que tengas otra oportunidad.`];
                const wordsAttemtsN = wordsA[Math.floor(Math.random() * wordsA.length)];
                updateTextContent('p', `${wordsAttemtsN}`);
            }

        } else if(secretNumber < playerNumber){
            if (numAttemptsN == 3){
                const wordsA =[`¡Oh, qué decepción, ${playerName}! Pensé que al menos serías un reto… pero elegiste un número **demasiado alto**. ¡Inténtalo de nuevo, si te atreves! Solo te quedan **3 intentos**.`,
                    `Ja… Ja… JAJAJA… ¿En serio ${playerName}? ¡Ese número no está ni cerca! Es mucho **más bajo**. Me estoy aburriendo… y cuando eso pasa, me gusta **jugar con las almas**. Solo tienes **3 intentos** más...`,
                    `¡Ja, ja, ja! ${playerName}, ¿en serio? ¿Crees que es tan grande? No, no… el número es **más bajo**. Pero sigue intentando… Me encanta ver cómo la desesperación se apodera de ti. Solo te quedan **3 intentos** antes de que sea demasiado tarde.`];
                const wordsAttemtsN = wordsA[Math.floor(Math.random() * wordsA.length)];
                updateTextContent('p', `${wordsAttemtsN}`);
                
            } else if( numAttemptsN == 2){
                const wordsA = [`¡Ja, ja, ja! ¡No, ${playerName}, no! Ese número es **demasiado grande**, al igual que tu fracaso. Me pregunto… ¿cómo sabrá tu alma cuando la devore? Te quedan **2 intentos** más. ¡Elige bien!`,
                    `Oh, ${playerName}… ¿así que crees que el número es tan alto? ¡Error! Es **más bajo**. Pero sigue jugando… aunque ya puedo oler el miedo en tu piel. Solo te quedan **2 intentos** antes de tu condena.`,
                    `¡Patético, ${playerName}! Tu número es **demasiado grande**, al igual que tu ego. Pero descuida… pronto no tendrás que preocuparte por nada. Solo te quedan **2 intentos** más. ¡Ja, ja, ja!`];
                const wordsAttemtsN = wordsA[Math.floor(Math.random() * wordsA.length)];
                updateTextContent('p', `${wordsAttemtsN}`);

            } else if( numAttemptsN == 1){
                const wordsA = [`¡Ja, ja, ja! Oh, ${playerName}, ¿acaso estás sudando? Ese número es **demasiado alto**, igual que tu desesperación. Y ahora… solo te queda **1 intento** antes de que tu alma sea mía.`,
                    `¡Qué decepcionante, ${playerName}! Pensé que al menos serías un reto. Pero no… elegiste un número **demasiado grande**. Y ahora solo tienes **1 intento** más. ¿Quieres un consejo? ¡No falles… o me divertiré contigo por la eternidad!`,
                    `¡Ja! ¡Ese número es **muy alto**, igual que tus inútiles esperanzas! Pero tranquilo, ${playerName}, pronto no tendrás que preocuparte por nada… Solo te queda **1 intento**. ¿Podrás salvarte o aceptarás tu destino?`];
                const wordsAttemtsN = wordsA[Math.floor(Math.random() * wordsA.length)];
                updateTextContent('p', `${wordsAttemtsN}`);
            }
        }       
    }
}

// Generates a random secret number between 1 and 20
function generateSecretNumber(){
    return Math.floor(Math.random()*20)+1;
}

// Updates the text content of an HTML element
function updateTextContent (element, text){
    let elementHTML = document.querySelector(element).innerHTML = text;
}

// Clears the input Text field
function clearInputT(){
    let clearBox = document.getElementById('userValueT');
    clearBox.value = '';
}

// Clears the input Number field
function clearInputN(){
    let clearBox = document.getElementById('userValueN');
    clearBox.value = '';
}

// Sets the initial conditions of the game
function initialConditions(){
    updateTextContent('h1', 'Numero Secreto');
    secretNumber = generateSecretNumber();
    numAttemptsP = 0;
    numAttemptsN = 4;
    console.log(secretNumber)  
}

// Resets the game to the initial conditions
function resetGame(){
    clearInputN()
    clearInputT()
    initialConditions()
    enableGame()
}

// Enables the game input and guess button
function enableGame(){
    document.getElementById('guess').removeAttribute('disabled');
    document.getElementById('userValueT').removeAttribute('disabled');
    document.getElementById('userValueN').removeAttribute('disabled');
    document.getElementById('reset').setAttribute('disabled','true');
}

// Disables the game input and guess button
function disableGame(){
    document.getElementById('reset').removeAttribute('disabled');
    document.getElementById('guess').setAttribute('disabled','true');
    document.getElementById('userValueT').setAttribute('disabled','true');
    document.getElementById('userValueN').setAttribute('disabled','true');
}

// Messages win lose
function getDemonMessage(type, attemptsLeft) {
    const messages = {
        lose: [
            `Shhh… ¿lo escuchas? Es el sonido de la eternidad… esperándote. No lograste adivinar el número secreto que era **${secretNumber}**.`,
            `¡Ja, ja, ja! ¡Lo sabía, ${playerName}, eres un perdedor! El número era **${secretNumber}** y ahora tu alma me pertenece.`,
            `Se acabó… ¡FALLASTE, ${playerName}! El número secreto era **${secretNumber}**. Ahora, extiende tu mano… ¡es hora de cumplir nuestra apuesta!`,
            `No más oportunidades, ${playerName}. El número secreto era **${secretNumber}**… pero ahora ya no importa. Bienvenido a la oscuridad eterna.`,
            `Oh, qué lástima… tu última esperanza se esfumó. El número correcto era **${secretNumber}**. Pero descuida… aquí en la penumbra, nunca estarás solo.`
        ],
        win: [
            `¡Increíble, ${playerName}! Has adivinado el número **${secretNumber}** en **${numAttemptsP}** ${(numAttemptsP === 1) ? 'intento' : 'intentos'}. Pero... esto aún no ha terminado.`,
            `¡¿Cómo lo hiciste, ${playerName}?! El número secreto era **${secretNumber}**… pero no creas que esto significa que estás a salvo.`,
            `Ugh… odio admitirlo, pero lo lograste. El número era **${secretNumber}**. Como prometí, te concederé un deseo… pero cuidado con lo que deseas.`,
            `¡NOOO! ¡Esto es imposible! Adivinaste el número **${secretNumber}** en **${numAttemptsP}** ${(numAttemptsP === 1) ? 'intento' : 'intentos'}... Pero no cantes victoria, volveremos a vernos.`
        ]
    };

    return messages[type][Math.floor(Math.random() * messages[type].length)];
}
