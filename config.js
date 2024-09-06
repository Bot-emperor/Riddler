//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5SWHNhcnBYQTUyRzJhVFRMeHhLZTRvdFlrbmV1WlEyNndlZ1h6cTFXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclFLb3ZFbVlqMHMwSy80M3E3bmVMcUo0aXJWdnpURUh5aFF6NHQwdTBVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRUxudEpnQzJXVTB5d1R0eTRnVjlyeThuVFdyNGEwYTNnNS9xN0IwZ1ZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmaCtzSGJlU2h3MTdyQkJ3eURyTEt5K211KzR3RHE0UlZXN0lFbTR4UVY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMVUFwT3JsRjdzSUNCVStVOVUwNktoeFJyM1hlTDBZUWhxOVVpNHEya0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh5dktBS0RKTXlJYlVadHFhSXBFYW40U2pjK1c2bUYweGNrNi9rTzRZMm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01IYUFmSGN3Q2hCWGxaSFNmb2ZEM0pheE54RVRjN2FwbFpTb1FPYXBWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2RvdmpGTHh3b2w1ZDU0RTJPVC9VUGZRZ1paeTkrN25qeVZtOHdzbXNTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJREw5R2MvdHVnVHNMSHRuaTZKM2U0M2RMUWk2VzE0ek43c2doa0R5R1F3QU1INmt2VUVkdzBSb2dZeVFWd2RRRXFCem85R1ZST0htaERJTkVTYWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJPTHB3YTBCd29Wby9yVXZQc09JYXlOd0pmMkZtc0pMeHJveHFma2ExRnprPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NjgyMTc2NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGN0M1RUU4OThGRjJEOTFBQ0I1MEM0MzY3MUFGREI2NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NjE4NTc2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3NzY4MjE3NjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjVGMDVEQTYwNTlBMTU1NTgyOTFDRTgxQ0REMDJEMzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTYxODU3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieDZRMEU1MkJTMUNsN09nU3JveDdFQSIsInBob25lSWQiOiJlYTQ0NzNjMC1hYmFkLTRiM2YtYWVlYi03OTgxMDI1OTNiNjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzlzNVl4UVRQQS80elFRYmpra29ub3M2ZkNjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRFc3hGM2JORS9qQ24vcjFlaHFGbzd2TGtiYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYOFFZUTNQRSIsIm1lIjp7ImlkIjoiMjYzNzc2ODIxNzY2OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUmlkZGxlciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0hCem53US83THJ0Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieGJubkRBbmZQc2V3YytrRWx3OFFWZFhMeUpGTkpXL2ZGQ3VUSlBMZUxHUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidlNUcm1GdVcxNlpoZDcvN1ZEVy9zYnROSVRHV0QvT1Aybi9qTXNHeDJpZDN5UkFCa1NTMjRhblVNcmhHbVdsUDByK0dCcGdURUZGcWF0OGx4TEc1Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjJSNmJDL045U1BEQ2hyTGtaSFplWnoyVFU5R04yUmtMMlR0WFBtbmhYeEIxUzZ6bm9uZldjazkvazFVMEVjUFVUYTA3RmVLa1VUYVE1Mk80RWxXT2lBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzc2ODIxNzY2OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1c1NXd3SjN6N0hzSFBwQkpjUEVGWFZ5OGlSVFNWdjN4UXJreVR5M2l4ayJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTYxODU3MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHZEEifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
