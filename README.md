---

# **Amigo Secreto - Projeto**

## Descrição:
Este projeto é uma aplicação web simples para realizar um sorteio de "Amigo Secreto". O usuário pode adicionar os nomes de seus amigos à lista e, ao clicar no botão de "Sortear amigo", o sistema escolhe aleatoriamente um nome da lista para o sorteio. Se o nome não for inserido ao clicar no botão de "Adicionar", o sistema mostrará um alerta informando ao usuário para digitar um nome.

## Funcionalidades:
1. **Adicionar Amigos**: O usuário pode digitar o nome de um amigo no campo de texto e clicar no botão "Adicionar". O nome será adicionado à lista se não estiver vazio e não for repetido.
2. **Alerta de Nome Vazio**: Se o campo de nome estiver vazio ao clicar no botão "Adicionar", será exibido um alerta solicitando que o usuário insira um nome.
3. **Sortear Amigo**: Após adicionar os amigos, o usuário pode clicar no botão "Sortear amigo" para escolher um nome aleatório da lista.
4. **Exibição de Resultados**: O nome sorteado é exibido em uma lista de resultados abaixo do botão "Sortear amigo".

## Estrutura do Projeto:
O projeto é composto pelos seguintes arquivos:

1. **index.html**: Arquivo HTML que contém a estrutura da página.
2. **app.js**: Arquivo JavaScript responsável pela lógica de adicionar nomes à lista e realizar o sorteio.
3. **style.css** (opcional): Arquivo CSS para estilizar a página.

## Como Usar:

1. **Baixar ou Clonar o Projeto:**
   - Para utilizar este projeto, baixe os arquivos ou clone o repositório com o seguinte comando:
     ```
     git clone <URL_do_repositório>
     ```

2. **Abrir o Arquivo HTML:**
   - Abra o arquivo `index.html` em um navegador para utilizar a aplicação.

3. **Adicionar Amigos:**
   - Digite o nome de um amigo no campo de texto e clique em "Adicionar". O nome será adicionado à lista se não estiver vazio e não for repetido.
   - Se o campo de nome estiver vazio, um alerta aparecerá solicitando que o nome seja preenchido.

4. **Sortear um Amigo Secreto:**
   - Depois de adicionar pelo menos um nome à lista, clique no botão "Sortear amigo" para realizar o sorteio. O nome sorteado será exibido abaixo.

## Tecnologias Usadas:
- **HTML**: Estrutura da página.
- **CSS**: Estilização da página (opcional, pode ser personalizado).
- **JavaScript**: Lógica para adicionar nomes à lista e realizar o sorteio.

## Exemplo de Estrutura de Arquivos:

```
/amigo-secreto
  ├── index.html     (Arquivo HTML)
  ├── app.js         (Arquivo JavaScript)
  └── style.css      (Arquivo de Estilo)
```

## Personalização:
- **Adicionar mais funcionalidades**: Você pode adicionar outras funcionalidades, como salvar os nomes em um arquivo ou permitir sorteios múltiplos para grupos grandes.
- **Estilos**: Edite o arquivo `style.css` para personalizar o layout e a aparência da página.

---
