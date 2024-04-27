//@ts-ignore
import User from '../model/user'
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
dotenv.config();

const createacc = async (req:Request, res:Response) => {
    try {
        //@ts-ignore
        const {email , password, name } = req.body;

        const exists =  await User.findOne({email: email});

        if(exists){

            //@ts-ignore
            res.json({message: "User already exists"})
        }
        else{
           
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
                            const token = jwt.sign({id: newuser._id,email: newuser.email,name: newuser.name},process.env.seckey,{expiresIn: 60000})
                            //@ts-ignore
                            res.json({data: user, token: token })
                        }

                    }
                }  )
            })
        }
        

        
    } catch (error) {
        //@ts-ignore
        res.json(error)
    }
}