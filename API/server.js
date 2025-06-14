const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cars = require('./models/Cars');

const app = express();  // APP MEANS SERVER APPLICATION

app.use(bodyParser.json());   // Middleware
// connet it to mongodb
mongoose.connect(
    'mongodb://localhost:27017/store',              // (give connection string/connection path)
    {   
        useNewUrlParser: true,                       // create a json object using { }
        useUnifiedTopology: true                                            
    }
). then(() => 
    console.log("Connection to MongoDB is Sucessful")
).catch((err)=>                     //.catch to handel exception
    console.error(err)
);     

// wild route
app.get('/', (req, res) => {
    res.send('Server is up and running');
})

// give port no   & // arrow fnx ()=>{}
app.listen('3000', () => 
    console.log('Server is UP & running on PORT 3000')
);      

// Creata a Car - insert a new Car   (CREATING AN API)
app.post('/cars', async (req, res)=>
    {
        try
        {
              const car  = new Cars(req.body)   // creaing an object of car
              await car.save();               //await means wait & works with async
              res.status(201).send(car);           
        }
        catch(err)
        {
            res.status(500).send(err);    //here 500 is a status code 
        }
     }
);

// Reterieving (get all product)
app.get('/cars', async (req, res)=>
    {
        try
        {
           const car =  await Cars.find();
           res.send(car);
        }
        catch(err)
        {
             res.status(500).send(err); 
        }
    }
)
// Get product by ID
app.get('/cars/:id',async (req, res)=>
    {
        try
        {
           const car =  await Cars.findById(req.params.id);
           res.send(car);
           if(!product){
            res.status(404).send("Not Found");
           }
        }
        catch(err)
        {
             res.status(500).send(err); 
        }
    }
)

//Update/PUT  API
app.put('/cars/:id',async (req, res)=>
    {
        try
        {
           const car =  await Cars.findByIdAndUpdate(req.params.id,req.body,{new:true});
           res.send(car);
           if(!product){
            res.status(404).send("Not Found");
           }
        }
        catch(err)
        {
             res.status(500).send(err); 
        }
    }
)

// Delete API
app.delete('/cars/:id',async (req, res)=>
    {
        try
        {
           const car =  await Cars.findByIdAndDelete(req.params.id);
           res.send(car);
           if(!product){
            res.status(404).send("Not Found");
           }
        }
        catch(err)
        {
             res.status(500).send(err); 
        }
    } 
)