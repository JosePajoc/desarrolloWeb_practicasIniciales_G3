-- Script para mysql
-- Creando bd
CREATE DATABASE centralBD;

-- Abriendo la bd
USE centralbd;

-- Creando tabla tutores
CREATE TABLE tutor(
idtutor INT AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
PRIMARY KEY(idtutor)
);
-- tabla usuario
CREATE TABLE usuario(
carnet INT,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
contra VARCHAR(50) NOT NULL,
correo VARCHAR(50) NOT NULL,
PRIMARY KEY(carnet)
);
-- tabla curso
CREATE TABLE curso(
idcurso INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL,
semestre VARCHAR(50) NOT NULL
);
-- tabla cursos aprobados
CREATE TABLE cursoAprobado(
idcursoaprobado INT PRIMARY KEY AUTO_INCREMENT,
carnetusuario INT,
idcurso INT, 
FOREIGN KEY (carnetusuario) REFERENCES usuario (carnet),
FOREIGN KEY (idcurso) REFERENCES curso (idcurso)
);
-- tabla publicación de un curso
CREATE TABLE publicacioncurso(
id INT PRIMARY KEY AUTO_INCREMENT,
carnetusuario INT,
idcurso INT,
mensaje VARCHAR(100),
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (carnetusuario) REFERENCES usuario (carnet),
FOREIGN KEY (idcurso) REFERENCES curso (idcurso)
);
-- tabla comentario de un curso
CREATE TABLE comentarioscurso(
id INT PRIMARY KEY AUTO_INCREMENT,
idpublicacioncurso INT,
carnetusuario INT,
comentario VARCHAR(100),
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (idpublicacioncurso) REFERENCES publicacioncurso (id),
FOREIGN KEY (carnetusuario) REFERENCES usuario (carnet)
);
-- tabla publicación tutor
CREATE TABLE publicaciontutor(
id INT PRIMARY KEY AUTO_INCREMENT,
carnetusuario INT,
idtutor INT,
mensaje VARCHAR(100),
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (carnetusuario) REFERENCES usuario (carnet),
FOREIGN KEY (idtutor) REFERENCES tutor (idtutor)
);

-- tabla comentario de un tutor
CREATE TABLE comentariostutor(
id INT PRIMARY KEY AUTO_INCREMENT,
idpublicaciontutor INT,
carnetusuario INT,
comentario VARCHAR(100),
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (idpublicaciontutor) REFERENCES publicaciontutor (id),
FOREIGN KEY (carnetusuario) REFERENCES usuario (carnet)
);

SHOW TABLES;

DESCRIBE publicacionCurso;

-- Datos de prueba
INSERT INTO tutor (nombre, apellido) VALUES ('Luis', 'Paz');
INSERT INTO tutor (nombre, apellido) VALUES ('Mario', 'Perez');
INSERT INTO tutor (nombre, apellido) VALUES ('Carlos', 'Gonzales');
INSERT INTO tutor (nombre, apellido) VALUES ('Tomas', 'Rodriguez');
select * from tutor;
INSERT INTO usuario VALUES ('100', 'Jose', 'Pajoc', '100', 'correo@algo.com');
INSERT INTO usuario VALUES ('101', 'William', 'apellido W', '101', 'correo101@algo.com');
INSERT INTO usuario VALUES ('102', 'Carlos', 'apellido C', '102', 'correo102@algo.com');
select * from usuario;

-- Prueba buscar usuario si coinciden los datos
select * from usuario where carnet=100 and contra=100;

-- Prueba para la tabla publicaciontur
insert into publicaciontutor (carnetusuario, idtutor, mensaje) 
values (100, 2, 'Sus clases son muy prácticas');
insert into publicaciontutor (carnetusuario, idtutor, mensaje) 
values (101, 2, 'Inicia puntual sus clases');
insert into publicaciontutor (carnetusuario, idtutor, mensaje) 
values (101, 1, 'Sus evaluaciones son dificiles');
insert into publicaciontutor (carnetusuario, idtutor, mensaje) 
values (103, 3, 'Nunca falta a clase');
insert into publicaciontutor (carnetusuario, idtutor, mensaje) 
values (103, 2, 'El ritmo de su clase es muy despacio');
insert into publicaciontutor (carnetusuario, idtutor, mensaje) 
values (103, 1, 'Las tareas van según el contenido de la evaluación');
insert into publicaciontutor (carnetusuario, idtutor, mensaje) 
values (102, 3, 'Sus tareas son muy extensas');
insert into publicaciontutor (carnetusuario, idtutor, mensaje) 
values (103, 4, 'Tiene bastante paciencia para explicar las dudas');

-- Ver publicación por el método de igualación y ordenando primero de la fecha más reciente 
select usuario.nombre as usuario, tutor.nombre as tutor, publicaciontutor.mensaje, publicaciontutor.fecha
from usuario, tutor, publicaciontutor
where (usuario.carnet = publicaciontutor.carnetusuario) and (tutor.idtutor = publicaciontutor.idtutor)
order by publicaciontutor.fecha desc;

-- Actualizar nombre tutor
update tutor set nombre='Veronica' where idtutor=3;

-- Cursos
insert into curso (nombre, semestre) value ('Social humanistica 1', 'Primero');
insert into curso (nombre, semestre) value ('Matemática básica 1', 'Primero');
insert into curso (nombre, semestre) value ('Técnica complementaria 1', 'Primero');
insert into curso (nombre, semestre) value ('Química general 1', 'Primero');
insert into curso (nombre, semestre) value ('Idioma técnico 1', 'Primero');
insert into curso (nombre, semestre) value ('Matemática básica 2', 'Segundo');
insert into curso (nombre, semestre) value ('Social humanistica 2', 'Segundo');
insert into curso (nombre, semestre) value ('Física básica', 'Segundo');
insert into curso (nombre, semestre) value ('Mate de computo 1', 'Tercero');
insert into curso (nombre, semestre) value ('Introducción a la programación y computación 1', 'Tercero');
insert into curso (nombre, semestre) value ('Práctica inicial', 'Cuarto');
insert into curso (nombre, semestre) value ('Estadística 1', 'Cuarto');

