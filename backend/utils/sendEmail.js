import nodemailer from "nodemailer";
import {google} from "googleapis";



export const sendEmail = async (from,to,subject,message,reply)=>{
    try{
        //creating OAuth2 Client
        const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URI);
        
        // setting the refresh_token
        oAuth2Client.setCredentials({refresh_token:process.env.REFRESH_TOKEN});
        
        //refresh token is used to get the acces token acces token expires quickly
        const accessToken = await oAuth2Client.getAccessToken();
        
        console.log("Here");
        // creating transport
        const transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                type:'OAuth2',
                user:process.env.USER,
                clientId:process.env.CLIENT_ID,
                clientSecret:process.env.CLIENT_SECRET,
                refreshToken:process.env.REFRESH_TOKEN,
                accessToken:accessToken
            }
        });

        // options of the email
        const mailOptions = {
            from:from,
            to:to,
            subject:subject,
            html:message,
            replyTo:reply
        };

        // sending the email
        const result = await transport.sendMail(mailOptions);
        console.log(result);
        return {
            success:true,
            data:result
        }
    }
    catch(err){
        // console.log(err);
        return {
            success:false,
            data:err
        }
    }
}