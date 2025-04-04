FROM node:16

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 80

RUN apt-get update && apt-get install -y curl

HEALTHCHECK --interval=30s --timeout=10s --retries=3 --start-period=10s \
    CMD curl -f http://localhost:80/health || exit 1

CMD ["node", "server.js"]
