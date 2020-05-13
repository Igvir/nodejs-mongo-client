# Leader board service REST API

## Overview
This is the REST API for leaderboard. It is build in NodeJS EC6. 

## Getting Started

Clone the repo:
```sh
git clone https://<<USER>>/RM_GBM/capt-app-clubs.git
git checkout feature/dev-leaderboard-service
```

Install the project
```sh
npm install
```

Run the project
```sh
# Setting environment variables
## env variables: stage, development
NODE_ENV=development
PORT=3000

## DB variables: 
DB_HOST = IP,
DB_PORT = port,
DB_USERNAME = test,
DB_PASSWORD = test1234,
DB_TYPE = mongodb,
DB_NAME = leaderboard_dbs,

## AWS Variables: Are define in a .env file. Contact administrator to get the keys 
AWS_ACCESS_KEY_ID = key
AWS_SECRET_ACCESS_KEY = secret
AWS_REGION = region

# Start server
node server.js
```

### Who do I talk to:
info@captapp.com :shipit: