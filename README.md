# 🐾 ONG-PATRE

O **ONG-PATRE** é uma aplicação desenvolvida para apoiar o trabalho de uma ONG dedicada ao cuidado, proteção e adoção responsável de cães e gatos.

O projeto tem como objetivo facilitar o acesso às informações dos animais acolhidos pela instituição, aproximar possíveis adotantes da ONG e oferecer uma estrutura digital organizada para o gerenciamento dos animais e dos processos relacionados à adoção.

## 📱 Sobre o projeto

A aplicação foi desenvolvida pensando tanto na experiência das pessoas interessadas em conhecer e adotar os animais quanto na organização das informações mantidas pela ONG.

A plataforma permite apresentar os animais disponíveis de maneira organizada, disponibilizando informações importantes sobre cada um deles e facilitando o processo de interesse em adoção.

O sistema está estruturado com **frontend** (aplicativo Expo/React Native, na raiz do repositório) e **backend** (API REST em Java, na pasta `backend/`) independentes. Nesta etapa, o aplicativo ainda utiliza dados simulados na interface, enquanto a API já oferece autenticação, cadastro de animais e solicitações de adoção para a integração futura.

## ✨ Funcionalidades

### Frontend

- Login e cadastro de usuários na interface, com validação visual de e-mail e senha
- Controle de sessão temporário no aplicativo (entrada pela tela de login e saída pelo perfil)
- Catálogo de animais para adoção, com informações de cães e gatos
- Tela de detalhes de cada animal (história, personalidade, saúde e dados gerais)
- Formulário de interesse em adoção
- Navegação entre as telas principais (início, eventos, doações, perfil e sobre a ONG)
- Área de eventos e voluntariado com conteúdo estático
- Área de doações com valores sugeridos, chave PIX e informações de transparência (ainda sem processamento real)
- Interface moderna, organizada e responsiva para celular, tablet e web

### Backend

- Cadastro e login reais por API REST
- Autenticação com JWT e senhas armazenadas com BCrypt
- Perfis de acesso `USER` e `ADMIN`
- Consulta, criação, atualização e exclusão de animais (escrita restrita a administradores)
- Registro e consulta de solicitações de adoção
- Tratamento padronizado de erros em JSON
- Documentação da API com Swagger/OpenAPI

## 🚧 Funcionalidades em desenvolvimento

- Integração do frontend com a API (login, animais e adoções ainda não consomem o backend)
- Autenticação persistente no aplicativo
- Painel administrativo no frontend para gerenciar animais e adoções
- Processamento real de doações
- Inscrição em eventos
- Recuperação de senha

## 🛠️ Tecnologias

### Frontend

- React Native
- Expo
- TypeScript
- Expo Router
- React Native Web

### Backend

- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- JWT
- Bean Validation
- PostgreSQL
- Maven
- Swagger / OpenAPI (Springdoc)

## 📂 Estrutura do projeto

O frontend permanece na raiz do repositório (estrutura Expo). O backend foi adicionado em uma pasta separada.

```text
ONG-PATRE/
├── app/                 # Telas e rotas do aplicativo (Expo Router)
├── assets/              # Imagens e fontes
├── backend/             # API REST em Java / Spring Boot
│   ├── src/
│   ├── pom.xml
│   ├── docker-compose.yml
│   └── .env.example
├── components/          # Componentes visuais reutilizáveis
├── constants/           # Tema e tokens visuais
├── contexts/            # Estado de sessão do frontend
├── data/                # Dados simulados dos animais
├── package.json
└── README.md
```

## 🔐 Autenticação

O **frontend** e o **backend** ainda **não estão integrados**.

- No aplicativo, o login e o cadastro são **simulados**: após a validação visual, uma sessão temporária em memória libera o acesso às telas principais. Essa sessão é encerrada ao sair da conta ou ao recarregar o app.
- Na API, a autenticação é **real**: `POST /api/auth/register` e `POST /api/auth/login` retornam um token JWT e os dados básicos do usuário. As rotas de animais e adoções exigem esse token; criação, edição e exclusão de animais são restritas ao perfil `ADMIN`.

## 🗄️ Banco de dados

O backend utiliza **PostgreSQL**.

As configurações sensíveis (conexão com o banco, segredo JWT e demais parâmetros de ambiente) devem ser definidas por **variáveis de ambiente**. Há um arquivo de exemplo em `backend/.env.example`, sem valores reais de produção.

## ▶️ Como executar

### Frontend

**Pré-requisitos:** Node.js e npm.

```bash
npm install
npm start
```

Para abrir no navegador:

```bash
npm run web
```

Outros scripts disponíveis:

```bash
npm run android
npm run ios
```

O Expo Web, em desenvolvimento, fica em `http://localhost:8081`.

### Backend

**Pré-requisitos:** Java 21, Docker (para o PostgreSQL local) ou uma instância PostgreSQL, e o Maven Wrapper já incluído no repositório.

```bash
cd backend
docker compose up -d
./mvnw spring-boot:run
```

No Windows:

```powershell
cd backend
docker compose up -d
.\mvnw.cmd spring-boot:run
```

A API sobe, por padrão, na porta **8080**.

Para executar os testes:

```bash
./mvnw test
```

## 📚 Documentação da API

Com o backend em execução:

- Swagger UI: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- OpenAPI JSON: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

## 🎯 Objetivo

Este projeto busca utilizar a tecnologia como ferramenta de transformação social: fortalecer o trabalho da ONG, facilitar a adoção responsável e aproximar pessoas interessadas dos animais que esperam por um lar.

Mais do que um aplicativo, o ONG-PATRE pretende ampliar a visibilidade da causa animal e organizar digitalmente o cuidado, o resgate e o encontro entre a instituição, os animais acolhidos e a comunidade.

## 📷 Demonstração

> Em breve serão adicionadas capturas de tela do aplicativo.

## 👩‍💻 Desenvolvimento

**Desenvolvido por Maria Aparecida Tavares da Silva**

Desenvolvedora Full Stack em formação.

GitHub: [devmaria96-collab](https://github.com/devmaria96-collab)
