import { CustomApiError } from "../errors/index.js";
import HttpStatusCode from 'http-status-codes'
import jwt from 'jsonwebtoken';
const auth = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomApiError('Unauthorized',HttpStatusCode.UNAUTHORIZED);
    }
    const token = authHeader.split(' ')[1];
    try{
    const payload = jwt.verify(token,process.env.JWT_SECRET);
    req.user = payload;
    next();
    }catch(error){
        throw new CustomApiError('Unauthorized',HttpStatusCode.UNAUTHORIZED);
    }
}

export default auth;