CREATE TABLE Usuario (
   cod int AUTO_INCREMENT, -- MySql é int ou Interger?
   nome varchar(100) NOT NULL,
   email varchar(200) UNIQUE NOT NULL,
   senha varchar(256), --Hash da senha\Senha criptografada
   PRIMARY KEY (cod) 

    -- Será que devemos trocar o cod por cpf???? Devemos add telefone/outros campos aqui??? 
);

INSERT INTO Usuario (
    1,
    "Alan Turing",
    "alanturing@gmail.com",
    "paidacomputacao"

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
    estado varchar(20) NOT NULL

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Universitario(cod)
);

CREATE TABLE Restaurante (
    id int AUTO_INCREMENT,
    nome varchar(30) NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY (id) REFERENCES Funcionario(cod) 

);

CREATE TABLE Avaliacao (
    cod int AUTO_INCREMENT,
    nota int NOT NULL,
    descricao varchar(200) NOT NULL,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Universitario(cod),
    FOREIGN KEY (cod) REFERENCES RestaurantePedidoAvaliacao(cod)
    
);

CREATE TABLE Categoria (
    cod int AUTO_INCREMENT,
    nome varchar(20) NOT NULL,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE Prato (
    cod int AUTO_INCREMENT,
    nome varchar(20) NOT NULL,
    preco float NOT NULL,
    ingredientes varchar(100) NOT NULL,
    descricao varchar(100) NOT NULL,
 
    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE Bebida (
    cod int AUTO_INCREMENT,
    nome varchar(20) NOT NULL,
    preco float NOT NULL,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE Sobremesa (
    cod int AUTO_INCREMENT,
    nome varchar(20) NOT NULL,
    preco float NOT NULL,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE Pedido (
    cod int AUTO_INCREMENT,
    statusPedido varchar(20) NOT NULL,
    previsaoEntrega TIME NOT NULL,
    origem varchar(50) NOT NULL,
    destino varchar(20) NOT NULL, 

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

    --ACHO QUE TEREMOS QUE INSERIR MAIS CHAVES ESTRANGEIRAS AQUI. 

);

CREATE TABLE Cupom (
    cod int AUTO_INCREMENT,
    nome varchar(20) NOT NULL,
    descricao varchar(20) float NOT NULL,
    statusCupom Boolean NOT NULL,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)

);

CREATE TABLE RestaurantePedidoAvaliacao (
    cod int AUTO_INCREMENT,

    PRIMARY KEY(cod),
    FOREIGN KEY (cod) REFERENCES Restaurante(id)
    FOREIGN KEY (cod) REFERENCES Pedido(cod)
    FOREIGN KEY (cod) REFERENCES Avaliacao(cod)
);

CREATE TABLE CategoriaPrato (
    id int AUTO_INCREMENT,
    nome varchar(20) NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY (id) REFERENCES Prato(cod)

);
