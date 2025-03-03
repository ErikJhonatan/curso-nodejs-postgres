const { Pool } = require('pg');

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3321035341.
const {config} = require('../config/config');

const USER = encodeURIComponent(config.user_db);
const PASSWORD = encodeURIComponent(config.password_db);

const uri = `postgres://${USER}:${PASSWORD}@${config.host_db}:${config.port_db}/${config.name_db}`;

const pool = new Pool({
    connectionString: uri,
});
 
module.exports = pool;