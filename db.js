const Pool=require('pg').Pool;

const poolConfig = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
} : {
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: '5432',
    database: 'rest'
}

const pool = new Pool(poolConfig);

module.exports=pool;