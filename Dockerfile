#FROM node  image
FROM node:12
##
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
#COPY package*.json ./

USER node

COPY --chown=node:node  ./src/testMongoLeaderboard/* ./
#
RUN ls -al -r

#
RUN npm --version
# npm install
RUN npm --verbose install 

#Show version
RUN node --version 
#start
#RUN npm start
