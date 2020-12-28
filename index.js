const express = require("express");
const userRoutes = require("./routes/user");
const app = express();
const port = 5555;

const db = require("./models");

app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/",userRoutes);

app.listen(port, ()=>{
    console.log(`Server connected at port ${port}`);
});

db.sequelize.sync({force:true})
.then(()=>{
    console.log("Database connect...");
})
.catch(error =>{
    console.log(error);
});
