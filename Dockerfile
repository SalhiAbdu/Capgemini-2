# Use an official Node runtime as a parent image
FROM node:14 as builder

# Set the working directory
WORKDIR /app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Install all node packages
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the application for production
RUN npm run build

# Use Nginx to serve the React application
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
