# Get node image
FROM node

WORKDIR /app

COPY package.json . 

RUN npm install

# Copy all code on current directory or rerun it after new change from package.json
COPY . .

# Expose the react port
EXPOSE 3000

# Commands to trigger docker
CMD [ "npm", "start" ]