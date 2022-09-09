// Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos 
// chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no 
// projeto através das semanas. Pode ser qualquer coisa que possa ser descrita com 
// características escritas.
//Tema escolhido: "Avatar: A Lenda de Aang"

// 1. Para o item que você decidiu, pense nas características que são importantes para 
// construí-lo. Vamos usar estas características para definir exemplos destes objetos usando 
// o código.
// Você precisará criar pelo menos:
//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;

// Recomendamos, pensando no futuro, que você também pense em dados que podem receber 
//múltiplos valores de uma só vez. 
// Não vamos usar estes dados até mais pra frente, mas é legal já ter uma ideia.

const titulo = "Avatar: A Lenda de Aang" //String
const temporadas = Number(3) //Number
const anoLancamento = Number(2005) //Number
const episodiosPorTemporada = [20, 20, 21] //Array de Number
const isNickelodeon = true //boolean

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você 
// definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados 
// diferentes.

const temp1 = "Livro Um: Água"
const integrantes1 = Number(5) //integrantes da equipe principal: Juntamente com animais
const maisDe20Episodios1 = false

const temp2 = "Livro dois: Terra"
const integrantes2 = Number(6) //integrantes da equipe principal: Incluida personagem "Toph"
const maisDe20Episodios2 = false

const temp3 = "Livro três: Fogo"
const integrantes3 = Number(7) //integrantes da equipe principal: Incluida personagem "Zuko"
const maisDe20Episodios3 = true

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
// Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// A média deve ser igual à soma dos itens, dividida pelo total de itens.

const mediaIntegrantes = (integrantes1 + integrantes2 + integrantes3) / 3
console.log("A média de integrantes do grupo principal para as 3 temporadas é:", mediaIntegrantes)

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos 
// os valores de variáveis booleanas criadas até aqui são verdadeiras.

const maisDe20Episodios = maisDe20Episodios1 && maisDe20Episodios2 && maisDe20Episodios3
console.log("É", maisDe20Episodios, "que todas as temporadas têm mais de 20 episódios")

// 5. Crie pelo menos mais uma característica para o item que você criou. 
// Esta característica deve ser um array. Mantenha o tipo de dado do array criado 
// sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const nomeIntegrantes1 = ["Aang", "Katara", "Sokka", "Appa", "Momo"]
const nomeIntegrantes2 = ["Aang", "Katara", "Sokka", "Appa", "Momo", "Toph"]
const nomeIntegrantes3 = ["Aang", "Katara", "Sokka", "Appa", "Momo", "Toph", "Zuko"]

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um 
// dos itens criados até aqui
//   a. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS.

console.log(temp1.toUpperCase())
console.log("Número de integrantes da equipe principal:", integrantes1)
console.log("Há mais de 20 episódios na temporada?", maisDe20Episodios1)
console.log("Os", integrantes1, "integrantes principais são: " + nomeIntegrantes1[0] + ", " + nomeIntegrantes1[1] + ", " + nomeIntegrantes1[2] + ", " + nomeIntegrantes1[3] + " e " + nomeIntegrantes1[4] + ".")

console.log(temp2.toUpperCase())
console.log("Número de integrantes da equipe principal:", integrantes2)
console.log("Há mais de 20 episódios na temporada?", maisDe20Episodios2)
console.log("Os", integrantes2, "integrantes principais são: " + nomeIntegrantes2[0] + ", " + nomeIntegrantes2[1] + ", " + nomeIntegrantes2[2] + ", " + nomeIntegrantes2[3] + ", " + nomeIntegrantes2[4] + " e " + nomeIntegrantes2[5] + ".")

console.log(temp3.toUpperCase())
console.log("Número de integrantes da equipe principal:", integrantes3)
console.log("Há mais de 20 episódios na temporada?", maisDe20Episodios3)
console.log("Os", integrantes3, "integrantes principais são: " + nomeIntegrantes3[0] + ", " + nomeIntegrantes3[1] + ", " + nomeIntegrantes3[2] + ", " + nomeIntegrantes3[3] + ", " + nomeIntegrantes3[4] + ", " + nomeIntegrantes3[5] + " e " + nomeIntegrantes3[6] + ".")
