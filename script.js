const flashcards = [
    {
        question: "Com base na Lei 10.826/2003 - Dispõe sobre registro, posse e comercialização de armas de fogo e munição, sobre o Sistema Nacional de Armas – SINARM,  O SINARM é responsável por:",
        answer: "Identificar as características e a propriedade de armas de fogo, mediante cadastro."
    },
    {
        question: "Com base na Lei 10.826/2003 - Dispõe sobre registro, posse e comercialização de armas de fogo e munição, sobre o Sistema Nacional de Armas – SINARM,  È competência do SINARM",
        answer: "cadastrar as transferências de propriedade, extravio, furto, roubo e outras ocorrências suscetíveis de alterar os dados cadastrais."
    },
    {

        question: "Com base na Lei 10.826/2003 - Dispõe sobre registro, posse e comercialização de armas de fogo e munição, sobre o Sistema Nacional de Armas – SINARM. Quem é responsável por realizar os testes de marcação e raiamento do cano da arma para cadastro no SINARM:",
        answer: " O fabricante da arma"
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
