//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(`obj = ${obj}`);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log(`Error: Unable to connect to MongoDB Server: ${err}`);
    }

    console.log('Connected to MongoDB');

    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     //console.log(JSON.stringify(result, undefined, 2));
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     //console.log(JSON.stringify(result, undefined, 2));
    //     console.log(result);
    // });

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     //console.log(JSON.stringify(result, undefined, 2));
    //     console.log(result);
    // });

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log(`Insert failed: ${err}`);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // db.collection('Users').insertOne({
    //     name: 'Lyra',
    //     age: 2,
    //     location: 'floor'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log(`Insert failed: ${err}`);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    setTimeout(() => {
        db.close();
    }, 1000);
});