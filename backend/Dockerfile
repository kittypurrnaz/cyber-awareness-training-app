# Use a Node.js base image. Node.js 18 Alpine is lightweight.
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker's cache
# (This ensures npm install only runs if dependencies change)
COPY package*.json ./

# Install application dependencies
# The --production flag ensures only production dependencies are installed
RUN npm install --production

# Copy the rest of the application source code
COPY . .

# The Cloud Run environment provides a PORT environment variable.
# The application should listen on this port.
# The `npm start` command (defined in package.json) will run `node app.js`.
CMD [ "npm", "start" ]
