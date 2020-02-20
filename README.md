
## Rinnegan

Sistema básico de registro de monitoração.


## Módulos

* [Express](http://expressjs.com/) - Web Framework
* [Sequelize](http://docs.sequelizejs.com/en/latest/) - ORM compatível com bancos de dados SQLServer, Postgres, MySQL e SQLite
* [Mocha](https://mochajs.org/) - Test Runner para Node.js
* [Chai](http://chaijs.com/) - Interface BDD e TDD para implementação de testescomentários no código


## Pré Requisitos
* PostgreSQL
* Node 6+


Antes de inicializar a API é necessário criar o banco de dados local (Caso não tenha instalado verificar os passos de instalação no final da documentação):
```psql -c 'create database ts_api;' -U postgres```

tsc -p .

Instalação as dependências:
```
npm install
```

Inicialização do servidor
```
npm start
```

Rodar o código gerado pelo TS
```
npm run builded
```

## Testes

A aplicação contempla testes unitários e integrados, também foi instalado o framework istanbul para avaliação de cobertura de testes por toda aplicação.

Configuração de banco de dados:

Para gerar o banco de dados de teste interno em sua máquina por favor execute o seguinte comando antes de realizar os testes automatizados da aplicação:
```psql -c 'create database ts_api_test;' -U postgres```

Executar todos os testes:
```
npm test
```

Para rodar somente os testes de integração basta executar o comando abaixo:
```
npm run integration-test
```

Para rodar somente os testes unitários basta executar o comando abaixo:
```
npm run unit-test
```

Para rodar a automação do istanbul para avaliar a cobertura de testes por toda a aplicação basta executar o comando abaixo
```
integration-coverage
```



## Passos de Instalação do postgres no OSX:

```
brew install postgres
```

Acessar o postgres
``` 
psql postgres
```

Configurar o owner para o usuário padrão do psotgres na maquina:

```
CREATE USER postgres SUPERUSER;
CREATE DATABASE postgres WITH OWNER postgres;
```

Referências de ajuda caso tiver problemas nesse processo:
https://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist

https://www.liquidweb.com/kb/what-is-the-default-password-for-postgresql/

Para inicializar o deamon do postgres no OSX basta executar o comando abaixo:
```
pg_ctl -D /usr/local/var/postgres start && brew services start postgresql
```

**Utilizando postgres no docker

docker pull postgres:latest

docker run -d --name ts_api -p 5432:5432 -e 'POSTGRES_PASSWORD=p@ssw0rd42' postgres

