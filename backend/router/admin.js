const express = require("express");
const Admin = require('../models/Admin')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var fetchadmin = require('../middleware/fetchadmin')

var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWTADMIN

//Route 1: Create a admin using: POST  "/api/admin/createadmin". no login require auth
router.post('/createadmin', [
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

        //create whether the admin with this email existis already
        let admin = await Admin.findOne({ email: req.body.email });
        if (admin) {
            return res.status(400).json({ error: "Sorry a Admin with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);

        const secPass = await bcrypt.hash(req.body.password, salt);
        admin = await Admin.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });
        const data = {
            admin: {
                id: admin.id
            }
        }

        const adminToken = jwt.sign(data, JWT_SECRET);

        res.json({ adminToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
});



//Route 2: Authentical a admin using: POST  "/api/admin/login". no login require auth
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
        let admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, admin.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })

        }

        const data = {
            admin: {
                id: admin.id
            }
        }
        const adminToken = jwt.sign(data, JWT_SECRET);

        res.json({ adminToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured")
    }

});


//Route 3: Get loggedin admin details using: POST "/api/admin/getadmin". Login required
router.post('/getadmin', fetchadmin, async(req, res) => {

    try {
        // console.log(req.admin.id);
        adminId = req.admin.id
        const admin = await Admin.findById(adminId).select("-password")
        res.send(admin)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured")
    }
});

module.exports = router;