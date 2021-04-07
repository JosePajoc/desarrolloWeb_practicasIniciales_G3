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
select * from tutor;
INSERT INTO usuario VALUES ('100', 'Jose', 'Pajoc', '100', 'correo@algo.com');
INSERT INTO usuario VALUES ('101', 'William', 'apellido W', '101', 'correo101@algo.com');
INSERT INTO usuario VALUES ('102', 'Carlos', 'apellido C', '102', 'correo102@algo.com');
select * from usuario;

-- Prueba buscar usuario si coinciden los datos
select * from usuario where carnet=100 and contra=100;
