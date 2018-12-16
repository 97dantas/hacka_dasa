module.exports = app => {
    const Crypto = require('./../../helpers/crypto')
    const errorSistem = require('../../errors/system/error')
    const cryptoPassword = password => Crypto.md5(password)
    const bcrypt = require('bcryptjs')

    return {
        create: async user => {
            try {
                // user.password = await bcrypt.hash(user.password, 10)
                return Promise.resolve(user)
            } catch (err) {
                return Promise.reject(errorSistem.dataProcessing)
            }
        },
        update: user => new Promise((resolve, reject) => {
            try {
                if (user.password) user.password = cryptoPassword(user.password)
                resolve(user)
            } catch (err) {
                reject(errorSistem.dataProcessing)
            }
        })
    }
}
