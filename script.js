const flashcards = [
    {
        question: "O SINARM é responsável por:",
        answer: "Identificar as características e a propriedade de armas de fogo, mediante cadastro."
    },
    {
        question: "È competência do SINARM",
        answer: "cadastrar as transferências de propriedade, extravio, furto, roubo e outras ocorrências suscetíveis de alterar os dados cadastrais."
    },
    {

        question: "Quem é responsável por realizar os testes de marcação e raiamento do cano da arma para cadastro no SINARM:",
        answer: " O fabricante da arma"
    },
    {

        question: "As disposições do SINARM, NÃO se aplicam a:",
        answer: "Armas de fogo das Forças Armadas."
    },
    {

        question: "O SINARM deve cadastrar quais das seguintes entidades?",
        answer: " Produtores, atacadistas, varejistas, exportadores e importadores autorizados de armas de fogo, acessórios e munições"
    },
    {

        question: "Sobre o Sistema Nacional de Armas – SINARM. De acordo com o Art. 3º, qual é a obrigação relacionada ao registro de armas de fogo?",
        answer: "O registro é obrigatório no órgão competente."
    },
    {

        question: "Sobre o Sistema Nacional de Armas – SINARM.   Onde devem ser registradas as armas de fogo de uso restrito:",
        answer: "No Comando do Exército, conforme o regulamento da Lei."
    },
    {

    question: "Sobre o Sistema Nacional de Armas – SINARM.  Qual é a forma de registro para armas de fogo de uso restrito?",
        answer: "Deve ser feito no Comando do Exército de acordo com regulamento específico"
    },
    {

        question: "Sobre o Sistema Nacional de Armas – SINARM. o registro de armas de fogo é obrigatório para:",
        answer: "Todas as armas de fogo, sem exceção."
    },
    {

        question: "MTP 01 - Qual é um dos objetivos do Código de Conduta para os Encarregados pela Aplicação da Lei (CCEAL)?",
        answer: "Estabelecer diretrizes para a conduta policial."
    },
    {

     question: "MTP 01 - Qual documento mencionado visa combater a tortura e outros tratamentos cruéis?",
        answer: "Convenção Contra a Tortura e outros Tratamentos ou Penas Cruéis, Desumanas ou Degradantes."
    },
    {

        question: "Qual é o principal desafio mencionado em relação à atividade policial-militar?",
        answer: "A complexidade da atividade policial-militar."
    },
    {

        question: "Sobre o Sistema Nacional de Armas – SINARM. O que é exigido para comprovar a ocupação e residência do interessado na aquisição de uma arma de fogo de uso permitido:",
        answer: "Documento comprovando a ocupação lícita e residência certa."
    },
    {

        question: "Sobre o Sistema Nacional de Armas – SINARM. As certidões negativas de antecedentes criminais podem ser fornecidas por:",
        answer: "Meios eletrônicos, conforme permitido."
    },
    {

        question: "MTP 01 - O que é considerado imprescindível na atuação da Polícia Militar, segundo o texto?",
        answer: "Respeitar princípios legais e éticos."
    },
    {

        question: "MTP 01 - O que torna cada ocorrência policial única, segundo o texto?",
        answer: "O conjunto de variáveis envolvidas."
    },
    {

        question: "MTP 01 - O que está diretamente relacionado à segurança do policial militar?",
        answer: "O preparo mental."
    },
    {

        question: "MTP 01 - Qual a importância do preparo mental no cotidiano operacional do policial militar?",
        answer: "É fundamental para a eficácia e segurança nas intervenções."
    },
    {

        question: "Sobre o Sistema Nacional de Armas – SINARM. Quem expede a autorização de compra de arma de fogo?",
        answer: " O Sinarm."
    },
    {
        question: "Sobre o Sistema Nacional de Armas – SINARM. A autorização de compra de arma de fogo É: ",
        answer: "Em nome do requerente e para a arma indicada, sendo intransferível."
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
