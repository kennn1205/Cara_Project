const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
// const bcrypt = require('bcrypt');
// khởi tạo ứng dụng express
const app = express();

const port = 3000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

//Kết nối tới cơ sở dữ liệu MongoDB
mongoose.connect('mongodb://localhost:27017/cara_project',{
}).then(() => {
    console.log('Connected to the Database successfully');
}).catch(error => {
    console.log('Error connecting to the database');
});

//Khởi tạo server
app.listen(port, () => {
    console.log('Server is running on Port:', port);
}
);

//import model
const User = require('./models/UserModel');
