// ROUTES FOR OUR API
const express = require('express');
const router = express.Router();
const { authenticateUser, addManga, addLightNovel, addMerch, getManga, getLightNovel, getMerch} = require ('../controllers/prodController');

// Logging the user(need a db to store)
// router.use('/authentication', (req, res, next) => {
//     const username = req.username || 'Unknown User';
//     console.log(`Incoming Request for /Loginby ${username}: ${req.method} ${req.url}`);
//     next();
// });

router.post('/authenticate', authenticateUser, (req,res) => {
    console.log("Authentication middleware succeeded");
    res.status(200).json({ redirectTo: "/addWhat" });
});

router.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
})

router.post('/addManga', addManga);
router.post('/addLightNovel', addLightNovel);
router.post('/addMerch', addMerch);

router.get('/manga', getManga);
router.get('/lightnovel', getLightNovel);
router.get('/merch', getMerch);


module.exports = router;