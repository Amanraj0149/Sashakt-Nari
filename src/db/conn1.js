const mongoose = require("mongoose")
mongoose.connect(process.env.url).then(()=>{
    console.log("Mongodb connected at port number 27017")
}).catch((e)=>{
    console.log(e)
})