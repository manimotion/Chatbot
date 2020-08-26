'use strict'

const vpn = require('.')({
    server: '200.21.240.131',
    username: 'jmorjuelaor',
    password: 'SEP_2020'
})

vpn.connect()
    .then(() => console.log('connected!'))
    .then(vpn.disconnect)
    .then(() => console.log('disconnected!'))
    .catch(err => console.error(err))
