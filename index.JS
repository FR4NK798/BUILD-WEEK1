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

const arrObj = [...questions];
// const domande = questions.question;
const containerDomandaRisposta = document.querySelector(".container2");
let questionCounter = 0;

const domandeSelezionate = [];
const domandaRandom = function (arrObj) {
  const randIndex = Math.floor(Math.random() * arrObj.length);
  const random = arrObj.splice(randIndex, 1)[0];

  domandeSelezionate.push(random);
  return random;
};
let counter = 0;

const generateDivDomanda = function (arrObj) {
  const random = domandaRandom(arrObj);

  const questionDiv = document.createElement("div");
  containerDomandaRisposta.appendChild(questionDiv);
  questionDiv.innerText = random.question;
  questionDiv.classList.add("title");
  if (counter > 9) {
    location.reload();
  }
};

const questionNumber = function () {
<<<<<<< HEAD
  // if (counter < 11) {
  const divNumber = document.querySelector(".questionNumber");
  const divPosition = containerDomandaRisposta.appendChild(divNumber);
  counter++;
  divNumber.innerText = counter;
  // }
=======
  if (counter < 11) {
    const divNumber = document.querySelector(".questionNumber");
    const divPosition = container.appendChild(divNumber);
    counter++;
    divNumber.innerText = counter;
  }
>>>>>>> 29051a976f8c95d8dbc3fc1604393d7a7394352a
};

const nextQuestion = function (e) {
  const containerDomandaRisposta = e.currentTarget.parentElement;
  const title = document.querySelector(".title");

  console.log(containerDomandaRisposta);
  if (containerDomandaRisposta) {
    containerDomandaRisposta.removeChild(title);
  }
};

const buttonClick = (e) => {
  // counter++;
  questionNumber();
  nextQuestion(e);
};
window.onload = function () {
  const randBtn = document.getElementById("randBtn");

  generateDivDomanda(arrObj);
  randBtn.addEventListener("click", deleteTask);
  questionNumber();
  randBtn.addEventListener("click", buttonClick);
};

function deleteTask(e) {
  const containerDomandaRisposta = e.currentTarget.parentElement;
  const title = document.querySelector(".title");

  containerDomandaRisposta.removeChild(title);

  generateDivDomanda(arrObj);
}

// preferenza) Eliminare le ripetizioni del random;
// 1) Integrare i div delle risposte all'interno della pagina;
// 2) Sommare + 1 per le risposte giuste, nulla per le risposte sbagliate (reduce);
// 3) Ciclare per visualizzare la posizione
// risposte --> un evento click dove la risposta selezionata viene inserita in un array. Poi fare ciclo for per compararle per avere il punteggio.
// per mostrare le risposte --> mostrare le risposte allegate quando viene mostrata la domanda random.
