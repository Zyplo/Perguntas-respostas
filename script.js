// Declaração global da variável perguntas
var perguntas = document.querySelectorAll('.pergunta');

document.getElementById('verificarTodasRespostas').addEventListener('click', function () {
    verificarTodasRespostas();
});

function exibirMensagem(respostasCorretas, todasRespondidas) {
    var mensagemElement = document.getElementById('mensagemResposta');
    var pontuacaoElement = document.getElementById('pontuacao');

    mensagemElement.style.display = 'block';

    if (todasRespondidas) {
        var pontuacao = (respostasCorretas / perguntas.length) * 10; // Calcula a pontuação entre 0 e 10

        if (respostasCorretas === perguntas.length) {
            mensagemElement.textContent = 'Parabéns, você acertou todas as perguntas e obteve a pontuação máxima!';
            mensagemElement.className = 'respostaCorreta';
        } else if (pontuacao >= 5) {
            mensagemElement.textContent = 'Parabéns, você passou no teste!';
            mensagemElement.className = 'respostaCorreta';
        } else {
            mensagemElement.textContent = 'Infelizmente, você não passou no teste... Tente novamente';
            mensagemElement.className = 'invalido';
        }

        pontuacao = pontuacao.toFixed(1); // Limita a uma casa decimal
        pontuacaoElement.textContent = 'Pontuação: ' + pontuacao;
    } else {
        mensagemElement.textContent = 'Responda todas as perguntas antes de verificar.';
        mensagemElement.className = 'invalido';
        pontuacaoElement.textContent = 'Pontuação: 0';
    }
}


function contarRespostasCorretas() {
    var respostasCorretas = 0;
    var opcoes = document.querySelectorAll('.pergunta [type=radio][value=correta]:checked');

    opcoes.forEach(function (opcao) {
        if (opcao.checked) {
            respostasCorretas++;
        }
    });

    return respostasCorretas;
}

function verificarTodasRespostas() {
    var todasRespondidas = true;

    perguntas.forEach(function (pergunta) {
        var respostaSelecionada = pergunta.querySelector('[type=radio]:checked');

        if (!respostaSelecionada) {
            todasRespondidas = false;
        }
    });

    if (todasRespondidas) {
        var respostasCorretas = contarRespostasCorretas();
        exibirMensagem(respostasCorretas, todasRespondidas);
    } else {
        exibirMensagem(0, todasRespondidas);
    }
}
