const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let counterDomande = 0; //contatore delle domande
let risposteDate = []; //tiene traccia delle risposte, servirà per quando farete il calcolo dei punteggi

window.onload = () => {
  questions.forEach((x) => {
    x.order = Math.random() * questions.length; //aggiunge un campo alle domande per rappresentarne l'ordinamento casuale
  });
  questions.sort(function (a, b) {
    return a.order - b.order;
  }); //ordina le domande secondo l'ordine appena dato
};

const buttonDomande = document.getElementById("randBtn");
const questionBody = document.getElementById("questionBody");
const DOMCounter = document.getElementById("questionNumber");
const form = document.getElementById("form");

buttonDomande.addEventListener("click", function getDomanda() {
  buttonDomande["disabled"] = "true"; //disabilita il pulsante per andare alla domanda successiva se non si ha selezionato una risposta
  if (counterDomande < 10) {
    questionBody.innerText = questions[counterDomande].question; //inserisce il testo della domanda nel div
    removeImput(); //vedi sotto
    handleQuestionsOptions(questions[counterDomande]); //vedi sotto
    counterDomande++;
    DOMCounter.innerText = counterDomande; //aggiorna il contatore a video
  } else {
    buttonDomande["hidden"] = "true"; //nasconde il pulsante una volta che le domande sono finite
    questionBody.innerText = "Finito!";
    removeImput();
    DOMCounter.innerText = "";
    let sommaRisposteCorrette = risposteDate.reduce((accumulator, currentValue) => {
      return parseInt(accumulator) + parseInt(currentValue);
    });
  }
});

function handleQuestionsOptions(e) {
  //gestisce il comportamento delle domande, aggiungendo imput e label in base a quante risposte ci sono
  for (let i = 0; i < e.incorrect_answers.length + 1; i++) {
    let input = document.createElement("input");
    let label = document.createElement("label");
    input.type = "radio";
    input.name = "answer"; //assegno il tipo di imput
    input.addEventListener("change", function (event) {
      buttonDomande.removeAttribute("disabled");
      risposteDate.push(event.target.value);
    }); //assegno all'imput listener per aggiungere all'array di risposte quella selezionata
    if (i < e.incorrect_answers.length) {
      input.value = 0; //le domande errate avrano valore 0
      label.innerText = e.incorrect_answers[i];
    } else {
      input.value = 1; //le domande corrette avranno valore 1
      label.innerText = e.correct_answer;
    }
    form.appendChild(label);
    form.appendChild(input);
  }
}

function removeImput() {
  //gestisce la rimozione degli imput e dei label relativi al cambio di domanda
  const inputs = document.querySelectorAll("input");
  const labels = document.querySelectorAll("label");
  inputs.forEach(function (input) {
    input.parentNode.removeChild(input);
  });
  labels.forEach(function (label) {
    label.parentNode.removeChild(label);
  });
}
