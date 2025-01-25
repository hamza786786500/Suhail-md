const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_15_08_01_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc1LFxuICAgICAgICA4MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgOCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDUsXG4gICAgICAgIDM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDc0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFUEkxYjZYcm1CMTJHeTBsOXVpRXdFNGZUaWZZNmFOTmMvN0pDcVVjdkNrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLdkQ1VmFWUVNNaWNWbjZYOEw3UmNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwYjMzMTA4LTgwZTktNDM1ZC1hMGRhLWVlNzc1NDdhMjI3N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAzNixcbiAgICAgIDEyNSxcbiAgICAgIDE3LFxuICAgICAgMTY4LFxuICAgICAgMTEzLFxuICAgICAgOTcsXG4gICAgICA1NyxcbiAgICAgIDIxMixcbiAgICAgIDY1LFxuICAgICAgNDMsXG4gICAgICAxMjQsXG4gICAgICAyNyxcbiAgICAgIDE1MyxcbiAgICAgIDcyLFxuICAgICAgMTU5LFxuICAgICAgNzYsXG4gICAgICAzMyxcbiAgICAgIDEwLFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDIyNSxcbiAgICAgIDIyNSxcbiAgICAgIDc3LFxuICAgICAgNDUsXG4gICAgICAxNTgsXG4gICAgICA2NyxcbiAgICAgIDQ0LFxuICAgICAgMjE3LFxuICAgICAgMTg2LFxuICAgICAgMTEyLFxuICAgICAgNjEsXG4gICAgICA4NixcbiAgICAgIDIxMCxcbiAgICAgIDE4OCxcbiAgICAgIDMxLFxuICAgICAgODcsXG4gICAgICA5OCxcbiAgICAgIDE5MCxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKRkM4UTNYQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDU0ODQwMDk4OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4riZIPCThqnDkOKxpCDipLnwnZCAzrLKiyDKkeqqluKxpPCThqpcIixcbiAgICBcImxpZFwiOiBcIjE4MzE1OTExNTI3NjI4ODoyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdTUwNlFCRVBQODA3d0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhhcTlOb2dVVHRxc29vdEJLSWVVRkh0QndlQWEwc2pjQW9pUjZwOFpuRnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYk1rTnlLYWtkY2ZYRnI1VXcycFNha243SXJxdjRoR0dMVDVxS25sL05yTzFhQVVFTjluc3dVcFBTM3lZUExrR08rcnhpQmtpam5GZitGa3BwOVJkQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRC9YZzhmMWVtWDUwMGdiNDN1TUNSYWNmckVmeUZDQUZUbDdVUnp0b3ZINERTOFd1NjgvZ0plNmdaaXB6TFhNaDZ5TzlyK0V4ZlUvQVFzMVBDMUhUaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDU0ODQwMDk4OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM3ODE3NzE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVFNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNUU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxM3Y1d2I0VGllbDV6bUZQRVpOenVLRTRWNTFmUUd5clF6dFBOYWJnWDBnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NTMwMDE4NSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNzMwNjcyNzMxN1wifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
