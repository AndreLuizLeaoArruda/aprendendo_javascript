//ESTE É O PRIMEIRO COMANDO, PARA EXIBIR UMA MENSAGEM NA TELA.
console.log('\nOlá meu povo!!! Cheguei\n')

//ESTA É A FORMA DE DECLARAR VARIÁVEIS, NÃO SE USA MAIS 'var'
let comidaPreferida = "Churrasco"
let segundaComida = "Maionese"

//AQUI, CONSEGUE-SE 'JUNTAR' PALAVRAS COM VARIÁVEIS, PERCEBA QUE ESTÃO CERCADOS POR CRASE (`)
console.log(`As minhas comidas preferidas são ${comidaPreferida} com ${segundaComida}.`)

//EXEMPLO DE OPERAÇÕES COM VARIÁVEIS
let valor1 = 14
let valor2 = 12
let diferenca = valor1 - valor2

//EXEMPLO DE VARIÁVEL CHAMADA BOOLEANA (VERDADEIRO OU FALSO)
let alegre = true

//EXEMPLO DE VARIÁVEL SEM VALOR
let semValor;

//EXEMPLO DE VARIÁVEL COM VALOR NULO
let valorNulo = null

console.log(alegre)
console.log('\n')

//DESCREVENDO OS TIPOS PRIMITIVOS DOS VALORES
console.log(`O tipo primitivo da variável diferenca é ${typeof diferenca}.`)
console.log(`O tipo primitivo da variável comidaPreferida é ${typeof comidaPreferida}.`)
console.log(`O tipo primitivo da variável alegre é ${typeof alegre}.`)
console.log(`O tipo primitivo da variável semValor é ${semValor}.`)
console.log(`O tipo primitivo da variável valorNulo é ${valorNulo}.`)

console.log("\nAo declarar uma variável usando a palavra-chave 'const', esta não poderá ser alterada.")

console.log('\n')
console.log(`A soma dos valores é igual a ${valor1 + valor2}.`)
console.log(`A diferença entre os dois valores é igual a ${diferenca}.`)

let calculo1 = 100 + 4 * 11
let calculo2 = (100 + 4) * 11

//EXEMPLO DE 'CONDIÇÃO'
if (calculo1 === calculo2) {
    resultado = ' é igual a '
} else {
    resultado = ' é diferente de '
}
console.log(`\n${calculo1 + resultado + calculo2}.`)
console.log(`\n100 + 4 * 11 ${resultado} (100 + 4) * 11.`)

//EXEMPLO DE COMO DESCOBRIR A SOBRA DE UMA DIVISÃO
let restante = 8 % 3
console.log(`\nA sobra da divisão de 8 por 3 é igual a: ${restante}.`)

//EXEMPLO SIMPLIFICADO DE SOMA DE NÚMERO
let soma = 4
soma+=2

console.log(`\nAo adicionarmos mais dois números ao 4, ele resulta em um: ${soma}.`)


let lampada = 'ligada'
let estadoLampada;

//MAIS UM EXEMPLO DE CONDIÇÃO
let num = 221
if (num%2 === 0) {
    mensagem = `\nO número ${num} é par.`
} else {
    mensagem = `\nO número ${num} é impar.`
}
console.log(mensagem)

//AGORA VAMOS ESTUDAR UM POUCO SOBRE ARRANJOS

const alunosTurma1 = [' André', ' Simão', ' Lucas', ' Judas Tadeu']
const alunosTurma2 = [' Baltasar', ' Belquior', ' Gaspar']

console.log(`\nAlunos matriculados na Turma 1: ${alunosTurma1}.`)
console.log(`Alunos matriculados na Turma 2: ${alunosTurma2}.`)
console.log(`O segundo aluno matriculado na Turma 1 foi:${alunosTurma1[1]}.`)

//Quando temos poucos registros, fica fácil adicionar um novo cadastro no último registro.
alunosTurma1[4] = ' José'
console.log(`\nLista atualizadas dos alunos da Turma 1: ${alunosTurma1}.`)

//Também é possível usar o comando length para indicar o próximo item
alunosTurma1[alunosTurma1.length] = ' João Batista'
console.log(`\nLista atualizada de alunos da Turma 1: ${alunosTurma1}.`)

//No entanto, se temos muitos registros, é preferível usar o push, que cadastrará no último registro.
alunosTurma2.push(' Tiago')
console.log(`Lista atualizada dos alunos da Turma 2: ${alunosTurma2}.`)

// José e Tiago foram trocados de sala
console.log ('\nOs alunos Tiago e José foram trocados de turma.')
alunosTurma1[4] = ' Tiago'
alunosTurma2[3] = ' José'
console.log(`Lista atualizadas dos alunos da Turma 1: ${alunosTurma1}.`)
console.log(`Lista atualizada dos alunos da Turma 2: ${alunosTurma2}.`)

console.log(`\nA Turma 1 tem ${alunosTurma1.length} alunos matriculados. \nIsso quer dizer que o último item está no índice ${alunosTurma1.length-1}. \nLembre-se que o índice começa do 0.`)
console.log(`\nA Turma 2 tem ${alunosTurma2.length} alunos matriculados. \nIsso quer dizer o último item está no índice ${alunosTurma2.length-1}. \nLembre-se que o índice começa do 0.`)

//Também é possível capturar uma determinada letra de uma string através do array, vamos ao exemplo:

let item = 'panela de pressão'
console.log(`\nVocê capturou a letra "${item[15]}" da variável item. \nLembre-se, novamente, que o índice começa do 0.`)

//AGORA VAMOS ESTUDAR UM POUCO SOBRE ESTRUTURA DE REPETIÇAO FOR
//Contagem regressiva.
console.log('\nContagem Regressiva:')
for (let index = 10; index >=1; index -= 1) {
    console.log(index)
}
console.log('\nContagem Progressiva')

//Contagem progressiva.
for (let index = 1; index <=10; index += 1) {
    console.log(index)
}

//VEJA COMO É FÁCIL COMPOR A TABUADA COMPLETA USANDO ESTRUTURAS DE REPETIÇÃO
console.log('\nTabuada Completa')
for (let index = 1; index <=10; index += 1) {
    console.log('\n')
    for (let index2 = 1; index2 <=10; index2 += 1) {
    console.log(`${index} X ${index2} = ${index*index2}`)
    }
}

//AGORA VAMOS ESTUDAR UM POUCO DE FUNÇÃO
//Função nada mais é que um conjunto de instruções, para evitar repetições

function Recepcao(nome, turma, professor) {
    const retorno = ' Olá ' + nome + '. Você está matriculado na Turma ' + turma + ' e hoje sua aula é com professor ' + professor
    return retorno
}
console.log('\n')
console.log(Recepcao('André', '1', 'Jorge'))
console.log(Recepcao('Paulo', '2', 'Jucelino'))

console.log(alunosTurma1)

let aluno = 'André'

let resultado2 = alunosTurma1.find(item => item.trim() === aluno.trim());

if (resultado2) {
    console.log(`O aluno ${aluno} foi encontrado.`)
} else {
    console.log(`O aluno ${aluno} não foi encontrado.`)
}

//MAIS UM EXEMPLO DE FUNÇÃO
function pedido(numero) {
    // Declarando variável sabor se desejar armazenar o sabor da pizza
    let sabor = '';

    // Verificando o número e definindo o sabor da pizza
    if (numero === 1) {
        sabor = 'Pizza Quatro Queijos';
    } else if (numero === 2) {
        sabor = 'Pizza Frango com Catupiry';
    } else if (numero === 3) {
        sabor = 'Pizza Calabresa';
    } else if (numero === 4) {
        sabor = 'Pizza de Tomate Seco com Rúcula';
    } else {
        sabor = 'Aguardando o pedido';
    }

    // Exibindo o sabor do pedido
    console.log(sabor);
}

// Chamando a função
pedido(1);  // Isso vai exibir "Pizza Quatro Queijos"

//MAIS UM EXEMPLO DE FUNÇÃO
function exemplo_simples() {
    let x = 10
    console.log(x)
}
exemplo_simples()

//AGORA VAMOS MOSTRAR COMO SOLICITAR A INTERVENÇÃO DO USUÁRIO
// É preciso instalar o módulo prompt-sync: npm install prompt-sync
//VAMOS USAR, TAMBÉM, A OPÇÃO DE REPETIÇÃO SWITCH-CASE

const prompt = require('prompt-sync')();

function pedido2(numero) {
    // Declarando variável sabor se desejar armazenar o sabor da pizza
    let sabor = numero

    switch (sabor) {
        case 1:
            console.log('Pedido Confirmado: Pizza de Quatro Queijos')
            break
        case 2:
            console.log('Pedido Confirmado: Pizza de Frango com Catupiry')
            break
        case 3:
            console.log('Pedido Confirmado: Pizza de Calabresa')
            break
        case 4: 
            console.log('Pedido Confirmado: Pizza de Tomate Seco com Rúcula')
            break
        default:
            console.log('Aguardando o pedido')
    }
}

//COMO A VARIÁVEL SOLICITADA PRECISA SER NUMÉRICA, É NECESSÁRIO O USO DO parseInt() para tal.
let escolha = parseInt(prompt ('Digite o número do pedido: '))
pedido2(escolha)

//EXEMPLO DE FUNÇÃO SIMPLIFICADA
const ola = () => console.log("Função com Sintaxe simplificada");

//EXEMPLO DE FUNÇÃO TRADICIONAL
function ola2() {
    console.log("Função com Sintaxe tradicional")
}

//RESULTADOS
ola()
ola2()