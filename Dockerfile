# Use a base image with Node.js pre-installed
FROM node:14-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Optionally, you can specify a command to run when the container starts
CMD ["npm", "start"]
