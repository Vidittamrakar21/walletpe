import express , {Request, Response } from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import cors from 'cors'
dotenv.config();
//@ts-ignore
import authrouter from './routes/auth'

const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.dbpass}@cluster0.uzdko06.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Database Connected");
  }

app.use('/api/auth', authrouter)

app.get('/',(req:Request,res: Response)=>{

        res.json({message: "server is breathing"})
})


app.listen(8000, ()=>{
    console.log("server started")
})