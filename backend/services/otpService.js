const twilio=require("twilio");


const client =
twilio(

process.env.TWILIO_ACCOUNT_SID,

process.env.TWILIO_AUTH_TOKEN

);




exports.sendOTP =
async(phone,otp)=>{


await client.messages.create({

from:
process.env.TWILIO_WHATSAPP_NUMBER,


to:
`whatsapp:${phone}`,


body:

`Your LifeSaver AI verification code is ${otp}`


});


}