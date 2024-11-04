const questions = [
    {
        question: "Qual linguagem é usada para estilizar páginas web?",
        answers: ["HTML", "CSS", "JavaScript", "Python"],
        correct: "CSS"
    },
    {
        question: "O que significa HTML?",
        answers: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink Text Markup Language", "None of the above"],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "O que é um host?",
        answers: ["Um computador conectado a uma rede", "Um tipo de software", "Um protocolo", "Uma linguagem de programação"],
        correct: "Um computador conectado a uma rede"
    },
    {
        question: "O que significa CSS?",
        answers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "Qual protocolo é usado para transferir páginas web?",
        answers: ["HTTP", "FTP", "SMTP", "TCP"],
        correct: "HTTP"
    },
    {
        question: "JavaScript é usado para?",
        answers: ["Desenvolvimento web", "Desenho gráfico", "Processamento de texto", "Gerenciamento de banco de dados"],
        correct: "Desenvolvimento web"
    },
    {
        question: "Qual é a função do DNS na internet?",
        answers: ["Traduzir nomes de domínio em endereços IP", "Enviar e-mails", "Hospedar sites", "Gerenciar redes"],
        correct: "Traduzir nomes de domínio em endereços IP"
    },
    {
        question: "O que é um firewall?",
        answers: ["Um sistema de segurança de rede", "Um tipo de malware", "Uma ferramenta de programação", "Um servidor web"],
        correct: "Um sistema de segurança de rede"
    },
    {
        question: "O que significa URL?",
        answers: ["Uniform Resource Locator", "Uniform Resource Link", "Universal Resource Locator", "Universal Resource Link"],
        correct: "Uniform Resource Locator"
    },
    {
        question: "Qual é a principal linguagem de marcação para criar páginas web?",
        answers: ["HTML", "CSS", "JavaScript", "PHP"],
        correct: "HTML"
    }
];

let currentQuestion = 0;
let correctAnswers = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const responseElement = document.getElementById("response");

    questionElement.innerText = questions[currentQuestion].question;
    answersElement.innerHTML = "";
    responseElement.innerText = "";
    responseElement.style.backgroundColor = ""; // Reset background color
    responseElement.style.color = ""; // Reset text color

    questions[currentQuestion].answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = checkAnswer;
        answersElement.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.innerText;
    const correctAnswer = questions[currentQuestion].correct;
    const responseElement = document.getElementById("response");

    if (selectedAnswer === correctAnswer) {
        responseElement.innerText = "Correto!";
        responseElement.style.backgroundColor = "green";
        responseElement.style.color = "white";
        correctAnswers++;
    } else {
        responseElement.innerText = "Incorreto! A resposta correta é: " + correctAnswer;
        responseElement.style.backgroundColor = "red";
        responseElement.style.color = "white";
    }

    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        const questionElement = document.getElementById("question");
        const answersElement = document.getElementById("answers");
        const responseElement = document.getElementById("response");
        const nextButton = document.getElementById("next-button");

        questionElement.innerText = `Parabéns! Você acertou ${correctAnswers} de ${questions.length} perguntas.`;
        answersElement.innerHTML = '<button onclick="restartQuiz()">Reiniciar Quiz</button>';
        responseElement.innerText = "";
        responseElement.style.backgroundColor = ""; // Remove the background color
        responseElement.style.color = ""; // Reset text color
        nextButton.style.display = "none"; // Hide the next button
    }
}

function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    loadQuestion();
}

loadQuestion();

document.getElementById("next-button").addEventListener("click", nextQuestion);
