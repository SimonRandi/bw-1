const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
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
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
/* 
// script per implementare il checkbox
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const proceedButton = document.getElementById("proceedButton");

  checkbox.addEventListener("change", function () {
    proceedButton.disabled = !checkbox.checked;
  });
});
//fine script */

/* Svolgimento */
/* 
let time = 10;

const interval = setInterval(function () {
  document.querySelector(".time").innerText = `${time}`;
  time--;

  if (time < 0) {
    clearInterval(interval);
  }
}, 1000); */

/* setInterval(); */

/* let score = 0;
let currentQuestion = 0;

function genereateQuestion() {
  const container = document.querySelector(".heading-container");
  container.innerHTML = "";
  const question = questions[currentQuestion].question;
  container.innerText = question;
}
genereateQuestion(); */

/* ciclo per unire la risposta esatta all'array delle risposte sbagliate */
function allAnswers() {
  for (let i = 0; i < questions.length; i++) {
    let correctAnswer = questions[i].correct_answer;
    let incorrectAnswer = questions[i].incorrect_answers;

    incorrectAnswer.push(correctAnswer);
    let allAnswer = incorrectAnswer;
    console.log(allAnswer);
  }
}

allAnswers();
