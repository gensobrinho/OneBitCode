let menu = parseInt(prompt("Digite uma das seguintes opções: " + "\n1. Cadastrar um imovel" + "\n2. Sair"))
let imoveis = []
let imovel = {}
do{
    switch(menu){
        case 1:
            imovel.proprietario = prompt("Digite o nome do proprietario")
            imovel.quartos = parseInt(prompt("Digite a quantidade de quartos"))
            imovel.banheiros = parseInt(prompt("Digite a quantidade de banheiros"))
            imovel.garagem = confirm("Possui garagem?")
            imoveis.push(imovel)
            alert("Imovel cadastrado")
            break
        default:
            alert("Opção invalida")
            break
    }
        
        menu = parseInt(prompt("Digite uma das seguintes opções: " + "\n1. Cadastrar um imovel" + "\n2. Sair"))
    }
while(menu !== 2)
