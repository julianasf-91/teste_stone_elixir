const { productList } = require("./data")
const { mailList } = require("./data")

const totaltValue = productList.reduce((acc, element) => acc + element.unitPrice * element.quantity, 0) //faz a soma e multiplicação dos valores

const totalMail = mailList.length //tamanho do array mailList

const portion = totaltValue / totalMail //divide o valor total pela quantidade de emails
    
function result (arrayPortion, arrayMail) {
    let arrayPart = []
    for (let i = 0; i < arrayMail-1; i++) {
        arrayPart[i] =+ Math.ceil(arrayPortion); //arredonda a parte individual para cima
    }
    arrayPart.push(Math.floor(arrayPortion)) //arredonda a parte individual para baixo

    let chart = [{key: 'email', value: 'valor'}];

    for (let i = 0; i < arrayMail; i++) {
        decimal = arrayPart[i]/100 //converte em decimal
        chart[i] = {key:mailList[i], value:decimal.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}) } //insere no array
        
    }
    return console.table(chart)  
}

console.table(productList) //imprime a lista de produtos
console.table(mailList) //imprime a lista de emails
result(portion, totalMail) //imprime o mapa com os emails e valores (formatado em real) a serem pagos
