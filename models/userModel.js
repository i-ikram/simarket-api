const pool = require('../db/db');

const UserModel = {
  async createUser(name, email) {
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
    const values = [name, email];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async getAllUsers() {
    const query = 'SELECT * FROM users';
    const { rows } = await pool.query(query);
    return rows;
  },
};

module.exports = UserModel;
