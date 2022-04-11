import expresss from 'express'
import bodyParser  from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'


const app = expresss();
app.use(cors());
dotenv.config()



app.use(bodyParser.json({limit : "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}))


app.use('/posts', postRoutes)



const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_UTL, {useNewUrlParser: true, useUnifiedTopology:true})
            .then(() => app.listen(PORT , () => console.log(`Server listening on port: ${PORT}`)))
            .catch((error)=> console.log(error))



