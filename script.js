var questionCount = 0;

var visualScore = 0;
var auditoryScore = 0;
var physicalScore = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var result = document.getElementById("result");
var description = document.getElementById("description");
var restart = document.getElementById("restart");


q1a1.addEventListener("click", Visual);
q1a2.addEventListener("click", Auditory);
q1a3.addEventListener("click", Physical);

q2a1.addEventListener("click", Visual);
q2a2.addEventListener("click", Auditory);
q2a3.addEventListener("click", Physical);

q3a1.addEventListener("click", Visual);
q3a2.addEventListener("click", Auditory);
q3a3.addEventListener("click", Physical);

q4a1.addEventListener("click", Visual);
q4a2.addEventListener("click", Auditory);
q4a3.addEventListener("click", Physical);

q5a1.addEventListener("click", Visual);
q5a2.addEventListener("click", Auditory);
q5a3.addEventListener("click", Physical);

restart.addEventListener("click", resetQuiz);


function Visual() {
  visualScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
};

function Auditory() {
  auditoryScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
};

function Physical() {
  physicalScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}


function updateResult() {
  if (visualScore >= 2) {
    result.innerHTML = "Your learning type is Visual!";
    description.innerHTML =
      "";
  } else if (auditoryScore >= 2) {
    result.innerHTML = "Your learning type is Auditory!";
    description.innerHTML =
      "";
  } else if (physicalScore >= 2) {
    result.innerHTML = "Your learning type is Physical!";
    description.innerHTML =
      "";

  } else {
    result.innerHTML =
      "You learn in various different ways!";
    description.innerHTML =
      "You will have to do further testing to find out what type of learner are you";
  }
}

function resetQuiz(){
    result.innerHTML = "Your result is...";
    description.innerHTML = "";
    visualScore = 0;
    auditoryScore = 0;
    physicalScore = 0;
    questionCount = 0;

    if (questionCount >= 0) {
      questionCount = 0;
   }
}
