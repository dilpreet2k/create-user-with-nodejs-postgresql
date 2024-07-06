const express = require('express');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');

dotenv.config();

const app = express();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

app.use(express.json());

app.use('/api', userRoutes);

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
