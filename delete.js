const connectDb = require('./mongodb');

const deleteData = async () => {
    let db = await connectDb();
    let res = await db.deleteOne({
        name : "Iaayush"
    });
}

deleteData();