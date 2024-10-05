const flashcards = [
    {
        question: "Qual é o principal desafio mencionado em relação à atividade policial-militar?",
        answer: "A complexidade da atividade policial-militar."
    },
    {
        question: "O que se espera que os policiais militares demonstrem em suas atividades diárias, segundo o texto?",
        answer: "Disciplina militar e lealdade"
    },
    {

        question: "Porque é necessário estudar?",
        answer: "sem resposta"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

    question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

     question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é a capital do Brasil?",
        answer: "Brasília"
    },
    {

        question: "Qual é o maior planeta do sistema solar?",
        answer: "Júpiter"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        answer: "Machado de Assis"
    }
];

let currentCardIndex = 0;
let score = 0;

document.getElementById('show-answer').addEventListener('click', function() {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('answer').classList.remove('hidden');
});

document.getElementById('next-card').addEventListener('click', function() {
    score++;
    document.getElementById('score').innerText = `Flashcards vistos: ${score}`;
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    loadCard();
});

function loadCard() {
    document.getElementById('question').classList.remove('hidden');
    document.getElementById('answer').classList.add('hidden');
    document.getElementById('question').innerText = flashcards[currentCardIndex].question;
    document.getElementById('answer').innerText = flashcards[currentCardIndex].answer;
}

// Carregar o primeiro flashcard
loadCard();
