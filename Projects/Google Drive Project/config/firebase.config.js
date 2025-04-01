const Firebase = require('firebase-admin')

const serviceAccount = require('../drive-5e9eb-firebase-adminsdk-fbsvc-fce974ab0c.json')

const firebase = Firebase.initializeApp({

credential: Firebase.credential.cert(serviceAccount),
storageBucket: 'link from firebase bucket' 


})


module.exports = Firebase

