const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "bothosting.net"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347018029493";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347018029493";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_47_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICA3MCxcbiAgICAgICAgODksXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDY2LFxuICAgICAgICA3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICA5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICA1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDk5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg0LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDY4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWG9OQkpQd0xTSnVPMTFqdVFMK0FoRWE0MGRrdnVIQi9pOFo5a0NIdVJyOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDE4MDI5NDkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NjNEQzhFOTdENDE1NzlGNkZDNTgxODAwQUVEMTYwQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM5NTcyMzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMWJxby11ZEZTNXVBWTREZWNONEtTQVwiLFxuICBcInBob25lSWRcIjogXCJhZDA0MGRjOC1mOTFlLTQ2NDktYThkNS0wNzUxNGM4NzI4MzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTM4LFxuICAgICAgMjAzLFxuICAgICAgMTQ2LFxuICAgICAgNjUsXG4gICAgICAxNjMsXG4gICAgICAyMDYsXG4gICAgICAxMzEsXG4gICAgICAyNDAsXG4gICAgICA2MSxcbiAgICAgIDkzLFxuICAgICAgMjQzLFxuICAgICAgMjIxLFxuICAgICAgMTA0LFxuICAgICAgNDksXG4gICAgICAyMDIsXG4gICAgICAzNCxcbiAgICAgIDcwLFxuICAgICAgNjYsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMTA1LFxuICAgICAgMjU0LFxuICAgICAgNDQsXG4gICAgICAxNzksXG4gICAgICAyMDUsXG4gICAgICAxNDksXG4gICAgICA0MyxcbiAgICAgIDE1NCxcbiAgICAgIDYyLFxuICAgICAgMTE4LFxuICAgICAgOTksXG4gICAgICAxNzIsXG4gICAgICAyMTMsXG4gICAgICAyMzUsXG4gICAgICAxNixcbiAgICAgIDUxLFxuICAgICAgMjUzLFxuICAgICAgMTIsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUEI0SDFOSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxODAyOTQ5Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzMxNjUwNzg2NDY4NDA6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeit0Sk1ERU9lczZMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjl4UlFkQWdmNllvSnVoWjBKRXpGWFdMQ09ET01KUlRaVXhmdXdreTZVbTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidnNpR2RqMnZ5ZkJ6V1Y5d1hJSHBmMVJCUzdqOTFaS0pjdTVVTEhubVgweGNxTTI4RVB2ckowZTZHcmErR1JPekJxMkQzZFlDaFBBbi9DWjBTVCt4Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQXhWbDlYYWh6elhzaUJ1RFd3ampxSmJZMlhTRUhEWXZyazB4WXpXa3NPdWNjNy9QMnJMcWNtYnpHV3FZRWNoVENScUh4RjgxMGpYYWNuVnoxTFFWRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxODAyOTQ5Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzk1NzIyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdhK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2ErLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVmJZY1hhd0JBYUpBZTVZelVjZS96enF4QVVVUlkyQ1dYU3JvRTJOZ1RoVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NDYwMjA0NzUsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
