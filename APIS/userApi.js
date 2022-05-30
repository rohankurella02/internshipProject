//create router to handle user api reqs
const exp = require("express");
const userApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
//import bcryptjs for password hashing
const bcryptjs = require("bcryptjs");
//import jsonwebtoken to create token
const jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyToken=require('./middlewares/verifyToken')

var cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

//config cloudinary storage
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "userimages",
      public_id: file.fieldname + "-" + Date.now(),
    };
  },
});

//configure multer
var upload = multer({ storage: cloudinaryStorage });

//to extract body of request object
userApp.use(exp.json());
userApp.use(exp.urlencoded());

//USER API Routes

//create route to user login
userApp.post(
  "/login",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //get user credentials obj from client
    let userCredObj = request.body;
    //seacrh for user by username
    let userOfDB = await userCollectionObject.findOne({
      Name: userCredObj.Name,
    });
    //if username not existed
    if (userOfDB == null) {
      response.send({ message: "Invalid user" });
    }
    //if username existed
    else {
      //compare passwords
      let status = await bcryptjs.compare(
        userCredObj.Password,
        userOfDB.Password
      );
      //if passwords not matched
      if (status == false) {
        response.send({ message: "Invalid password" });
      }
      //if passwords are matched
      else {
        //create token
        let token = jwt.sign(
          { Name: userOfDB.Name },
          process.env.SECRET_KEY,
          { expiresIn: 300 }
        );
        //send token
        response.send({
          message: "success",
          payload: token,
          userObj: userOfDB,
        });
      }
    }
  })
);

//create a route to 'post-user'
userApp.post(
  "/post-user",
  upload.single("photo"),
  expressAsyncHandler(async (request, response) => {
    
      //get userCollectionObject
      let userCollectionObject = request.app.get("userCollectionObject");
      //get userObj as string from client and convert into object
      let newUserObj = JSON.parse(request.body.data);
      //seacrh for user by username
      let userOfDB = await userCollectionObject.findOne({
        Name: newUserObj.Name,
      });
      //if user existed
      if (userOfDB !== null) {
        response.send({
          message: "Username has already taken..Plz choose another",
        });
      }
      //if user not existed
      else {
        //hash password
        let hashedPassword = await bcryptjs.hash(newUserObj.Password, 6);
        //replace plain password with hashed password in newUserObj
        newUserObj.Password = hashedPassword;
        //add profile image link to newUserObj
        newUserObj.profileImg=request.file.path;
        //remove photo property
        delete newUserObj.photo;
        //insert newUser
        await userCollectionObject.insertOne(newUserObj);
        //send response
        response.send({ message: "New user created" });
      }
  })
);


//private route for testing
userApp.get('/test',verifyToken,(request,response)=>{
  response.send({message:"This reply is from private route"})
})

//export userApp
module.exports = userApp;