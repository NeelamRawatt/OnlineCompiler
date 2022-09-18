const express = require("express");
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var fetchuser = require('../middleware/fetchuser')

var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT

//Route 1: Create a user using: POST  "/api/auth/createuser". no login require auth
router.post('/createuser', [
    body('name', 'Enter the valid name').isLength({ min: 3 }),
    body('email', 'Enter the valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async(req, res) => {
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        //create whether the user with this email existis already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);

        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });
        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({ authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
});



//Route 2: Authentical a user using: POST  "/api/auth/login". no login require auth
router.post('/login', [
    body('email', 'Enter the valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async(req, res) => {
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })

        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({ authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured")
    }

});


//Route 3: Get loggedin user details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async(req, res) => {

    try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured")
    }
});

module.exports = router;