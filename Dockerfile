# FROM node:8

# Create app directory
# WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
# COPY . .

# EXPOSE 8081
# CMD [ "npm", "start" ]

FROM node:carbon
COPY ./ /
RUN npm install -g http-server
#RUN npm install --only=production
EXPOSE 8081
CMD ["http-server", "-p", "8081"]
#CMD [ "npm", "start" ]
