import expresss from 'express'
import bodyParser  from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'


const app = expresss();

app.use(bodyParser.json({limit : "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}))


app.use(cors());

const connection_url = "mongodb+srv://citademy:citademy123@cluster0.ekdw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology:true})
            .then(() => app.listen(PORT , () => console.log(`Server listening on port: ${PORT}`)))
            .catch((error)=> console.log(error))



