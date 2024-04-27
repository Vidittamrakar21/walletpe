import express , {Request, Response } from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config();

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

app.get('/',(req:Request,res: Response)=>{

        res.json({message: "server is breathing"})
})


app.listen(8000, ()=>{
    console.log("server started")
})