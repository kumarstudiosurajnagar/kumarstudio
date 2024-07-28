const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9506932072";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_02_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4LFxuICAgICAgICA2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMixcbiAgICAgICAgMTM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDcwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIldhSG03RENWVG1MemJ0NVlLRDJnaTNBa2hZc2FnUzJCMW5PYll5S2xtL2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImV0S2FoLUNUUzhXSk15azY4WTJhZ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2JkNGJkMjctNmI2Ny00YTAwLTkxNzItMjQxNTg5ZjI3MTc5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDIxNCxcbiAgICAgIDg2LFxuICAgICAgMjI5LFxuICAgICAgMTcsXG4gICAgICA5NCxcbiAgICAgIDgyLFxuICAgICAgMTA2LFxuICAgICAgMTMwLFxuICAgICAgMTU2LFxuICAgICAgMjA4LFxuICAgICAgMjM1LFxuICAgICAgMjEzLFxuICAgICAgMjM5LFxuICAgICAgNCxcbiAgICAgIDIwNCxcbiAgICAgIDEzMCxcbiAgICAgIDE0OSxcbiAgICAgIDE3NSxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAxNjIsXG4gICAgICA4MCxcbiAgICAgIDUxLFxuICAgICAgMjQ5LFxuICAgICAgMjMxLFxuICAgICAgNjQsXG4gICAgICAxOTQsXG4gICAgICAyMyxcbiAgICAgIDExMCxcbiAgICAgIDE4NixcbiAgICAgIDE2MCxcbiAgICAgIDkxLFxuICAgICAgMjAsXG4gICAgICA4NSxcbiAgICAgIDg3LFxuICAgICAgMTk5LFxuICAgICAgMTMsXG4gICAgICAxOTEsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSllGQllHVkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTUwNjkzMjA3Mjo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImt1bWFyc3R1ZGlvc3VyYWpuYWdhclwiLFxuICAgIFwibGlkXCI6IFwiMjMwMzI2MzExODcwNTAyOjY5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvWDBwNEZFSWUrbDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZWpiUU5Sb0U2aHlHZTU4cHovR1dEZUJEc2x1cTRadExKUklMY1lNeEszcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHV2d0VjhiVzdtc0VWb3VVWmdEd1FtN1NJQ2ZGbEJDWTRtVUJOL3ZiemtVTVJGOCt1NWRMZ2lkMGF2OVhiR1h3eHp4UW05dXNCTTZJV1lHY2gwMXJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpb04vMkk2NDVkVDRoZHFIejVwZld0MDEzY2cxSnZIUjdrR214akJVby9DblVuelNDVFYzVmNIMUp2VHNITEVIR0FGMVUzYUN6ZTJwVklobERLbXZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk1MDY5MzIwNzI6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE0NjU3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpFSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkVKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVjVnV3dvTXRXaEtrTllYM3RwZmc2WE9BOUdIcHhSaG1ndlNiS1pXcHhuMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDA2NDQ2NDc4LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
