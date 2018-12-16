const jwt = require('jsonwebtoken')

module.exports.veryfyToken = (req, res, next) => {
    console.log('req.headers.token: ', req.headers.token)
    jwt.verify(req.headers.token, '12342314123y4hrsladjkjf;jsfd;ajstqw4129i571h2uwfjaskf!@#@$#ˆ$&*(Wsaf gohqo34151%#!$#ˆ@$%ˆ$#%$ˆ#U$ˆWESDFBXSV56', function (err, decoded) {
        if (err) res.send(err).status(401)
        req.userDecoded = decoded
        next()
    })
}

