const express = require('express');
const PORT = 4000;
const mongoose = require("mongoose");
const student_schema = require('./student_schema');
const todosRoutes = express.Router();

const app = express();

 let student = require("./student_schema");

 /** GET All Students */

 todosRoutes.route('/').get(function(req, res){
     student_schema.find(function(err, todos){
         if(err){
             console.log(err);
             alert(err);
         }else{
             res.json(todos);
         }
        
     });
 });   


 /** Add Students */
 todosRoutes.route('/add').post(function(req, res){
     let todo = new student_schema(req.body);
     todo.save().then(todo => {
         res.status(200).json({'todo':'Student Added Successfully.'});
     }).catch(err => {
         res.status(400).send("error : " + err);
     })
 })