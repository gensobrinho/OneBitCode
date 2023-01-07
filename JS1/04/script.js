const nome = prompt("Qual seu nome?")
let visita = confirm("Já visitou uma cidade?")
let cidade = ""
let contador = 0
while(visita === true){
    cidade = cidade + prompt("Qual cidade você visitou?") + ","
    visita = confirm("Já visitou uma cidade?")
    contador++
}
alert("O turista "  + nome + " visitou " + contador + " cidades, e foram elas: " + cidade)
