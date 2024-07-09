const express = require('express')
const connectDb = require('./mongodb')
const mongodb = require('mongodb')

const app = express();
app.use(express.json())
app.get('/',async (req, res)=>{
    let data = await connectDb();
    let result = await data.find().toArray();
    res.send(result)
})

app.post('/', async (req, res)=> {
    let data = await connectDb();
    let result = await data.insertOne(req.body);
    res.send(result)
    console.log(req.body)
})
app.put('/:name', async (req, res)=> {
    let data = await connectDb();
    let result = await data.updateOne(
        {name : req.body.name},
        { $set:req.body}
    );
    res.send(result)
    console.log(req.body)
})
app.delete("/:id", async (req,res)=> {
    let data = await connectDb();
    const result = await data.deleteOne({
        id: new mongodb.ObjectId(req.params.id)
    })
})
app.listen(4000)