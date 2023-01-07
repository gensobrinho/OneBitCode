let word = prompt("Digite uma palavra")
let reverseWord = ""
for(let i = word.length ; i !== 0 ; i--){
    reverseWord += word[i-1]
}

if(word === reverseWord){
    alert("Essa palavra é um palíndromo")
}

else{
    alert("Essa palavra não é um palíndromo." +
    "\n Palavra inicial: " + word + 
    "\n Palavra inversa: " + reverseWord)
}


//arara