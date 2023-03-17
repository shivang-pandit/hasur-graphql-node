const jwt = require('jsonwebtoken');
const db = require('./db');
const { findUsers, getUsers, getTotalUser } = require('./queries');
const JWT_ENCRYPTION = 'RS512';
const JWT_EXPIRATION = '24h';


const login = async (req, res) => {
    const { username, password } = req.body.input;
    try {
        if(username !== 'admin' || password !== 'admin') {
            return res.status(400).json({ error: 'invalid credential!' });
        }
        const token = jwt.sign({
            userName: username,
            password: password,
        }, JWT_ENCRYPTION, {
            expiresIn: JWT_EXPIRATION
        });
        return res.json({ 
            token: token
        });
    } catch (err) {
        return res.status(400).json({ error: 'Something went wrong!' });
    }
};

const searchUser = async (req, res) => {
    try {
        const { radius } = req.body.input;
        if(!req.headers['auth-token']) {
            return res.status(400).json('Auth token is required!');
        }
        
        let tokenDecode = jwt.verify(req.headers['auth-token'], JWT_ENCRYPTION);
        if(!tokenDecode) {
            return res.status(400).json({ error: 'invalid token' });
        }

        if(tokenDecode.userName !== 'admin' || tokenDecode.password !== 'admin') {
            return res.status(400).json({ error: 'invalid token' });
        }

        const result = await db.query(findUsers, [radius]);
    
        return res.json(result.rows);
        
    } catch (err) {
        return res.status(400).json({ error: 'invalid token' });
    }
};

const userList = async (req, res) => {
    try {
        const { limit, page } = req.body.input;
        if(!req.headers['auth-token']) {
            return res.status(400).json('Auth token is required!');
        }

        let tokenDecode = jwt.verify(req.headers['auth-token'], JWT_ENCRYPTION);
        if(!tokenDecode) {
            return res.status(400).json({ error: 'invalid token' });
        }
    
        if(tokenDecode.userName !== 'admin' || tokenDecode.password !== 'admin') {
            return res.status(400).json({ error: 'invalid token' });
        }
    
        const offset = (page === 0 || page === 1) ? page : (page - 1)* limit;
        const totalUser = await db.query(getTotalUser);
        const result = await db.query(getUsers, [limit, offset]);
        
        return res.json({
            total: totalUser.rows[0].count,
            userDetails: result.rows
        });
        
    } catch (err) {
        return res.status(400).json({ error: 'invalid token' });
    }
};

module.exports = {
    login,
    searchUser,
    userList,
}