function calcularAreaTriangulo(base, altura){
    return (base * altura)/2
}

function calcularAreaRetangulo(base, altura){
    return base * altura
}

function calcularAreaQuadrado(lado){
    return lado * lado
}

function calcularAreaTrapezio(baseMaior,baseMenor, altura){
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo(raio){
    return 3.14 * (raio * raio)
}

let menu = parseInt(prompt("Qual figura geometrica você deseja calcular?" +"\n1. Triângulo" + "\n2. Retângulo" + "\n3. Quadrado" + "\n4. Trapézio" + "\n5. Circulo" + "\n6. Sair"))
do{
    switch(menu){
        case 1:
            let baseT = parseFloat(prompt("Digite a base do triângulo: "))
            let alturaT = parseFloat(prompt("Digite a altura do triângulo: "))
            alert("A área do triângulo de base " + baseT + " e de altura " + alturaT + " é de : "+ calcularAreaTriangulo(baseT,alturaT))
            menu = parseInt(prompt("Qual figura geometrica você deseja calcular?" +"\n1. Triângulo" + "\n2. Retângulo" + "\n3. Quadrado" + "\n4. Trapézio" + "\n5. Circulo" + "\n6. Sair"))
            break
        case 2:
            let baseR = parseFloat(prompt("Digite a base do retângulo: "))
            let alturaR = parseFloat(prompt("Digite a altura do retângulo: "))
            alert("A área do retângulo de base " + baseR + " e de altura " + alturaR + " é de : "+ calcularAreaRetangulo(baseR,alturaR))
            menu = parseInt(prompt("Qual figura geometrica você deseja calcular?" +"\n1. Triângulo" + "\n2. Retângulo" + "\n3. Quadrado" + "\n4. Trapézio" + "\n5. Circulo" + "\n6. Sair"))
            break
        case 3:
            let lado = parseFloat(prompt("Digite a base do quadrado: "))
            alert("A área do quadrado de lado " + lado + " é de: "+ calcularAreaQuadrado(lado))
            menu = parseInt(prompt("Qual figura geometrica você deseja calcular?" +"\n1. Triângulo" + "\n2. Retângulo" + "\n3. Quadrado" + "\n4. Trapézio" + "\n5. Circulo" + "\n6. Sair"))
            break
        case 4:
            let baseMaior = parseFloat(prompt("Digite a base maior do trapezio: "))
            let baseMenor = parseFloat(prompt("Digite a base menor do trapezio: "))
            altura = parseFloat(prompt("Digite a altura do trapézio: "))
            alert("A área do trapézio de base maior sendo " + baseMaior +", e base menor sendo "+ baseMenor + " e de altura " + altura + " é de : "+ calcularAreaTrapezio(baseMaior,baseMenor, altura))
            menu = parseInt(prompt("Qual figura geometrica você deseja calcular?" +"\n1. Triângulo" + "\n2. Retângulo" + "\n3. Quadrado" + "\n4. Trapézio" + "\n5. Circulo" + "\n6. Sair"))
            break
        case 5:
            let raio = parseFloat(prompt("Digite o raio do circulo: "))
            alert("A área do circulo de raio " + raio + " é de : "+ calcularAreaCirculo(raio))
            menu = parseInt(prompt("Qual figura geometrica você deseja calcular?" +"\n1. Triângulo" + "\n2. Retângulo" + "\n3. Quadrado" + "\n4. Trapézio" + "\n5. Circulo" + "\n6. Sair"))
            break
    }
}while(menu !== 6)
