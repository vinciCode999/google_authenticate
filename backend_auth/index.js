import express from 'express'
import { configDotenv } from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import colors from 'colors'
import mongoose from 'mongoose'
configDotenv()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))

mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log(`mongodb connected`.bgYellow)
    app.listen(process.env.PORT, ()=>{
      console.log(`server running on port ${process.env.port}`.bgMagenta)
    })
  }).catch((error)=>{
    console.log(error)
  })
