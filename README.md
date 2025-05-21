# 🧠 Backend - Cadastro de Usuários com Node.js + Prisma + MongoDB

Este projeto é o **backend da aplicação de cadastro de usuários**, construído com **Node.js**, **Express** e **Prisma ORM**, utilizando **MongoDB como banco de dados**.

> ⚠️ Atenção: o projeto está configurado para conectar em um **MongoDB de testes**. Para rodar com seu próprio banco, você precisa alterar o arquivo `.env`. Detalhes abaixo.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- MongoDB
- Cors
- Nodemon

---

## 📦 Como rodar o projeto localmente

```bash
### 1. Clone o repositório

```bash
git clone https://github.com/AlbertFreitas/NODE.JS-CADASTRO-USUARIOS.git
cd NODE.JS-CADASTRO-USUARIOS 
2. Instale as dependências
npm install 

3. Configure seu banco no arquivo .env
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/nomeDoBanco?retryWrites=true&w=majority"

4. Gere os arquivos do Prisma
npx prisma generate

5. Inicie o servidor
npm run dev *Servidor rota 3000

📬 Rotas da API
Método	Rota	Descrição
GET	/usuarios	Lista todos os usuários
POST	/usuarios	Cria um novo usuário
DELETE	/usuarios/:id	Deleta um usuário pelo ID
```
🌐 Conexão com o Frontend
Este backend foi desenvolvido para se integrar com o frontend React disponível aqui:
👉 https://github.com/AlbertFreitas/Cadastro-Usuario-React

👤 Autor
Feito por Albert Freitas
GitHub | LinkedIn

 
