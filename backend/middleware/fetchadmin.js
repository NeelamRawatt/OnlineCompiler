const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWTADMIN

const fetchadmin = (req, res, next) => {
    //get the admin from jwt token and add id to req object

    const token = req.header('admin-token');
    if (!token) {
        res.status(401).send({ error: "Plese authnticate using a valid token" })
    }
    try {

        const data = jwt.verify(token, JWT_SECRET);
        req.admin = data.admin
        next()
    } catch (error) {
        res.status(401).send({ error: "Plese authnticate using a valid token" })
    }
}

module.exports = fetchadmin;