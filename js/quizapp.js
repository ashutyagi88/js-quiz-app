const quizData = [
  {
    question: "What country has the highest life expectancy?",
    a: "Hong Kong",
    b: "Canada",
    c: "India",
    d: "USA",
    correct: "a",
  },
  {
    question: "Who is the 2021 F1 World Champion?",
    a: "Lewis Hamilton",
    b: "Lando Norris",
    c: "Sebestian Vettel",
    d: "Max Verstappen",
    correct: "d",
  },
  {
    question: "What Netflix show had the most streaming views in 2021?",
    a: "Money Heist",
    b: "Squid Games",
    c: "Dark",
    d: "Ozark",
    correct: "b",
  },
  {
    question: "What planet is closest to the sun?",
    a: "Mercury",
    b: "Venus",
    c: "Earth",
    d: "Pluto",
    correct: "a",
  },
  {
    question: "What is the capital of Canada?",
    a: "Toronto",
    b: "Ottawa",
    c: "Vancouver",
    d: "Montreal",
    correct: "b",
  },
  {
    question: "What sporting event has a strict dress code of all white?",
    a: "FIFA World Cup",
    b: "Rolland - Garros",
    c: "Wimbledon",
    d: "ICC Cricket World Cup",
    correct: "c",
  },
];

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn_sub");
const answerEls = document.querySelectorAll(".answer1");

let current = 0;
let answer = undefined;
let score = 0;

const deselect = () => {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
};

const loadques = () => {
  deselect();
  const currentQuiz = quizData[current];
  question.innerText = currentQuiz.question;
  a_text.innerText = currentQuiz.a;
  b_text.innerText = currentQuiz.b;
  c_text.innerText = currentQuiz.c;
  d_text.innerText = currentQuiz.d;
};

loadques();

const getSelected = () => {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
};

btn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[current].correct) {
      score++;
    }
    current++;
    if (current < quizData.length) {
      loadques();
    } else {
      alert(`Quiz is finished. Your Score is ${score}/${quizData.length}`);
      location.reload();
    }
  }
});

// loadques();
