const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 8080;

// DB1 = ?
// const db1 = mongoose.createConnnection(MONGO_URI1, {useUnifiedTopology: true});
// db1.on('open', () => console.log("Connected to DB1"));
// db1.on('error', (err) => console.log("Error in DB1 Connection: ", err));

app.use(cors());


// SCHEMAS----------------------------------------------------------------------------------------------------------------
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

let Admin;
let Manga;
let Light;
let Merch;


// Creates the model to the DB
try {
    Admin = db0.model('Admin', adminSchema);
    Manga = db1.model('Manga', mangaSchema);
    Light = db1.model('Light', lightSchema);
    Merch = db1.model('Merch', merchSchema);
} catch(error) {
    console.error(error);
}

// ________________________________________________________________________________________________________________________

// Logging the user(need a db to store)
app.use('/Login', (req, res, next) => {
    const username = req.username || 'Unknown User';
    console.log(`Incoming Request for /Loginby ${username}: ${req.method} ${req.url}`);
    next();
});


const authenticateUser = (req, res, next) => {
    var username = req.body.username;
    var pass = req.body.password;

    const admin = Admin.findOne({username:username, pass:pass});
    if(admin) {
        next();
    }
    else {
        console.log('Log in failed for username and pass: ', username, pass);
        res.satus(401).send('Unauthorized');
    }
}

app.get('/adomino', authenticateUser, (req, res) => {
    res.redirect("/?"); //idk where 
})
// ________________________________________________________________________________________________________________________

// adding products to the database

app.post('/addManga', (req, res) => {
    const name = req.body.name;
    const cat =  req.body.cat;
    const link = req.body.link;
    const image = req.body.image;
    const description = req.body.description;
    const price = req.body.price;
    
    const Manga = new Manga({name:name, cat:cat, link:link, image:image, description:description, price:price});
    Manga.save();
    // this should return to prev route
});

app.post('/addLightNovel', (req, res) => {
    const name = req.body.name;
    const cat =  req.body.cat;
    const link = req.body.link;
    const image = req.body.image;
    const description = req.body.description;
    const price = req.body.price;
    
    const Light = new Light({name:name, cat:cat, link:link, image:image, description:description, price:price});
    Light.save();
    // this should return to prev route
});

app.post('/addMerch', (req, res) => {
    const name = req.body.name;
    const cat =  req.body.cat;
    const link = req.body.link;
    const image = req.body.image;
    const description = req.body.description;
    const price = req.body.price;
    
    const Merch = new Merch({name:name, cat:cat, link:link, image:image, description:description, price:price});
    Merch.save();
    // this should return to prev route
});



app.get('/Manga', async (req, res) => {
    try {
        const manga = await Manga.find();
        res.json(manga); 
    } catch(error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/LightNovel', async (req, res) => {
    try {
        const lightnovel = await Light.find();
        res.json(lightnovel); 
    } catch(error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/Merrch', async (req, res) => {
    try {
        const merch = await Merch.find();
        res.json(merch); 
    } catch(error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }

});


app.get("/test", (req, res) => {
    res.json({ message: "Hello World!" });
});







app.listen(PORT, () => {
    console.log(`Server is running in Port ${PORT}`);
});
