// CONTROLLER
const { Admin, Manga, Light, Merch } = require("../Schemas/schemas");

exports.authenticateUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username, password });
        if (admin) {
            console.log(`Log in successful for username: "${username}" & password: "${password}"`);
            console.log("Authorized");
            res.redirect("/addWhat");
        } else {
            console.log(`Log in failed for username: "${username}" & password: "${password}"`);
            res.status(401).json({ message: "Unauthorized" });
            console.log("Unauthorized");
        }
    } catch (error) {
        console.error("Error in authentication:", error);
        res.status(500).send("Internal Server Error");
    }
};

// exports.addManga = (req, res) => {
//     const name = req.body.name;
//     const cat = req.body.cat;
//     const link = req.body.link;
//     const image = req.body.image;
//     const description = req.body.description;
//     const price = req.body.price;

//     const newManga = new Manga({ name: name, cat: cat, link: link, image: image, description: description, price: price });
//     newManga.save();
//     // this should return to prev route
// };

// exports.addLightNovel = (req, res) => {
//     const name = req.body.name;
//     const cat = req.body.cat;
//     const link = req.body.link;
//     const image = req.body.image;
//     const description = req.body.description;
//     const price = req.body.price;

//     const newLight = new Light({ name: name, cat: cat, link: link, image: image, description: description, price: price });
//     newLight.save();
//     // this should return to prev route
// };

// exports.addMerch = (req, res) => {
//     const name = req.body.name;
//     const cat = req.body.cat;
//     const link = req.body.link;
//     const image = req.body.image;
//     const description = req.body.description;
//     const price = req.body.price;

//     const newMerch = new Merch({ name: name, cat: cat, link: link, image: image, description: description, price: price });
//     newMerch.save();
//     // this should return to prev route
// };

// exports.getManga = async (req, res) => {
//     try {
//         const manga = await Manga.find();
//         res.json(manga);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Internal Server Error');
//     }
// };

// exports.getLightNovel = async (req, res) => {
//     try {
//         const lightnovel = await Light.find();
//         res.json(lightnovel);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Internal Server Error');
//     }
// };

// exports.getMerch = async (req, res) => {
//     try {
//         const merch = await Merch.find();
//         res.json(merch);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Internal Server Error');
//     }
// };
