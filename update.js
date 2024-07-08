const connectDb = require('./mongodb');

const update = async () => {
    let data = await connectDb();
    let res = await data.updateOne(
        {name : "Ayush"},
        {
            $set: {
                name : "Axay"
            }
        }
    )
}

update();