const { Pool } = require('pg');


const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'my_store',
    password: '',
    port: 5432,
});

 
module.exports = pool;