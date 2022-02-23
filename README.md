# Trabalho Banco de Dados - MySQL

Desenvolvedores:

Gabriel Fernandes Silva
Pedro Henrique Almeida Cardoso Reis

## Como compilar o projeto

### Pré-Requisitos

Pacotes que devem estar instalados

Docker Compose
NodeJs

### Backend

O container da aplicação node vai rodar na porta 3333 e o container do banco de dados MySQL vai rodar na porta 3306

```
cd backend && yarn && docker-compose up --build
```

### Frontend

A aplicação ReactJS vai rodar na porta 3000. Para acessar bastar colar esse link na url do browser http://localhost:3000

```
cd frontend && yarn && yarn start
```
