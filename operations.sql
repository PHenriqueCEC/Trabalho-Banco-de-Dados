SELECT nome
FROM
	turma	
INNER JOIN
	turmaprofessor
    ON
	turma.codturma = turmaprofessor.codturma
	AND
	codescola = (SELECT codescola FROM escola WHERE	nome = 'Colégio Bernoulli')
INNER JOIN
	usuario
ON
	usuario.cpf = turmaprofessor.cpf;



SELECT (COUNT)cod FROM Pedido	
INNER JOIN Usuario 
    ON 
    Usuario.cod = Universitario.codUniversitario
INNER JOIN Universitario
    ON
    Universitario.codUniversitario = 
    AND 
nomeUsuario = (SELECT codUsuario FROM Usuario where nome = 'Alan Turing')



SELECT u.cpf, COUNT(u.nome) AS acessos
FROM usuario AS u
INNER JOIN acesso a ON a.cpf = u.cpf
WHERE a.datahora BETWEEN '2021-07-16' AND '2021-07-21' AND a.tipoacesso = 'Login'
GROUP BY u.cpf


SELECT m.cnh AND m.placa FROM Motoboy AS m
GROUP BY m.cnh
ORDER BY m.cod


/* OBJETIVO: Retornar o corpo de funcionários do Restaurante Siri Cascudo */
CREATE VIEW view_funcionario_escola AS
SELECT nome AS nome_funcionario 
FROM
	Usuario	
INNER JOIN
	Funcionario
ON
	Usuario.cod = Funcionario.codUsuario
	AND
	id = (SELECT id FROM Restaurante WHERE	nome = 'Siri Cascudo')
INNER JOIN
	Restaurante
ON
	Restarante.id = Funcionario.codRestaurante;



CREATE VIEW view_materiais_disciplina AS
SELECT codmaterial AS materiais 
FROM disciplinamaterial
WHERE coddisc = '909';

/*OBJETIVO: Retornar os pratos do restaurante Siri Cascudo*/
CREATE VIEW view_pratos_restaurante AS
SELECT cod AS codPrato 
FROM Prato
WHERE codRestaurante = 1;

/* ---------------------------TRIGGERS---------------------------------------------- */

CREATE OR REPLACE FUNCTION validar_senha()
RETURNS TRIGGER AS $$
BEGIN
	
IF char_length(NEW.senha) < 9 THEN
		RAISE EXCEPTION 'A senha deve possuir pelo menos 9 dígitos! ';
	ELSE
		return NEW;
END IF;
	
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_senha
BEFORE INSERT OR UPDATE
ON Usuario
FOR EACH ROW
EXECUTE PROCEDURE validar_senha();


CREATE OR REPLACE FUNCTION Universitario_Restaurante()
RETURNS TRIGGER AS $$
BEGIN

	IF NEW.codRestaurante IN (SELECT codRestaurante 
		FROM RestaurantePedidoAvaliacao rpa(codRestaurante, codPedido)
		JOIN Universitario uni(codUniversitario, cod) ON uni.codUniversitario = rpa.cod
		WHERE codRPA = NEW.codAvaliacao
		) THEN
		return NEW;
	ELSE
		RAISE EXCEPTION 'Universitário nao realizou nenhum pedido neste restaurante ';
	END IF;
	
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_Universitario_Restaurante
BEFORE INSERT OR UPDATE
ON avaliacaoRestaurante
FOR EACH ROW
EXECUTE PROCEDURE Univer();
