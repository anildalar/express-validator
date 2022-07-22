
//const something = require('somelibaray')

const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

//const { namedImport } = require('somelibary')
//const defaultImport  = require('somelibary')
const { body,validationResult } = require('express-validator')

let PORT = process.env.PORT;


//app.METHOD(PATH,HandlerFunction);

//app.method();
app.post('/students',body('emailaddr').isEmail(),(req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        //True
        res.status(400).json({
            "err":errors.array()
        });
    }

    console.log(errors);

    console.log(req.body.email);
    res.status(200).json({
        msg:"OK",
        data:req.body.email
    });
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});
