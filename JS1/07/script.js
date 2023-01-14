let pacientes = ["Matheus","Marcos","Arthur","Gabriel","Lucas","Maria","Beatriz"]

let opcao = parseInt(prompt("Digite uma opção: "+
"1. Adicionar paciente" +
"2. Consultar paciente" +
"3. Sair"))

switch(opcao){
    case 1:
        let novoPaciente = prompt("Digite o nome no novo paciente")
        pacientes.push(novoPaciente)
        opcao = parseInt(prompt
        ("Digite uma opção:" +
            "\n 1. Adicionar paciente\n" +
            "\n 2. Consultar paciente\n" +
            "\n 3. Sair"))
        break
    case 2:
        alert("O paciente "+ pacientes[0] + "foi consultado.")
        pacientes.shift()
        opcao = parseInt(prompt("Digite uma opção: "+
        "1. Adicionar paciente" +
        "2. Consultar paciente" +
        "3. Sair"))
        break
}
    