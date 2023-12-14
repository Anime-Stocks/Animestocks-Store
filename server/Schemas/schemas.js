const mongoose = require('mongoose');
const db1 = require('../Db/database');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        unique:true
    },
    pass: String
});

const mangaSchema = new mongoose.Schema({
    name: String,
    link: String,
    class: String,
    image: String,
    description: String,
    price: Number
});

const lightSchema = new mongoose.Schema({
    name: String,
    link: String,
    class: String,
    image: String,
    description: String,
    price: Number
});

const merchSchema = new mongoose.Schema({
    name: String,
    link: String,
    cat: String,
    image: String,
    description: String,
    price: Number
});

const Admin = db1.model('Admin', adminSchema);
const Manga = db1.model('Manga', mangaSchema);
const Light = db1.model('Light', lightSchema);
const Merch = db1.model('Merch', merchSchema);

module.exports = {
    Admin,
    Manga,
    Light,
    Merch
}