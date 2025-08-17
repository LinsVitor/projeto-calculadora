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
        const expressaoNormalizada = normalizarExpressao();

        switch(botaoId) {
            case "%":
                if (expressao[expressao.length - 1] != "%" && isNaN(expressao[expressao.length - 1]) == false) {
                    expressao.push("%");
                    atualizarTela();
                }
                break;
            case "ce":
                console.log(normalizarExpressao());
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
                const meio = 1 / expressaoNormalizada[0];
                expressao = [];
                expressao.push(meio);
                atualizarTela();
                break;
            case "potencia":
                const potencia = expressaoNormalizada[0]  ** 2;
                expressao = [];
                expressao.push(potencia);
                atualizarTela();
                break;
            case "raiz":
                const raiz = expressaoNormalizada[0] ** 0.5;
                expressao = [];
                expressao.push(raiz);
                atualizarTela();
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

function normalizarExpressao() {
    const tempExpressao = [];
    let temp = "";

    expressao.forEach(valor => {
            if (typeof valor == "number") {
                temp += String(valor);
            }else {
                tempExpressao.push(Number(temp));
                tempExpressao.push(valor);
                temp = "";
            }
        });
    tempExpressao.push(Number(temp))
    return tempExpressao;
}

// realizar as operações seguindo a regra de prioridade da matemática
function calcularExpresao() {
    let tempExpressao = [...expressao];
    let i = 0;

    // Primeiro, processa multiplicação e divisão
    while (i < tempExpressao.length) {
        if (tempExpressao[i] === "*" || tempExpressao[i] === "/") {
            const operador = tempExpressao[i];
            const operando1 = Number(tempExpressao[i - 1]);
            const operando2 = Number(tempExpressao[i + 1]);
            let resultado = operador === "*" ? operando1 * operando2 : operando1 / operando2;
            tempExpressao.splice(i - 1, 3, resultado);
            i = 0; // reinicia para processar novamente
        } else {
            i++;
        }
    }

    // Processa soma e subtração
    let resultado = Number(tempExpressao[0]);
    for (i = 1; i < tempExpressao.length; i += 2) {
        const operador = tempExpressao[i];
        const operando = Number(tempExpressao[i + 1]);
        if (operador === "+") resultado += operando;
        if (operador === "-") resultado -= operando;
    }

    expressao = [];
    expressao.push(resultado);
    atualizarTela();
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

teclas();
operacoes();