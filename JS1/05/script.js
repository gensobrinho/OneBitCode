let total = parseFloat(prompt("Digite a quantidade inicial de dinheiro disponível: "))
let acao = parseInt(prompt("Quantidade de dinheiro disponivel: "+ "R$ " +total + "\n Deseja adicionar ou remover dinheiro ou sair? \n (1 - Adicionar / 2 - Remover /3 - Sair"))
do{
    if(acao === 1){
        let newAmount = parseFloat(prompt("Digite a quantidade de dinheiro que você deseja adicionar: "))
        total += newAmount
        acao = parseInt(prompt("Saldo disponivel: "+ "R$ " + total +"\n .1 - Adicionar \n2.Remover \n3.Sair"))
    }
    if(acao === 2){
        let newAmount = parseFloat(prompt("Digite a quantidade de dinheiro que você deseja adicionar: "))
        total -= newAmount
        acao = parseInt(prompt("Saldo disponivel: "+ "R$ " + total +"\n .1 - Adicionar \n2.Remover \n3.Sair"))
    } 

}while(acao !== 3)
