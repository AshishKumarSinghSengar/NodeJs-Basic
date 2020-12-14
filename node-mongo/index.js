const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbop = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url).then((client)=>{
    assert.equal(err, null);

    console.log('Connected correctly to the server');

    const db = client.db(dbname);
    
    dbop.insertDocument(db, {name: "Vadounut", description: "Test"}, 'dishes')
     .then((result)=>{

        console.log('Insert Document:\n', result.ops);

        dbop.findDocument(db, 'dishes')
        
     })
        .then((docs)=>{
            console.log('Found Documents:\n', docs);

           return dbop.updateDocument(db, {name: "Vadounut"},
                 {description:"Update Test"}, "dishes")
        })
    .then((result)=>{
                console.log("Updated Document\n", result.result);

            return dbop.findDocument(db, 'dishes')
    })
    .then((docs)=>{
                    
                    console.log('Found Documents:\n'.docs);

                return db.dropCollection('dishes')
    })
    .then((result)=>{

        console.log('Dropped Collection: ', result);

                        client.close();

        }).catch((err) => console.log(err));
})
.catch((err) => console.log(err));