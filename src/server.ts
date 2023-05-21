import mongoose from "mongoose"
import app from "./app";


const port: number = 5000



async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('Database connect successfully')
        app.listen(port, () => {
            console.log(`Server Running on Port ${port}`)
        })
    } catch (err) {
        console.log('faild to connect databae', err)
    }
}


bootstrap()





