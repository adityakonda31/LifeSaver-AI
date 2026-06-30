const {google}=require("googleapis");



exports.createCalendarEvent = async(task)=>{


const auth =
new google.auth.GoogleAuth({

scopes:[

"https://www.googleapis.com/auth/calendar"

]

});



const calendar =
google.calendar({

version:"v3",

auth

});




await calendar.events.insert({


calendarId:"primary",


requestBody:{


summary:
task.title,


description:
task.description,


start:{

dateTime:
task.deadline

},


end:{

dateTime:

new Date(

new Date(task.deadline)
.getTime()
+
60*60*1000

)

}



}



});



console.log(

"Calendar Event Added"

);


}