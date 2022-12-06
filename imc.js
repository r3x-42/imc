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

nombre = prompt("Informe su nombre")
pesoInforme = prompt(nombre + ", Informe su peso")
alturaInforme = prompt(nombre + ", Informe su altura")

imcCalculado = calcularImc(pesoInforme,alturaInforme)

imprimir(nombre + ", su imc calculado es: " + Math.round(imcCalculado))