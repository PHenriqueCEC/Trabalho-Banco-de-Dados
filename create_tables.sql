-- CREATE DATABASE IfoodRU;
USE IfoodRU;

CREATE TABLE Usuario (
   cod int AUTO_INCREMENT, 
   nome varchar(100) NOT NULL,
   email varchar(200) UNIQUE NOT NULL,
   senha varchar(256), -- Hash da senha\Senha criptografada
   PRIMARY KEY (cod) 

);

CREATE TABLE Universitario (
    cod int AUTO_INCREMENT,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Usuario(cod)

);

CREATE TABLE Funcionario (
    cod int AUTO_INCREMENT,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Usuario(cod)

);

CREATE TABLE Motoboy (
    cod int AUTO_INCREMENT,
    cnh varchar(30) UNIQUE NOT NULL,
    placa varchar(10) UNIQUE NOT NULL,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Usuario(cod)

);

CREATE TABLE Administrador (
    cod int AUTO_INCREMENT,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Usuario(cod)

);

CREATE TABLE Sugestoes (
    id int AUTO_INCREMENT,
    descricao varchar(256) NOT NULL,

     PRIMARY KEY(id),
     FOREIGN KEY (id) REFERENCES Universitario(cod)

);

CREATE TABLE Endereco (
    cod int AUTO_INCREMENT,
    cep varchar(10) NOT NULL,
    logradouro varchar(100) NOT NULL, 
    bairro varchar(30) NOT NULL,
    numero int NOT NULL,
    complemento varchar(50) NOT NULL,
    cidade varchar(40) NOT NULL,
    estado varchar(20) NOT NULL,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Universitario(cod)
);

CREATE TABLE Restaurante (
    id int AUTO_INCREMENT,
    nome varchar(30) NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY (id) REFERENCES Funcionario(cod) 

);

CREATE TABLE Categoria (
    cod int AUTO_INCREMENT,
    nome varchar(20) NOT NULL,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE Prato (
    codPrato int AUTO_INCREMENT,
    cod int NOT NULL,
    nome varchar(20) NOT NULL,
    preco float NOT NULL,
    ingredientes varchar(100) NOT NULL,
    descricao varchar(100) NOT NULL,
 
    PRIMARY KEY(codPrato),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE Bebida (
    codBebida int AUTO_INCREMENT,
    cod int NOT NULL,
    nome varchar(20) NOT NULL,
    preco float NOT NULL,

    PRIMARY KEY(codBebida),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE Sobremesa (
    codSobremesa int AUTO_INCREMENT,
    cod int NOT NULL,
    nome varchar(20) NOT NULL,
    preco float NOT NULL,

    PRIMARY KEY(codSobremesa),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE Pedido (
    codPedido int AUTO_INCREMENT,
    cod int NOT NULL,
    statusPedido varchar(20) NOT NULL,
    previsaoEntrega TIME NOT NULL,
    origem varchar(50) NOT NULL,
    destino varchar(100) NOT NULL, 

    PRIMARY KEY(codPedido),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE Cupom (
    codCupom int AUTO_INCREMENT,
    cod int NOT NULL,
    nome varchar(20) NOT NULL,
    descricao varchar(20) NOT NULL,
    valor float NOT NULL,
    statusCupom Boolean NOT NULL,

    PRIMARY KEY(codCupom),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE RestaurantePedidoAvaliacao (
    codRPA int AUTO_INCREMENT,
    codRestaurante int NOT NULL,
    codPedido int NOT NULL,
    codAvaliacao int,

    PRIMARY KEY(codRPA),
    FOREIGN KEY (codRestaurante) REFERENCES Restaurante(id),
    FOREIGN KEY (codPedido) REFERENCES Pedido(cod),
    FOREIGN KEY (codAvaliacao) REFERENCES Avaliacao(cod)
);

CREATE TABLE Avaliacao (
    codAvaliacao int AUTO_INCREMENT,
    cod int NOT NULL,
    nota int NOT NULL,
    descricao varchar(200) NOT NULL,

    PRIMARY KEY(codAvaliacao),
    FOREIGN KEY (cod) REFERENCES Universitario(cod)
    
);

CREATE TABLE CategoriaPrato (
    codCategoria int AUTO_INCREMENT,
    cod int NOT NULL,
    nome varchar(20) NOT NULL,

    PRIMARY KEY(codCategoria),
    FOREIGN KEY (cod) REFERENCES Prato(codPrato)

);