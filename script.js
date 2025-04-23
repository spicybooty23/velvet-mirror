let gender = null;
let currentQuestionIndex = 0;
let currentFlow = [];

function startQuestionnaire(selectedGender) {
  gender = selectedGender;
  document.getElementById('intro').style.display = 'none';
  document.getElementById('questionnaire').style.display = 'block';
  currentFlow = questions[gender];
  currentQuestionIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById('questionnaire');
  container.innerHTML = '';

  const questionObj = currentFlow[currentQuestionIndex];
  const questionElem = document.createElement('h2');
  questionElem.textContent = questionObj.text;
  container.appendChild(questionElem);

  questionObj.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option.text;
    btn.onclick = () => handleAnswer(index);
    container.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  const next = currentFlow[currentQuestionIndex].options[selectedIndex].next;
  if (typeof next === 'number') {
    currentQuestionIndex = next;
    renderQuestion();
  } else {
    document.getElementById('questionnaire').innerHTML = '<h2>You've reached the end of this Mirror segment.</h2>';
  }
}
