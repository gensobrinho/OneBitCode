let nomeAtacante = prompt("Digite o nome do atacante")
let poderDeAtaque = parseFloat(prompt("Digite o poder de ataque do atacante"))

let nomeDefensor = prompt("Digite o nome do defensor")
let hp = parseFloat(prompt("Digite a quantidade de HP do defensor"))
let poderDeDefesa = parseFloat(prompt("Digite o poder de defesa do defensor"))
let escudo = confirm("Possui um escudo?")

let danoCausado

if(poderDeAtaque > poderDeDefesa && escudo === false)
    danoCausado = poderDeAtaque - poderDeDefesa
if(poderDeAtaque > poderDeDefesa && escudo === true)
    danoCausado = (poderDeAtaque - poderDeDefesa)/2;
if(poderDeAtaque <= poderDeDefesa)
    danoCausado = 0;

alert("O dano causado por "+nomeAtacante+" em "+nomeDefensor+" foi de: "+danoCausado);