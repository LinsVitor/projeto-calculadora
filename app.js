const botoes = document.querySelectorAll(".teclado_filho"); // variável que captura todos botões do html usando a classe
let tela = document.getElementById("tela"); // variável para atualizar a tela
let expressao = []; // variável que armazenar a operação

// capturar os botões correto e seus valores
function teclas() {
        botoes.forEach(botao => {
        botao.addEventListener("click", (evento) => {
            const botaoId = botao.dataset.id;
            const valor = tela.textContent;
            const numero = Number(valor);

            switch (botaoId) {
                case '0':
                    if (numero === 0) {
                        tela.innerHTML = 0;
                    }else {
                        expressao.push(0);
                        atualizarTela()
                    }
                    break;
                case '1':
                    if (numero === 0) {
                        tela.innerHTML = 1;
                        expressao.push(1);
                    }else {
                        expressao.push(1);
                        atualizarTela()
                    }
                    break;
                case '2':
                    if (numero === 0) {
                        tela.innerHTML = 2;
                        expressao.push(2);
                    }else {
                        expressao.push(2);
                        atualizarTela()
                    }
                    break;
                case '3':
                    if (numero === 0) {
                        tela.innerHTML = 3;
                        expressao.push(3);
                    }else {
                        expressao.push(3);
                        atualizarTela()
                    }
                    break;
                case '4':
                    if (numero === 0) {
                        tela.innerHTML = 4;
                        expressao.push(4);
                    }else {
                        expressao.push(4);
                        atualizarTela()
                    }
                    break;
                case '5':
                    if (numero === 0) {
                        tela.innerHTML = 5;
                        expressao.push(5);
                    }else {
                        expressao.push(5);
                        atualizarTela()
                    }
                    break;
                case '6':
                    if (numero === 0) {
                        tela.innerHTML = 6;
                        expressao.push(6);
                    }else {
                        expressao.push(6);
                        atualizarTela()
                    }
                    break;
                case '7':
                    if (numero === 0) {
                        tela.innerHTML = 7;
                        expressao.push(7);
                    }else {                       
                        expressao.push(7);
                        atualizarTela()
                    }
                    break;
                case '8':
                    if (numero === 0) {
                        tela.innerHTML = 8;
                        expressao.push(8);
                    }else {
                        expressao.push(8);
                        atualizarTela()
                    }
                    break;
                case '9':
                    if (numero === 0) {
                        tela.innerHTML = 9;
                        expressao.push(9);
                    }else {
                        expressao.push(9);
                        atualizarTela()
                    }
                    break;   
            }
        });
    });
}

// capturar as operações.
function operacoes() {
    botoes.forEach(botao => {
    botao.addEventListener("click", (evento) => {
        const botaoId = botao.dataset.id;

        switch(botaoId) {
            case "%":
                if (expressao[expressao.length - 1] != "%" && isNaN(expressao[expressao.length - 1]) == false) {
                    expressao.push("%");
                    atualizarTela();
                }
                break;
            case "ce":
                console.log(expressao);
                break;
            case "c":
                expressao = [];
                atualizarTela();
                break;
            case "limpar":
                 if (expressao.length > 0) {
                    tela.innerHTML = "";
                    expressao.pop();
                    if (expressao.length == 0) {
                        tela.innerHTML = 0;
                    }else {
                        expressao.forEach(numero => {
                        tela.innerHTML += numero;
                    });
                    }
                 }
                break;
            case "meio":
                break;
            case "potencia":
                break;
            case "raiz":
                break;
            case "divisao":
                if (expressao[expressao.length - 1] != "/" && isNaN(expressao[expressao.length - 1]) == false) {
                    expressao.push("/");
                    atualizarTela();
                }
                break;
            case "x":
                if (expressao[expressao.length - 1] != "x" && isNaN(expressao[expressao.length - 1]) == false) {
                    expressao.push("*");
                    atualizarTela();
                }
                break;
            case "-":
                if (expressao[expressao.length - 1] != "-" && isNaN(expressao[expressao.length - 1]) == false) {
                    expressao.push("-");
                    atualizarTela();
                }
                break;
            case "+":
                if (expressao[expressao.length - 1] != "+" && isNaN(expressao[expressao.length - 1]) == false) {
                    expressao.push("+");
                    atualizarTela();
                }
                break;
            case "maisOuMenos":
                break;
            case "virgula":
                if (expressao[expressao.length - 1] != "." && isNaN(expressao[expressao.length - 1]) == false) {
                    expressao.push(".");
                    atualizarTela();
                }
                break;                 
        }   
    });
    });
}

// realizar as operações seguindo a regra de prioridade da matemática
function calcularExpresao () {

}

// função para manter a tela do usuário atualizada
function atualizarTela() {
    tela.innerHTML = "";
    if (expressao.length > 0) {
        expressao.forEach(numero => {
            tela.innerHTML += numero;
        });
    }else {
        tela.innerHTML = 0;
    }
}

function resultado() {
    const resultado = eval(tela.textContent);
    tela.innerHTML = resultado;
}

teclas();
operacoes();
