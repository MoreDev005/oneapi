const getFbVideoInfo = require("fb-downloader-scrapper")
async function fbdl(url) {
try {
let respon = await getFbVideoInfo(url)
 let hd = `http://eu3.diresnode.com:3157/download/id?data=${encodeURIComponent(respon.hd)}`;
 let sd = `http://eu3.diresnode.com:3157/download/id?data=${encodeURIComponent(respon.sd)}`
 return {
 status:"sukses",
 author:"iwan",
 result:{videohd:hd,videosd:sd}
 }
}catch(e){
  return {status:'error',author:"iwan",message:e.toString()}
}
}

module.exports = fbdl;