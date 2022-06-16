# SmartChoice
SmartChoice: o cardápio digital para uma escolha inteligente

## Sobre

O SmartChoice é um sistema web de cardápio digital. Ele possui duas URLs a do cliente e a do administrador.

- A URL do cliente permite que os clientes de um estabelecimento acessem, através da disponibilização de um QRCode impresso na mesa, a URL do cardápio contendo todos os itens disponibilizados pelo administrador do estabelecimento. Nessa URL o cliente também tem a possibilidade de compartilhar o cardápio clicando no botão de compartilhamento.

- A URL do administrador tem as funcionalidades de adicionar, editar e excluir itens do cardápio, informando o link da foto, o nome do item, o preço e uma descrição. As alterações realizadas nessa URL afetarão a URL do cliente.

## Tecologias e Ferramentas

- React
- TypeSript
- Node.js
- Git
- Axios
- Json-server
- React Router Dom
- React Icons
- React Modal
- React Web Share
- EditorConfig
- ESLint
- Prettier
- Visual Studio Code

## Executar o Projeto

```bash

# Clone este repositório
$ git clone git@github.com:danieladev/SmartChoice.git

# Acesse a pasta do projeto no terminal/cmd
$ cd SmartChoice

# Vá para a pasta
$ cd web

# Instale as dependências
$ npm install

# Execute o script da fake API
$ npm run json-server server.json -p 3333

# Abra outro terminal/cmd e acesse a pasta do projeto
$ cd SmartChoice

# Vá para a pasta
$ cd web

# Execute a aplicação na porta 3000
$ npm run start

```
