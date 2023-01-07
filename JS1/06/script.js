let num = parseInt(prompt("Digite um número: "))
let tabuada = ""

for(let i = 0; i <= 20; i++){
    tabuada += num * i + ","
}

alert("Resultado da tabuada: " + tabuada)