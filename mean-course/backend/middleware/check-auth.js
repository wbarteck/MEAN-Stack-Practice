const jwt = require('jsonwebtoken');

module.exports = (requestAnimationFrame, res, next) => {
  try {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    //verify token
    jwt.verify(token, 'secret_this_should_be_longer');
    next();
  } catch (error) {
    res.status(401).json({message: 'failed auth a4123e', ohno: error});
  }
}
