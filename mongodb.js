const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='practice'
const client= new MongoClient(url);

async function connectDb()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('users');
}

module.exports = connectDb;

// way1
// connectDb().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.log(data)
//     });
// });