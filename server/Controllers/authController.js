const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { username, password, profile_pic } = req.body; 
    const db = req.app.get('db'); 
    const foundUser = await db.find_user([username])

    if(foundUser[0]) {
        return res.status(409).send('Sorry, username is already taken'); 
    }

    const passwordSalt = bcrypt.genSaltSync(15);
    const passwordHash = bcrypt.hashSync(password, passwordSalt); 
    const newUser = await db.register_user([username, passwordHash, profile_pic]); 
    delete newUser[0].password;
    req.session.userid = newUser[0].id;

    res.status(200).send(newUser[0]); 
}; 

const login = async (req, res) => {
    const { username, password } = req.body; 
    const db = req.app.get('db'); 
    const foundUser = await db.find_user([username]);

    if(!foundUser[0]) {
        return res.status(403).send('Invalid credentials, please try again.')
    }; 

    const authedPassword = bcrypt.compareSync(password, foundUser[0].password); 

    if(authedPassword) {
        delete foundUser[0].password;
        req.session.userid = foundUser[0].id;

        res.status(200).send(foundUser[0]); 
    }
    else {
        res.status(401).send('Invalid credentials, please try again.'); 
    };
};

const logout = (req, res) => {
    req.session.destroy();
    res.send('user logged out')
}

module.exports = {
    register,
    login,
    logout
}