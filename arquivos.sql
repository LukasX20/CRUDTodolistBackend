CREATE DATABASE todolist;


CREATE TABLE tarefas(
   id INT PRIMARY KEY ,
   nomeDoResponsavel VARCHAR(100) NOT NULL,
   descricao TEXT NOT NULL,
   statusTarefa VARCHAR (50) NOT NULL,
   dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

insert into 