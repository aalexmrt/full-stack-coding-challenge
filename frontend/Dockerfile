# Use an official Node.js runtime as a parent image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the built React app files to the container
COPY dist/ ./dist/

# Expose the port the app runs on
EXPOSE 4173

# Start the React app
CMD ["npm", "run", "preview"]