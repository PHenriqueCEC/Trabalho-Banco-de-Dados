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
    5
),

(
    6
);

INSERT INTO Funcionario VALUES (
    3
),

(
    4
);

INSERT INTO Administrador VALUES (
  1
),

(
  7
);

INSERT INTO Motoboy VALUES (
  2,
  "111",
  "CRU-123"
),

(
  8,
  "666",
  "GST-666"
);

INSERT INTO Sugestoes VALUES (
  5,
  "O aplicativo deveria incluir a foto do Motoboy que vai fazer a entrega"

),

(
  6,
  "Gostaria que o aplicativo funcionasse em terra firme e não 
  somente na Fenda do Biquine"

);

INSERT INTO Endereco VALUES (
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
  6,
  "25489-000",
  "rua da terra",
  "Texas",
  29,
  "Perto do Sirigueijo",
  "Fenda do Biquine",
  "TX"

);

INSERT INTO Restaurante VALUES (
  3,
  "Siri Cascudo"
),

(
  4,
  "Tudo gostoso"
);

INSERT INTO Categoria VALUES (
  3,
  "Lanches"
),

(
  4,
  "Comida brasileira"
);

INSERT INTO Prato VALUES (
  1,
  3,
  "Hamburguer de Siri",
  20.00,
  "Pao, Bife, Bacon, Calabresa e Batata",
  "Melhor hamburguer de todos"
),

(
  2,
  3,
  "Hamburguer Trad",
  10.00,
  "Pao, Bife e Batata",
  "Bom e barato"

),

(
  3,
  3,
  "Hamburguer Bacon",
  15.00,
  "Pao, Bife Bacon Batata",
  "Gostoso e super recheado"
),

(
  4,
  4,
  "Feijoada",
  25.00,
  "Feijão, linguiça e torresmo",
  "Feijoada mais completa da cidade"
),

(
  5,
  4,
  "PF",
  15.00,
  "Arroz, Feijão, Carne e Salada",
  "Melhor PF da cidade"
);

INSERT INTO Bebida VALUES (
  1,
  3,
  "COca cola",
  5.00

),

(
  2,
  3,
  "Guaraná",
  4.95
),

(
  3,
  4,
  "Suco de laranja",
  5.00

),

(
  4,
  4,
  "Água",
  2.00
);

INSERT INTO Sobremesa VALUES (
  1,
  3,
  "Pudim",
  2.55
),

(
  2,
  4,
  "Pavê",
  2.00
),

(
  3,
  4,
  "Pudim",
  3.00
);

INSERT INTO Cupom VALUES (
  1,
  3,
  "Vale 10 reais",
  "Aproveita o desconto",
  10.00,
  1
),

( 
  2,
  3,
  "Vai um desconto ai",
  "10 Reais OFF",
  10.00,
  0
),

( 
  3,
  4,
  "Fraga o desconto",
  "5 Reais OFF",
  5.00,
  1
),

(
  4, 
  4,
  "Aproveita ai fera",
  "7 Reais OFF",
  7.00,
  1
),

( 
  5,
  4,
  "Vai um cafezin?",
  "5 Reais OFF",
  7.00,
  0
);

INSERT INTO Pedido VALUES (
  1,
  3,
  "Preparando",
  "20:30",  
  "Siri Cascudo",
  " Rua das Couves 54" 
),

(
  2,
  4,
  "Preparando",
  "20:30",  
  "Siri Cascudo",
  " Rua jose 54" 
);

INSERT INTO RestaurantePedidoAvaliacao VALUES (

  1,
  3,
  3,
  5

),

(
  2,
  3,
  4,
  6

);

INSERT INTO Avaliacao VALUES (
  1,
  5,
  3,
  "Lanche gostoso mas veio pouca batata"
),

(
  2,
  6,
  5,
  "Lanche impecável"
);

INSERT INTO CategoriaPrato VALUES (
  1,
  1,
  "Brasileira"

),

(
  2,
  2,
  "Lanches"
);


