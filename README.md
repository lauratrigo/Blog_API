# Blog API 📝

Esse é um projeto de **API de Blog** que desenvolvi para fins de estudo. O objetivo principal foi criar uma API simples e funcional utilizando **Fastify** e **Node.js**, permitindo operações de CRUD (criar, ler, atualizar e excluir) para posts de um blog, além de possibilitar comentários e curtidas.

## 🛠 Tecnologias Usadas 

- Node.js
- Fastify
- JavaScript

![Node.js Badge](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Fastify Badge](https://img.shields.io/badge/Fastify-00C4A7?logo=fastify&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-ES6-yellowgreen)

## 💡 Objetivo

O objetivo deste projeto é implementar uma API RESTful simples que permita a criação e gerenciamento de posts, além de possibilitar que os usuários possam comentar, curtir e excluir posts, com um sistema básico de autenticação.

## 🚀 Funcionalidades 

- **Listar posts**: Exibe todos os posts criados.
- **Criar post**: Cria um novo post informando o nome do usuário, o título e o conteúdo.
- **Comentar post**: Permite que os usuários comentem em posts existentes, com nome e conteúdo do comentário.
- **Curtir post**: Adiciona ou remove um like de um post.
- **Excluir post**: Exclui um post se o usuário for o dono do post.

## 📦 Como Rodar o Projeto

### Passo 1: Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/lauratrigo/Blog_API.git
cd Blog_API
```
### Passo 2: Instalar as Dependências

Instale as dependências do projeto utilizando o npm:

```bash
npm install
```
### Passo 3: Rodar o Servidor

Para rodar o servidor em modo de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
```
  O servidor será iniciado e ficará monitorando alterações nos arquivos para reiniciar automaticamente.

## 🔧 Endpoints

### `GET /posts`
Retorna a lista de todos os posts.

**Resposta**:
- Status: `200 OK`
- Corpo: Array de posts.

### `POST /posts`
Cria um novo post.

**Corpo da Requisição**:
```json
{
  "username": "Nome do Usuário",
  "title": "Título do Post",
  "content": "Conteúdo do Post"
}
```
**Resposta**:
- Status: `201 Created`
- Corpo: Objeto do novo post.

### `POST /posts/:id/comment`
Adiciona um comentário a um post.

**Parâmetro**:
- id: ID do post.

**Corpo da Requisição**:
```json
{
  "username": "Nome do Usuário",
  "content": "Conteúdo do Comentário"
}
```
**Resposta**:
- Status: `201 Created`
- Corpo: Objeto do post com o novo comentário.

### `PATCH /posts/:id/like`
Dá ou remove um like de um post.

**Parâmetro**:
- id: ID do post.

**Corpo da Requisição**:
```json
{
  "username": "Nome do Usuário"
}
```
**Resposta**:
- Status: `200 OK`
- Corpo: Objeto do post atualizado com a lista de likes.

### `DELETE /posts/:id`
Exclui um post.

**Parâmetro**:
- id: ID do post.

**Corpo da Requisição**:
```json
{
  "username": "Nome do Usuário"
}
```
**Resposta**:
- Status: `204 No Content`
- Corpo: Nenhum.

## 📂 Estrutura do Projeto

```
blog-api/
├── src/
│   ├── middlewares/
│   │   └── is-auth.js        # Middleware de autenticação
│   ├── routes/
│   │   └── posts.js          # Rotas dos posts
│   └── server.js             # Configuração do servidor Fastify
├── node_modules/             # Dependências do projeto
├── package.json              # Dependências e scripts
└── package-lock.json         # Lock de versões
```

## 🤝 Agradecimentos

Este projeto foi criado com base em um vídeo do YouTube, onde pude aprender as práticas de criação de uma API com **Fastify**. O objetivo principal foi praticar o uso de **Node.js** e **Fastify** em uma API RESTful.

Caso deseje contribuir, fique à vontade! Para sugestões e melhorias, você pode fazer um fork do repositório, criar uma branch com suas mudanças e enviar um pull request.

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

## 🎥 Créditos

Este projeto foi desenvolvido por Laura Trigo com base no vídeo [como criar uma API com Fastify e Node.js](https://www.youtube.com/watch?v=-zva6JKOWB8&list=PLdP0_O7ZLFU1ze1Lkg1aE8AilZ-_B2JOG&index=4).


