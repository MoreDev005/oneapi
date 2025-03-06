const ytmp3 = async (url,baseUrl) => {
const regexYT = /(?<=[=\/&\%3D&])[a-zA-Z0-9_\-]{11}(?=[=\/&?#%\n\r]|$)/
try{
let videoID = regexYT.exec(url)[0]
let urlyt = `https://www.youtube.com/watch?v=${videoID}`
//const ytdownload = require('./newyt.js')
//let linknya = await ytdownload(urlyt)
//return {status: "sukses", author: "iwan", result: {link:`${baseUrl}/download/id?data=${encodeURIComponent(linknya.link)}`,linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(linknya.link)}`}}
return {status: "sukses", author: "iwan", result: {link:`${baseUrl}/ytdlmp3/id?data=${encodeURIComponent(videoID)}`,linkUnblock:`${baseUrl}/ytdlmp3/id?data=${encodeURIComponent(videoID)}`}}
}catch(e){
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 1)"}
}
}
module.exports = ytmp3;
