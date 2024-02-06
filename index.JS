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

/* 
const generateQuestionDiv = function () {
  const questionDiv = document.createElement("div");
  const container = document.querySelector(".container2");
  container.appendChild(questionDiv);

}; */

const container = document.querySelector(".container2");

const fillArray = function () {
  const arr = [];
  for (let i = 0; i < questions.length; i++) {
    arr.push(questions[i].question);
  }
  return arr;
};

const getRandomNum = function (range) {
  const randIndex = Math.floor(Math.random() * range.length);
  const random = range.splice(randIndex, 1)[0];
  return random;
};
let counter = 0;

const generateRandNumber = function (range) {
  const random = getRandomNum(range);

  const questionDiv = document.createElement("div");
  container.appendChild(questionDiv);
  questionDiv.innerText = random;
  questionDiv.classList.add("title");
  if (counter > 9) {
    location.reload();
  }
};

const questionNumber = function () {
  if (counter < 11) {
    const divNumber = document.querySelector(".questionNumber");
    const divPosition = container.appendChild(divNumber);
    counter++;
    divNumber.innerText = counter;
  }
};

const changeNumber = function () {
  const container = e.currentTarget.parentElement;
  const title = document.querySelector(".title");
  container.removeChild(title);
};

const buttonClick = () => {
  questionNumber();
  changeNumber();
};
window.onload = function () {
  const randBtn = document.getElementById("randBtn");
  const range = fillArray();
  generateRandNumber(range);
  randBtn.addEventListener("click", deleteTask);
  questionNumber();
  randBtn.addEventListener("click", buttonClick);
};

function deleteTask(e) {
  const container = e.currentTarget.parentElement;
  const title = document.querySelector(".title");
  container.removeChild(title);
  const range = fillArray();
  generateRandNumber(range);
}

// preferenza) Eliminare le ripetizioni del random;
// 1) Integrare i div delle risposte all'interno della pagina;
// 2) Sommare + 1 per le risposte giuste, nulla per le risposte sbagliate (reduce);
// 3) Ciclare per visualizzare la posizione
