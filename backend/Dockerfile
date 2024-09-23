# Use the official Node image as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Use a lightweight server to serve static files
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to serve the build
CMD ["serve", "-s", "build"]