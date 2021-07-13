require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
  })

module.exports = {
    "development": {
        "username": "bb7b6e6492dfea",
        "password": "5b16795b",
        "database": "heroku_31b8004cfee32ac",
        "port":3306,
        "host": "us-cdbr-east-04.cleardb.com",
        "dialect": "mysql"
    },
    "test": {
        "username":"bb7b6e6492dfea",
        "password": "5b16795b",
        "database": "heroku_31b8004cfee32ac",
        "port":3306,
        "host": "us-cdbr-east-04.cleardb.com",
        "dialect": "mysql",
    },
    "production": {
        "username": "bb7b6e6492dfea",
        "password": "5b16795b",
        "database": "heroku_31b8004cfee32ac",
        "host": "us-cdbr-east-04.cleardb.com",
        "dialect": "mysql"
    }
}
