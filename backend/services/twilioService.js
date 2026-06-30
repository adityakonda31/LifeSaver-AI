const twilio = require("twilio");


const client = twilio(

process.env.TWILIO_ACCOUNT_SID,

process.env.TWILIO_AUTH_TOKEN

);





const sendWhatsApp = async(
phone,
message
)=>{


try{


await client.messages.create({


from:
process.env.TWILIO_WHATSAPP_NUMBER,


to:
`whatsapp:${phone}`,


body:message



});



console.log(
"WhatsApp message sent"
);



}

catch(error){


console.log(
"Twilio Error:",
error.message
);



}



};




module.exports =
sendWhatsApp;