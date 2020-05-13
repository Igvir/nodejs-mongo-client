require('dotenv').config()
const config = {
    development: {
        db:{
            host: process.env.DB_HOST || '127.0.0.1',
            port: process.env.DB_PORT || '27017',
            user: process.env.DB_USERNAME || 'captapp',
            password: process.env.DB_PASSWORD || 'pass1234',
            type: process.env.DB_TYPE || 'mongodb',
            name: process.env.DB_NAME || 'leaderboard_db',
        },
        server: {
            host: process.env.HOST || '127.0.0.1',
            port: process.env.PORT || '3000'
        },
    },
    stage: {
        db:{
            host: process.env.DB_HOST || '127.0.0.1',
            port: process.env.DB_PORT || '27017',
            user: process.env.DB_USERNAME || 'test',
            password: process.env.DB_PASSWORD || 'test1234',
            type: process.env.DB_TYPE || 'mongodb',
            name: process.env.DB_NAME || 'leaderboard_db',
        },
        server: {
            host: process.env.HOST || '127.0.0.1',
            port: process.env.PORT || '3001'
        },
    }
}

module.exports = config;