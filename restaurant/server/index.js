const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const RegisterRouter = require('./src/router/RegisterRouter')
const AdminRouter = require('./src/router/AdminRouter')
const app = express()
app.use(express.static('./public/'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use('/save', RegisterRouter)
app.use('/admin',AdminRouter)

const connectionString = 'mongodb+srv://safwanpm0:safwanpm0@cluster0.dk6pqys.mongodb.net/RestaurantDB?retryWrites=true&w=majority'
mongoose.connect(connectionString).then(() => {
  app.listen(4000, () => {
    console.log("server start at http://localhost:4000");
  })
}).catch((error) => {
  console.log("mongoDB connection error");
})


