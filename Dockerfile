#FROM node  image
FROM node:12
##
RUN mkdir -p /home/node/app/routes
RUN mkdir -p /home/node/app/controllers
RUN mkdir -p /home/node/app/db
RUN mkdir -p /home/node/app/mongo_schemas
RUN mkdir -p /home/node/app/static
RUN mkdir -p /home/node/app/validations
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
#COPY package*.json ./

USER node

COPY --chown=node:node  ./src/testMongoLeaderboard/* ./
COPY --chown=node:node  ./src/testMongoLeaderboard/routes/* ./routes/
COPY --chown=node:node  ./src/testMongoLeaderboard/controllers/* ./controllers/
COPY --chown=node:node  ./src/testMongoLeaderboard/db/* ./db/
COPY --chown=node:node  ./src/testMongoLeaderboard/mongo_schemas/* ./mongo_schemas/
COPY --chown=node:node  ./src/testMongoLeaderboard/static/* ./static/
COPY --chown=node:node  ./src/testMongoLeaderboard/validations/* ./validations/

#
RUN ls -al -r

#
RUN npm --version
# npm install
RUN npm --verbose install 

#Show version
RUN node --version 

##### Entrypoint
RUN echo "======= Defining entry point ========"
ENTRYPOINT ["npm","start"]

