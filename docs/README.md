# WIKI - node-ie2-kafka-microservice

[[_TOC_]]


## Objetivo

Este projeto tem como objetivo exemplificar a utilização do NestJS com microserviços. O projeto foi desenvolvido utilizando o NestJS, TypeScript, Kafka e Docker.

---

## Estrutura desta WIKI

- [WIKI - node-ie2-kafka-microservice](#wiki---node-ie2-kafka-microservice)
  - [Objetivo](#objetivo)
  - [Estrutura desta WIKI](#estrutura-desta-wiki)
  - [Introdução](#introdução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variaveis de ambiente](#variaveis-de-ambiente)
  - [README do projeto](#readme-do-projeto)
  - [Links úteis](#links-úteis)


---

## Introdução
Antes de mais nada, é necessário entender o que é um microserviço e como ele funciona.\
Para isso, recomendo a leitura do artigo [Microservices: A definition of this new architectural term](https://martinfowler.com/articles/microservices.html) do Martin Fowler.\

O Kafka é um sistema de mensageria distribuída, que permite a comunicação entre sistemas de forma assíncrona.\

Para entender melhor o Kafka, recomendo a leitura do artigo [Kafka: The Definitive Guide](https://www.confluent.io/resources/kafka-the-definitive-guide/) da Confluent.\


## Pré-requisitos
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## Variaveis de ambiente

Para que a API funcione corretamente, é necessário configurar as variáveis de ambiente.\

Copie o arquivo `.env.example` e renomeie para `.env`.\

Após isso, preencha as variáveis de ambiente com os dados da sua aplicação.\

Upstash servico utilizado para armazenar os dados do Kafka.\
Para mais detalhes, acesse o site do Upstash: [https://upstash.com/](https://upstash.com/)\

| Variável | Descrição |
| --- | --- |
| KAFKA_USERNAME | Usuário do Kafka |
| KAFKA_PASSWORD | Senha do Kafka |

Cadastre-se no Upstash e crie um cluster para obter os dados de acesso ao Kafka.


## README do projeto
Para detalhes sobre versões, pré-requisitos e detalhes de como executar, acesse o [README](../README.md) do projeto.


---
## Links úteis
- [Microservices: A definition of this new architectural term](https://martinfowler.com/articles/microservices.html)
- [Kafka: The Definitive Guide](https://www.confluent.io/resources/kafka-the-definitive-guide/)
- [https://upstash.com/](https://upstash.com/)

---
