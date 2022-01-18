-- CREATE DATABASE IfoodRU;
USE IfoodRU;

INSERT INTO Usuario
VALUES 
(
   1,
   "Alan Turing",
   "alanturing@gmail.com",
   "paidacomputacao"
),

(
  2,
   "Seu Sirigueijo",
   "sirigueijog@gmail.com",
   "maodevaca"
),

(
  3,
   "Lula Molusco",
   "moluscog@gmail.com",
   "clarinete"
),

(
  4,
   "Bob Esponja",
   "bob@gmail.com",
   "calcaquadrada"
),

(
  5,
   "Patrick Estrela",
   "patrickg@gmail.com",
   "pedra"
),

(
  6,
   "Sandy",
   "sandyg@gmail.com",
   "esquilo"
),

(
  7,
  "Linus Torvalds",
  "linus@gmail.com",
  "linux"
),

(
  8,
  "Motoqueiro fantasma",
  "motoca@gmail.com",
  "ghost"
);

INSERT INTO Universitario VALUES (
    1,
    5
),

(   2,
    6
);

INSERT INTO Restaurante VALUES (
  1,
  1,
  "Siri Cascudo"
),

(
  2,
  2,
  "Tudo gostoso"
);

INSERT INTO Categoria VALUES (
  1,
  1,
  1,
  "Lanches"
),

(
  2,
  2,
  2,
  "Comida brasileira"
);

INSERT INTO Funcionario VALUES (
    1,
    3,
    1
),

(
    2,
    4,
    2
);

INSERT INTO Administrador VALUES (
  1,
  1
),

(
  2,
  7
);

INSERT INTO Motoboy VALUES (
  1,
  2,
  "111",
  "CRU-123"
),

(
  2,
  8,
  "666",
  "GST-666"
);

INSERT INTO Sugestoes VALUES (
  1,
  5,
  "O aplicativo deveria incluir a foto do Motoboy que vai fazer a entrega"

),

(
  2,
  6,
  "Gostaria que o aplicativo funcionasse em terra firme e não 
  somente na Fenda do Biquine"

);

INSERT INTO Endereco VALUES (
  1,
  5,
  "36540-000",
  "rua das pedras",
  "Fenda",
  40,
  "ao lado do Lula Molusco",
  "Fenda do Biquine",
  "Mar"

),

(
  2,
  6,
  "25489-000",
  "rua da terra",
  "Texas",
  29,
  "Perto do Sirigueijo",
  "Fenda do Biquine",
  "TX"

);

INSERT INTO CategoriaPrato VALUES (
  1,
  "Brasileira"

),

(
  2,
  "Lanches"
);

INSERT INTO Prato VALUES (
  1,
  1,
  2,
  "Hamburguer de Siri",
  20.00,
  "Pao, Bife, Bacon, Calabresa e Batata",
  "Melhor hamburguer de todos"
),

(
  2,
  1,
  2,
  "Hamburguer Trad",
  10.00,
  "Pao, Bife e Batata",
  "Bom e barato"

),

(
  3,
  1,
  2,
  "Hamburguer Bacon",
  15.00,
  "Pao, Bife Bacon Batata",
  "Gostoso e super recheado"
),

(
  4,
  2,
  1,
  "Feijoada",
  25.00,
  "Feijão, linguiça e torresmo",
  "Feijoada mais completa da cidade"
),

(
  5,
  2,
  1,
  "PF",
  15.00,
  "Arroz, Feijão, Carne e Salada",
  "Melhor PF da cidade"
);

INSERT INTO Bebida VALUES (
  1,
  1,
  "COca cola",
  5.00

),

(
  2,
  1,
  "Guaraná",
  4.95
),

(
  3,
  2,
  "Suco de laranja",
  5.00

),

(
  4,
  2,
  "Água",
  2.00
);

INSERT INTO Sobremesa VALUES (
  1,
  1,
  "Pudim",
  2.55
),

(
  2,
  2,
  "Pavê",
  2.00
),

(
  3,
  2,
  "Pudim",
  3.00
);

INSERT INTO Cupom VALUES (
  1,
  1,
  "Vale 10 reais",
  "Aproveita o desconto",
  10.00,
  1
),

( 
  2,
  1,
  "Vai um desconto ai",
  "10 Reais OFF",
  10.00,
  0
),

( 
  3,
  2,
  "Fraga o desconto",
  "5 Reais OFF",
  5.00,
  1
),

(
  4, 
  2,
  "Aproveita ai fera",
  "7 Reais OFF",
  7.00,
  1
),

( 
  5,
  2,
  "Vai um cafezin?",
  "5 Reais OFF",
  7.00,
  0
);

INSERT INTO Pedido VALUES (
  1,
  1,
  1,
  1,
  "Preparando",
  "20:30",  
  "Siri Cascudo",
  " Rua das Couves 54" 
),

(
  2,
  2,
  2,
  1,
  "Preparando",
  "20:30",  
  "Siri Cascudo",
  " Rua jose 54" 
);

INSERT INTO Avaliacao VALUES (
  1,
  1,
  3,
  "Lanche gostoso mas veio pouca batata"
),

(
  2,
  2,
  5,
  "Lanche impecável"
);

INSERT INTO RestaurantePedidoAvaliacao VALUES (

  1,
  1,
  1,
  1

),

(
  2,
  2,
  2,
  2

);

