const express = require("express");
const router = express.Router();
const Questions = require("../models/Questions");


//GET "/api/questions/list"
router.get('/', async(req, res) => {
    try {
        const Qlist = await Questions.find({});
        res.send(Qlist)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured at /list api")
    }
})


module.exports = router;