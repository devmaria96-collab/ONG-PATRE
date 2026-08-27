# Backend ONG-PATRE

API REST em Java 21 e Spring Boot para autenticação, animais e solicitações de adoção.

O frontend Expo continua independente nesta etapa. Os dados mockados do aplicativo não foram removidos.

## Requisitos

- Java 21
- Docker (para o PostgreSQL local) ou PostgreSQL 16
- Maven Wrapper (`mvnw`)

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste os valores. O Spring lê as variáveis do sistema/ambiente:

| Variável | Descrição |
|---|---|
| `DATABASE_URL` | JDBC do PostgreSQL |
| `DATABASE_USERNAME` | Usuário do banco |
| `DATABASE_PASSWORD` | Senha do banco |
| `JWT_SECRET` | Segredo HMAC com no mínimo 32 caracteres |
| `JWT_EXPIRATION_MS` | Validade do token em milissegundos |
| `CORS_ALLOWED_ORIGINS` | Origens do frontend local |
| `APP_ADMIN_EMAIL` | E-mail do administrador inicial |
| `APP_ADMIN_PASSWORD` | Senha do administrador inicial |
| `SERVER_PORT` | Porta da API. Padrão: `8080` |

Não versione o arquivo `.env`.

## Como iniciar

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

## Documentação

Swagger UI: http://localhost:8080/swagger-ui.html

OpenAPI JSON: http://localhost:8080/v3/api-docs

## Conta administrativa local

Após a primeira execução, o seeder cria:

- e-mail: `admin@patre.org`
- senha: valor de `APP_ADMIN_PASSWORD` (padrão `admin123`)
