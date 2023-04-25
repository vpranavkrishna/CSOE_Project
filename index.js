const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
// const userRoute = require("./routes/users");
// const authRoute = require("./routes/auth");
// const postRoute = require("./routes/posts");

dotenv.config();
const uri = "mongodb+srv://vpranavkrishna:CSOE_23@cluster0.rqpqzbp.mongodb.net/?retryWrites=true&w=majority"
async function connect()
{
    try{
    await mongoose.connect(uri);
    console.log("Connected");
    }catch(error)
    {
         console.error(error);

    }

}

connect();

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // rest of your code here
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB', err);
//   });

// //middleware
// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});