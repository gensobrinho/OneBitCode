const valor = parseFloat(prompt("Digite um valor em metros: "));
const unidade = prompt(
    "Digite a opção de qual medida você quer converter: \n 1 - milimetro(mm) \n 2 - centímetro(cm) \n 3 - decímetro (dm) \n 4 - decâmetro(dam)\n 5 - hectômetro (hm)\n 6 - quilômetro  ")

switch(unidade){
    case "1":
        alert("Medida convertida: " + valor * 1000 + "mm");
        break
    case "2":
        alert("Medida convertida: " + valor * 100 + "cm")
        break
    case "3":
        alert("Medida convertida: " + valor * 10 + "dm")
        break
    case "4":
        alert("Medida convertida: " + valor /  10 + "dam")
        break
    case "5":
        alert("Medida convertida: " + valor / 100 + "hm")
        break
    case "6":
        alert("Medida convertida: " + valor / 1000 + "km")
        break
    default:
        alert("Opção invalida")
}