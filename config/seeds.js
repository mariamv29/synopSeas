const db = require('./connection');
const {User} = require('../models');

db.once('open', async () => { 
await User.create({
    firstname: 'Kim',
    lastName: 'Jones',
    email: "kim@jones.com",
    password: "password123"
})

console.log("Users seeded");

process.exit();
});