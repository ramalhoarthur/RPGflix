FROM node:24-alpine

RUN apk add git bash --no-cache

WORKDIR /app

# Copia os arquivos de dependência do npm
COPY project-rpgflix/package*.json ./

# Instala as dependências via npm
RUN npm install

# Copia o restante do código da aplicação
COPY project-rpgflix/ ./

EXPOSE 5173

# Executa o servidor de desenvolvimento expondo a porta para a rede do Docker
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]