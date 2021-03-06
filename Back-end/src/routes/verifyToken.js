const jwt = require('jsonwebtoken');


module.exports = function(req,res,next){
    const token = req.header('auth-token');
    if(!token) res.status(401).send("unauthorized")

    try{
        const verified = jwt.verify(token,process.env.JWT_TOKEN_SECRET)
        req.user = verified;
        next();
    }catch(err){
        console.log(err);
        res.status(400).send('Invalid Token')

    }

}