FROM node:10.19.0

# If working directory does not exist
# workdir command creates it
WORKDIR /usr/src/app

# Wildcard * is used to copy both package.json
# and package-lock.json
COPY package*.json ./

# Install npm
RUN npm install

COPY . .

CMD ["npm", "start"]

