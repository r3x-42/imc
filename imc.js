

function saltarLinea(){
    document.write("<br>")
}

function imprimir(frase){
    document.write(frase)
    saltarLinea()
}

function calcularImc(peso,altura){
    return peso / (altura * altura)
}


function devil(){
    const image1 = document.createElement('img')
    image1.src = 'https://plantillasdememes.com/img/plantillas/kien-io51580031386.png'

    const h3 = document.createElement('h3')
    h3.innerHTML = "Eres un alfeñique"

    document.querySelector('body').appendChild(image1)
    document.querySelector('body').append(h3)
}

function crustaceo(){
    const image2 = document.createElement('img')
    image2.width = 800
    image2.src = 'https://i.ytimg.com/vi/MjmH_oSbmvQ/maxresdefault.jpg'

    const h3 = document.createElement('h3')
    h3.innerHTML = "Eres un Crustaceo"

    document.querySelector('body').appendChild(image2)
    document.querySelector('body').append(h3)
}


var nombre = prompt("Informe su nombre")
var pesoInforme = prompt(nombre + ", Informe su peso")
var alturaInforme = prompt(nombre + ", Informe su altura")

var imcCalculado = calcularImc(pesoInforme,alturaInforme)

imprimir(nombre + ", su imc calculado es: " + Math.round(imcCalculado))

if(imcCalculado >= 18.5){

    if( imcCalculado < 25){

    devil()

    }   
}

if(imcCalculado >= 30 ){
    crustaceo()
}