# /logging-service/app/Dockerfile
FROM node:14

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

EXPOSE 6000
CMD ["node", "server.js"]
