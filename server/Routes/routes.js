const express = require('express');
const router = express.Router();
const { authenticateUser, addManga, addLightNovel, addMerch, getManga, getLightNovel, getMerch} = require ('../controllers/prodController');

// Logging the user(need a db to store)
router.use('/Login', (req, res, next) => {
    const username = req.username || 'Unknown User';
    console.log(`Incoming Request for /Loginby ${username}: ${req.method} ${req.url}`);
    next();
});

router.get('/adomino', authenticateUser, (req,res) => {
    res.redirect("/?");//idk where
});

router.post('/addManga', addManga);
router.post('/addLightNovel', addLightNovel);
router.post('/addMerch', addMerch);

router.get('/Manga', getManga);
router.get('/LightNovel', getLightNovel);
router.get('/Merch', getMerch);


module.exports = router;