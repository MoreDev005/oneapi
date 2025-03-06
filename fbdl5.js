const axios = require('axios');
async function fbdl(url,baseUrl) {
try {
let respon = await axios.post('https://apiv2.getfb.net/Facebook/DetectVideoInfo',{"id":"","videoId":url,"html":""}, {
      'headers': {
        'accept': "*/*",
        'accept-language': "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
        'cache-control': "no-cache",
        'content-type': "application/json",
        'origins':'https://www.getfb.net',
        'Referer': "https://www.getfb.net/",
        'Referrer-Policy': "strict-origin-when-cross-origin"
      }
})
if(respon?.data?.result?.sourceHd){
return {
 status:"sukses",
 author:"iwan",
 result:{videohd:`${baseUrl}/download/id?data=${encodeURIComponent(respon.data.result.sourceHd)}`,videosd:`${baseUrl}/download/id?data=${encodeURIComponent(respon.data.result.sourceSd)}`}
}
}else{
  return {status:'error',author:"iwan",message:'Kesalahan Koneksi/Konten tidak di temukan'}
}
}catch(e){
  return {status:'error',author:"iwan",message:e.toString()}
}
}

module.exports = fbdl;