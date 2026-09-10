const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes.js")
const productRoute = require("./routes/ProductRoutes.js")
const compass_string = "mongodb://localhost:27017/cohort8_db";
const atlas_string = "mongodb+srv://paulalex626_db_user:paulalex626@cluster0.v7guqo3"

mongoose.connect(compass_string,)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("Connection error: ", err));


const app = express();          
const port = 5555           

app.use(express.json());                
app.use("/products", productRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use("/users" , userRouter)
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});

