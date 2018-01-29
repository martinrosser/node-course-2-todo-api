// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('ConnectError:', err);
    } 
    
    console.log('Connected to MongoDB');

    db.collection('Users').find({name: 'Lyra'}).toArray().then((docs) => {
        console.log('Users:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(JSON.stringify(err, undefined, 2));
    });

    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(JSON.stringify(err, undefined, 2));
    // });

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a6f0ee7c3f54601b461bc53')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(JSON.stringify(err, undefined, 2));
    // });
    
    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos:');
    //     console.log(`Count: ${count}`);
    // }, (err) => {
    //     console.log(JSON.stringify(err, undefined, 2));
    // });
    
    setTimeout(() => {
        db.close();
    }, 1000);
    //
});