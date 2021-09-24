<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">CRUD Node.js</h3>




<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#construido-com">Construido com</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando">Iniciando</a>
      <ul>
        <li><a href="#pre-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

Esse é um exemplo simplês de uma Rest API CRUD de usuários. O projeto é conteinerizado em docker, fazendo uso do docker-compose, não só para rodar a instância da aplicação, bem como PostgreSQL e PGAdmin.



### Construido com

* [Node.Js](https://nodejs.org/en/)
* [Express.Js](https://expressjs.com/pt-br/)
* [Sequelize](https://sequelize.org/master/)




<!-- GETTING STARTED -->
## Iniciando

Nesse tópico abordaremos como instalar e preparar o ambiente local.

### Pre-requisitos

Para rodar a aplicação é necessário:
* Docker: https://docs.docker.com/get-docker/
* Docker-compose: https://docs.docker.com/compose/install/

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/Gcunhaa/crud-nodejs.git
   ```
2. Construa a imagem dos containers
   ```sh
   cd crud-nodejs && docker-compose build
   ```

Estamos prontos para rodar!



<!-- USAGE EXAMPLES -->
## Uso

Para rodar a aplicação basta iniciar o docker-compose
```sh
docker-compose up
```

Quando a aplicação começar a rodar, você pode fazer os requests nos endpoints da API http://localhost:8080/api , assim como acessar o banco de dados via o PGAdmin http://localhost:5050  

### Endpoints

Método | Endpoint | Descrição
--- | --- | ---
GET | /users/ | Retorna todos os usuários
GET | /users?name=$NOME | Retorna todos os usuários com o devido nome
GET | /users/:id | Retorna usuário com o devido ID
POST | /users/ | Cria um usuário (Verifique os parametros necessário abaixo da tabela)
PUT | /users/:id | Atualiza um usuário (Mesmos parametros do POST)
DELETE | /users/:id | Deleta um usuário do DB


Segue os parametros requiridos no body do request para o método POST e PUT:
```json
{
    "name": "Gabriel Cunha",
    "birthdate": "2001-02-25",
    "zipcode": "00000000",
    "acceptedTerms": "true",
    "accessCount": "0",
    "document": "2685696850"
}
```

## Contato

Gabriel Salomão Cunha - gsalomaoc@gmail.com




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/gabriel-salom%C3%A3o-cunha-7b959a212/
[product-screenshot]: images/screenshot.png
