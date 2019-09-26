//CRUD OPERATIONS-create,read,update,delete

const { MongoClient, ObjectID} = require('mongodb')


const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
MongoClient.connect(connectionURL, {useNewUrlParser : true}, (error, client) => { 
    if(error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    
})

 


