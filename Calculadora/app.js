(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Adicionando eventos de clique aos botões numéricos
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;  // Obtém o valor do botão clicado
            screen.value += value; // Concatena o valor ao campo de entrada
        });
    });

    // Adicionando evento ao botão de igual
    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = '';  // Mantém a tela vazia se não houver expressão
        } else {
            try {
                // Verifica se a expressão contém apenas caracteres válidos
                let expression = screen.value.replace(/[^0-9+\-*/().]/g, '');
                let answer = eval(expression);  // Tenta calcular a expressão
                screen.value = answer; // Mostra a resposta
            } catch (error) {
                // Caso ocorra erro na avaliação (expressão inválida), exibe 'Erro'
                screen.value = 'Erro';
            }
        }
    });

    // Adicionando evento ao botão de limpar
    clear.addEventListener('click', function(e) {
        screen.value = '';  // Limpa o campo de entrada
    });

})();
