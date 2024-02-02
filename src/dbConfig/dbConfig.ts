const mongoose = require('mongoose')

export const connect =async () => {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log("MongoDB connected succesfully!")
        })

        connection.on('error',(err : Error)=>{
            console.log('Error while connecting DB '+err)
        })

    } catch (error) {
        console.log("Error while connecting to database")
        console.log(error)
    }
}