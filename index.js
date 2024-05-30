const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://deepakyadav13012001:I40DpYwczryClB2w@user.fdoekf6.mongodb.net/?retryWrites=true&w=majority&appName=user")

const app = express();
const myserver = http.createServer(app);

const user =require('./models/usermodel');

const insert = async()=>{
    try {
        const insert1 = new user({
            name: "Ram",
            email: "ram@gmail.com",
            
        });

        const insert2 = new user({
            name: "Ram",
            email: "ram@gmail.com",
            
        });

        const insert3 = new user({
            name: "Ram",
            email: "ram@gmail.com",
            
        });

        await user.insertMany([insert1, insert2, insert3]);


    } catch (error) {
        
    }

}
insert();

myserver.listen(4000, ()=>{
    console.log("server running");
})