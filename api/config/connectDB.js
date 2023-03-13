const mongoose = require('mongoose');


module.exports.connectDB = () => {
    mongoose.connect(process.env.Mongodb_URI)
      .then(() => console.log('Database connection Success!'))
      .catch(err => console.error("Database connection FAiled!",err));
    
    
    mongoose.connection.on('connected', ()=>{
        console.log("Mongodb connected to db!");
    })
    
    
    mongoose.connection.on('error', (err) =>{
        console.log(err.message)
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log('Mongodb connected is disconnected');
    })


    process.on('SIGINT', async () =>{
        await mongoose.connection.close();
        process.exit(0);
    })
}