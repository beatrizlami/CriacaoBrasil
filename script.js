const questions = document.querySelectorAll('.question');
let currentQuestionIndex = 0;

// Esconder todas as perguntas, exceto a primeira
for (let i = 1; i < questions.length; i++) {
  questions[i].style.display = 'none';
}
document.getElementById('next').addEventListener('click', showNextQuestion);
document.getElementById('submit').addEventListener('click', showResult);

function showNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    questions[currentQuestionIndex].style.display = 'none';
    currentQuestionIndex++;
    questions[currentQuestionIndex].style.display = 'block';

    if (currentQuestionIndex === questions.length - 1) {
      document.getElementById('submit').classList.remove('hidden');
      document.getElementById('next').classList.add('hidden');
    }
  }
}

document.getElementById('submit').addEventListener('click', showResult);

var startButton = document.getElementById('start');
var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var imageQuiz = document.getElementById('imgquiz')

startButton.addEventListener('click', function () {
  startButton.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  imageQuiz.classList.add('hidden');
});

// Quando o botão "Começar" for clicado
document.getElementById("start").addEventListener("click", function() {
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("next-question").classList.remove("hidden");
  document.getElementById("start").style.display = "none";
});


submitButton.addEventListener('click', function() {
  quizContainer.classList.add('hidden');
  showResult();
});


function showResult() {
  var resultContainer = document.getElementById('result');
  var resultText = document.getElementById('result-text');

  // Lógica para calcular e exibir o resultado do quiz

  resultContainer.classList.remove('hidden');
}

function showResult() {
  // Obter as respostas selecionadas
  const q1Answer = document.querySelector('input[name="q1"]:checked').value;
  const q2Answer = document.querySelector('input[name="q2"]:checked').value;
  const q3Answer = document.querySelector('input[name="q3"]:checked').value;
  const q4Answer = document.querySelector('input[name="q4"]:checked').value;
  // Adicione mais respostas aqui conforme necessário
    
  // Avaliar as respostas e exibir o resultado correspondente
  let resultText = '';
  let resultImage = '';

  if (q1Answer === 'pequena' || q3Answer === 'colorido') {
    resultText = 'A coleção VERÃO é a ideial para você!';
    resultImage = 'imagem1.jpg';
  } else if (q1Answer === 'sacola' || q3Answer === 'claro') {
    resultText = 'A coleção PRIMAVERA é a ideial para você!';
    resultImage = 'imagem2.jpg';
  } else if (q1Answer === 'mochila' || q3Answer === 'colorido') {
    resultText = 'A coleção INVERNO é a ideial para você!';
    resultImage = 'imagem3.jpg';
  }  else if (q1Answer === 'media' || q3Answer === 'estampado') {
    resultText = 'A coleção OUTONO é a ideial para você.';
    resultImage = 'imagem4.jpg';
  }


  // Exibir o resultado
  document.getElementById('result-text').textContent = resultText;
  document.getElementById('result-image').src = resultImage;

  // Mostrar a seção de resultado
  document.getElementById('result').style.display = 'block';
}