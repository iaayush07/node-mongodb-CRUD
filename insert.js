const connectDb = require('./mongodb');

const insert = async () => {
    const db = await connectDb();
    console.log(db);
    // For multiple : use insertMany()
    const res = await db.insertOne(
        {
            name : "Iaayush",
            email : "iaayush@email.com",
            age : 21
        }
    )
    console.log(res);
}

insert();