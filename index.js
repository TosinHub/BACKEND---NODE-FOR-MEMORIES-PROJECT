import expresss from 'express'
import bodyParser  from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'
import dotenv from 'dotenv'


const app = expresss();
app.use(cors());
dotenv.config() 



app.use(bodyParser.json({limit : "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}))


app.use('/posts', postRoutes)
app.use('/user', userRoutes)


const CONNECTION_URL = "mongodb+srv://citademy:citademy123@cluster0.ekdw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
            .then(() => app.listen(PORT , () => console.log(`Server listening on port: ${PORT}`)))
            .catch((error)=> console.log(error))



