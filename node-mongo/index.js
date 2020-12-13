const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbop = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err,client)=>{
    assert.equal(err, null);

    console.log('Connected correctly to the server');

    const db = client.db(dbname);
    
    dbop.insertDocument(db, {name: "Vadounut", description: "Test"}, 'dishes', (result)=>{

        console.log('Insert Document:\n', result.ops);

        dbop.findDocument(db, 'dishes', (docs)=>{
            console.log('Found Documents:\n', docs);

            dbop.updateDocument(db, {name: "Vadounut"},
                 {description:"Update Test"}, "dishes",
                 (result)=>{
                console.log("Updated Document\n", result.result);

                dbop.findDocument(db, 'dishes', (docs)=>{
                    
                    console.log('Found Documents:\n'.docs);

                    db.dropCollection('dishes', (result)=>{

                        console.log('Dropped Collection: ', result);

                        client.close();

                    });
                });
            });
        });
    });
});