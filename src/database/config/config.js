module.exports = {

    "development": {
        "host": "localhost",
        "username": "root",
        "password": "123",
        "database": "juntada_ars",
        "dialect": "mysql",
        "operatorsAliases": 0,
        "timezone": "America/Recife",
        "logging": false
    },

    "test": {
        "username": "root",
        "password": "admin",
        "database": "database_test",
        "host": "localhost",
        "dialect": "mysql",
        "operatorsAliases": 0
    },
    
    "production": {
        "host": process.env.DB_HOST,
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_SCHEMA,
        "dialect": "mysql",
        "operatorsAliases": 0,
        "timezone": "America/Recife",
        "use_env_variable": false,
        "logging": false
    }

}