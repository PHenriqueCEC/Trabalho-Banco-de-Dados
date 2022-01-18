INSERT INTO Usuario (nome,email,senha) VALUES (NULL,"marcos.silva@outlook.com","52698af54dc454af5445e196af61e616");

INSERT INTO Usuario (nome,email,senha) VALUES ("Marcos Silva","marcos.silva@outlook.com",123456)

DELETE FROM Usuario WHERE cod = "35";

INSERT INTO Prato (cod,nome,preco,ingredientes,descricao) VALUES (1,"Macarrão à Bolonhesa",23.8,"macarrao espaguete, molho de tomate, carne moída, manjericão","Um prato típico da cultura italiano");

INSERT INTO Categoria (cod,nome) VALUES (2,"Japonês");

UPDATE Usuario SET email = "marcos@nasa.org" WHERE cod = "87";

DELETE FROM Categoria WHERE cod = "2";

INSERT INTO Bebida (cod,nome,preco) VALUES (1,"Suco Tropical",1.5);

INSERT INTO Usuário (cod,nome,email,senha) VALUES (1,"Jorge Jesus","jorge.jesus@bragantino.org","654af44c5e454949fe984ca464de8464");