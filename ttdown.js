const axios = require('axios');
const ttdown = async (tlink,baseUrl) =>{
let idtik = ''
let result
if(tlink.startsWith('https://www.tiktok.com/')){
  let urai = tlink.split('/video/')[1].split('?')[0];
  idtik = urai
}else if(tlink.startsWith('https://vt.tiktok.com/')){
  let urai = tlink.split('vt.tiktok.com/')[1].split('/')[0];
  idtik = urai
}else if(tlink.startsWith('https://vm.tiktok.com/')){
  let urai = tlink.split('vm.tiktok.com/')[1].split('/')[0];
  idtik = urai
}

let apilink = `https://api.twitterpicker.com/tiktok/mediav2?id=${idtik}`
await axios.get(apilink).then(async (respon) => {
 if(respon.status === 200){
  result = {
 status:"sukses",
 author:"iwan",
 result:{link:respon.data.video_no_watermark.url,linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(respon.data.video_no_watermark.url)}`}
 }
  }else{
    result = {
    status : 'error',
    author : 'iwan',
    message : 'connection error'
  }
  }
}).catch(err => {
  result = {
    status : 'error',
    author : 'iwan',
    message : err.toString()
  }
})
  return result
}

module.exports = {ttdown}