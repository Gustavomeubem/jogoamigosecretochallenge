// Array para armazenar os nomes inseridos pelo usuário
let amigos = [];

// Função para adicionar nomes à lista
function adicionarAmigo() {
    const inputName = document.getElementById('amigo'); // Pega o elemento de input
    const nome = inputName.value.trim(); // Pega o valor do campo de input e remove espaços

    // Verifica se o campo está vazio
    if (nome === '') {
        alert("Por favor, digite um nome antes de adicionar.");
        return; // Retorna para evitar a execução do resto da função
    }

    // Só adiciona o nome se não estiver vazio e não for duplicado
    if (!amigos.includes(nome)) {
        amigos.push(nome); // Adiciona o nome ao array
        inputName.value = ''; // Limpa o campo de input
        renderListaAmigos(); // Atualiza a lista na interface
    }
}

// Função para renderizar a lista de amigos
function renderListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Pega o elemento <ul>
    listaAmigos.innerHTML = ''; // Limpa a lista antes de renderizar novamente

    amigos.forEach(amigo => {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = amigo; // Define o nome como texto do <li>
        listaAmigos.appendChild(li); // Adiciona o <li> na <ul>
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Adicione pelo menos 1 amigo para realizar o sorteio.");
        return;
    }

    // Seleciona aleatoriamente um nome da lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o amigo sorteado na lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    const li = document.createElement('li');
    li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);
}
