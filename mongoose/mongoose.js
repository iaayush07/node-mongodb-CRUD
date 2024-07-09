const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/practice');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
});

const User = mongoose.model('users', userSchema);

// const saveInDB = async () => {
//     try {
//         await User.init(); // Ensure indexes are created
//         let data = new User({
//             name: "Anjali",
//             email: "anjali@email.com",
//             age: 20
//         });
//         let result = await data.save();
//         console.log(result);
//     } catch (error) {
//         console.error('Error saving data:', error.message);
//     }
// }

// saveInDB();

// const updateInDb = async () => {
//     const userModel = mongoose.model('users', userSchema);
//     let data = await userModel.updateOne({
//         email: "anjali@email.com"
//     },
//         {
//             $set: { name: "Anjalliii" }
//         }
//     )
//     console.log(data)
// }
// updateInDb();

// const deleteInDb = async () => {
//     const userModel = mongoose.model('users', userSchema);
//     let data  = await userModel.deleteOne({
//         name: "Anjalliii"
//     })
//     console.log(data)
// }
// deleteInDb();

const findDb = async () => {
    const userModel = mongoose.model('users', userSchema);
    let data  = await userModel.find({
        name : "Aman"
    })
    console.log(data)
}
findDb();


