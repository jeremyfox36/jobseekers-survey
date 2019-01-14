const config = require('./config');
const Pool = require("pg").Pool;

const pool = new Pool(config);//local

const getRespondents = (req, res) => {
    pool.query('SELECT * FROM respondents ORDER By id ASC', (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    });
}

const createRespondent = (req, res) => {
    const { fname, lname, email } = req.body;

    pool.query('INSERT INTO respondents (fname, lname, email) VALUES ($1, $2, $3) RETURNING id;', [fname, lname, email], (error, result) => {
        if(error){
            throw error;
        }
        res.status(201).send(`User added with ID: ${result.rows[0].id}`)
    });
}

module.exports = {
    getRespondents,
    createRespondent
}