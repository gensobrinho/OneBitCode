let cartas = ["Zap"]

let menu = parseInt(prompt("Cartas disponiveis: " + cartas + "\n 1.Adicionar uma carta" + "\n 2.Puxar uma carta" + "\n 3. Sair."))

switch(menu){
    case 1: 
        let newCard = prompt("Digite uma nova carta: ")
        cartas.unshift(newCard)
        menu = parseInt(prompt("Cartas disponiveis: " + cartas + "\n 1.Adicionar uma carta" + "\n 2.Puxar uma carta" + "\n 3. Sair."))
    case 2:
        let cartaPuxada = cartas.shift()
        alert("Carta retirada: " + cartaPuxada)
        menu = parseInt(prompt("Cartas disponiveis: " + cartas + "\n 1.Adicionar uma carta" + "\n 2.Puxar uma carta" + "\n 3. Sair."))
    case 3:
        break
}