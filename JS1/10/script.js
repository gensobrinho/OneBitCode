const vagas = [];

let option = parseInt(
  prompt(
    "Digite uma das seguintes opções: " +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um candidato em uma vaga" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  )
);

do {
  switch (option) {
    case 1:
      verVagas();
      option = parseInt(
        prompt(
          "Digite uma das seguintes opções: " +
            "\n1. Listar vagas disponíveis" +
            "\n2. Criar uma nova vaga" +
            "\n3. Visualizar uma vaga" +
            "\n4. Inscrever um candidato em uma vaga" +
            "\n5. Excluir uma vaga" +
            "\n6. Sair"
        )
      );
      break;
    case 2:
      let name = prompt("Digite um nome para a vaga: ");
      let description = prompt("Digite a descrição da vaga: ");
      let date = prompt("Qual a data limite da vaga?");
      let confirmation = confirm("Confirmar dados?");
      if (confirmation === true) {
        criarVaga(name, description, date);
      }
      option = parseInt(
        prompt(
          "Digite uma das seguintes opções: " +
            "\n1. Listar vagas disponíveis" +
            "\n2. Criar uma nova vaga" +
            "\n3. Visualizar uma vaga" +
            "\n4. Inscrever um candidato em uma vaga" +
            "\n5. Excluir uma vaga" +
            "\n6. Sair"
        )
      );
      break;
    case 3:
      indice = parseInt(
        prompt("Digite o indice da vaga que deseja visualizar: ")
      );
      visualizarVaga(indice);
      option = parseInt(
        prompt(
          "Digite uma das seguintes opções: " +
            "\n1. Listar vagas disponíveis" +
            "\n2. Criar uma nova vaga" +
            "\n3. Visualizar uma vaga" +
            "\n4. Inscrever um candidato em uma vaga" +
            "\n5. Excluir uma vaga" +
            "\n6. Sair"
        )
      );
      break;
    case 4:
      if (vagas.length > 0) {
        let nomeCandidato = prompt("Digite o nome do candidato: ");
        indice = parseInt(
          prompt("Digite o indice da vaga que deseja inscreve-lo: ")
        );
        inscreverCandidato(nomeCandidato, indice);
      } else {
        alert("Não há vagas para inscrever");
      }
      option = parseInt(
        prompt(
          "Digite uma das seguintes opções: " +
            "\n1. Listar vagas disponíveis" +
            "\n2. Criar uma nova vaga" +
            "\n3. Visualizar uma vaga" +
            "\n4. Inscrever um candidato em uma vaga" +
            "\n5. Excluir uma vaga" +
            "\n6. Sair"
        )
      );
      break;

    case 5:
      indice = parseInt(prompt("Digite o indice da vaga que deseja excluir: "));
      excluirVaga(indice);
      option = parseInt(
        prompt(
          "Digite uma das seguintes opções: " +
            "\n1. Listar vagas disponíveis" +
            "\n2. Criar uma nova vaga" +
            "\n3. Visualizar uma vaga" +
            "\n4. Inscrever um candidato em uma vaga" +
            "\n5. Excluir uma vaga" +
            "\n6. Sair"
        )
      );
      break;
  }
} while (option !== 6);

function verVagas() {
  if (vagas.length > 0) {
    vagas.forEach((vaga) => {
      alert(
        "Nome da vaga: " +
          vaga.nome +
          "\nDescrição da vaga: " +
          vaga.descricao +
          "\nData limite: " +
          vaga.data +
          "\nIndice da Vaga " +
          vagas.indexOf(vaga) +
          "\nQuantidade de candidatos: " +
          vaga.candidatos.length
      );
    });
  } else {
    alert("Não há vagas cadastradas no sistema.");
  }
}

function criarVaga(name, description, date) {
  let vaga = {};
  vaga.nome = name;
  vaga.descricao = description;
  vaga.data = date;
  vaga.candidatos = [];

  vagas.push(vaga);
  return alert("Vaga Criada com sucesso");
}

function visualizarVaga(indice) {
  if (vagas.length > 0) {
    alert(
      "Nome da vaga: " +
        vagas[indice].nome +
        "\nDescrição da vaga: " +
        vagas[indice].descricao +
        "\nData limite: " +
        vagas[indice].data +
        "\nIndice da Vaga " +
        indice +
        "\nQuantidade de candidatos: " +
        vagas[indice].candidatos.length +
        "\nCandidatos inscritos: " +
        vagas[indice].candidatos
    );
  } else {
    alert("Não há vagas para visualizar");
  }
}

function inscreverCandidato(nome, indice) {
  vagas[indice].candidatos.push(nome);
  alert("Candidato inscrito.");
}

function excluirVaga(indice) {
  let aux = vagas[indice];
  if (vagas.length > 0) {
    vagas[indice] = vagas[vagas.length - 1];
    vagas[vagas.length - 1] = aux;
    vagas.pop();
    alert("A vaga: " + aux.name + "foi excluida.");
  } else {
    alert("Não existem vagas cadastradas.");
  }
}
