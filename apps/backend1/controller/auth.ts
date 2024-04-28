//@ts-ignore
import User from '../model/user'
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
dotenv.config();

const createacc = async (req:Request, res:Response) => {
    try {
        //@ts-ignore
        const {email , password, name , gprovider } = req.body;

        const exists =  await User.findOne({email: email});

        if(exists){

            //@ts-ignore
            res.json({message: "User already exists"})
        }
        else{
           
            if(password && gprovider === false){
                bcrypt.genSalt(10, (err,salt)=> {
                
                    const encryptpass  = bcrypt.hash(password,salt,async (err, hash)=>{
                        if(err){
                            //@ts-ignore
                            res.json({"message": "error occured while signing user"})
                        }
                        else{
    
                            const newuser  = await User.create({email: email, password: hash, name: name})
                            
                             
    
                            if(newuser){
                                //@ts-ignore
                                const token = jwt.sign({id: newuser._id,email: newuser.email,name: newuser.name},process.env.seckey,{expiresIn: "60000"})
                                //@ts-ignore
                                res.json({data: newuser, token: token })
                            }
    
                        }
                    }  )
                })
            }

            else if(gprovider === true && password === ""){
                const newuser  = await User.create({email: email, name: name , gprovider: gprovider})
                if(newuser){
                    //@ts-ignore
                    const token = jwt.sign({id: newuser._id,email: newuser.email,name: newuser.name},process.env.seckey,{expiresIn: "60000"})
                    //@ts-ignore
                    res.json({data: newuser, token: token })
                }            
                             
    
                        
            }
        }
        

        
    } catch (error) {
        //@ts-ignore
        res.json(error)
    }
}


const loginacc = async (req:Request, res:Response) => {
    try {
        //@ts-ignore
        const {email , password } = req.body;

        const exists =  await User.findOne({email: email});

        if(exists){

            if(exists.password !== ""){

                const check = await bcrypt.compare(password,exists.password );

                if(check === false){
                     //@ts-ignore
                      res.json({message: "Invalid Email or Password"})
                }

                else{

                    
                    //@ts-ignore
                    const token = jwt.sign({id: exists._id,email: exists.email,name: exists.name},process.env.seckey,{expiresIn: "60000"})
                    //@ts-ignore
                    res.json({data: exists, token: token })
                

                }

           
            }

            else if (exists.gprovider === true){

                //@ts-ignore
                const token = jwt.sign({id: exists._id,email: exists.email,name: exists.name},process.env.seckey,{expiresIn: "60000"})
                //@ts-ignore
                res.json({data: exists, token: token })
            

            }

        }
        else{

              //@ts-ignore
              res.json({message: "User doesn't exists"})
          

           
        }
        

        
    } catch (error) {
        //@ts-ignore
        res.json(error)
    }
}


const createsession = (req: Request, res: Response) => {
    try {
      
        const {token}:any = req.body;

        if(token){

            //@ts-ignore
            const check =  jwt.verify(token, process.env.seckey)
            if(check){
                 //@ts-ignore
                 const token = jwt.sign({id: check.id ,email: check.email,name: check.name},process.env.seckey,{expiresIn: "36h"})
              
                
                // @ts-ignore
                res.json({refreshtoken: token, status: check})
            }
            else{
                //@ts-ignore
                res.json({status: "expired" })
            }

        }


        
    } catch (error) {
         //@ts-ignore
         res.json(error)
    }
}


const verifytoken = (req: Request, res: Response) => {
    try {
      
        const {token}:any = req.body;

        if(token){

            //@ts-ignore
            const check =  jwt.verify(token, process.env.seckey)
            if(check){
               
                
                // @ts-ignore
                res.json({status: check})
            }
            else{
                //@ts-ignore
                res.json({status: "expired or malformed" })
            }

        }


        
    } catch (error) {
         //@ts-ignore
         res.json(error)
    }
}



module.exports = {createacc, createsession, verifytoken, loginacc}