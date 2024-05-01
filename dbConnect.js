// const mongoose = require("mongoose");


// module.exports = ()=>{

//     const Url ="mongodb+srv://bipashamalik1:JzQocPWss8JijwjA@cluster0.xkrw5z1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//     mongoose.connect(Url).then(()=>{console.log("i am very happy ,it is connected ")})
//     .catch((err)=>{console.log("errorr")})
   
// }

const mongoose = require('mongoose');

module.exports =()=>{
    // MongoDB Atlas connection string
const atlasUri = "mongodb+srv://bipashamalik1:JzQocPWss8JijwjA@cluster0.xkrw5z1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
mongoose.connect(atlasUri)
.then(() => {
  console.log('MongoDB connected');
})
.catch((err) => {
  console.error('MongoDB connection error:', err.message);
});
}

