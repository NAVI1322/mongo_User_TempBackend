import nodemailer from "nodemailer";
import express, { Router } from 'express'

const router = Router()

const app = express();

const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "rksharma041976@gmail.com",
      pass: "zdzcqsvgdczvmodw",
    },
  });
  
  
  router.get("/Email", (req, res) => {
    const receiver = {
      from: "rksharma041976@gmail.com",
      to: "sanchusanchita77@gmail.com",
      subject: "Periods Info",
      html: `<h1><p><center>Good night my Love 
       you are my sweet heart</center></p></h1>`
    };
  
   try{
    auth.sendMail(receiver, (error:any, emailResponse:any) => {
        if (error) throw error;
    
        console.log("success!");
    
  
      });
   }
   catch(e)
   {
    console.log("Error : " + e)
   }
  });

  export default router;