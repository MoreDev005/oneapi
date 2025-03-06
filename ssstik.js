const axios = require('axios');
const cheerio = require('cheerio')
const ttdown = async (tlink,baseUrl) =>{
let idtik = ''
let result
if(tlink.startsWith('https://www.tiktok.com/')){
  let urai = tlink.split('/video/')[1].split('?')[0];
  idtik = tlink.split(' ')[0]
}else if(tlink.startsWith('https://vt.tiktok.com/')){
  let urai = tlink.split('vt.tiktok.com/')[1].split('/')[0];
  idtik = tlink.split(' ')[0]
}else if(tlink.startsWith('https://vm.tiktok.com/')){
  let urai = tlink.split('vm.tiktok.com/')[1].split('/')[0];
  idtik = tlink.split(' ')[0]
}

let param = new URLSearchParams({
      'id': decodeURIComponent(idtik),
      'locale':'id',
      'tt':'djRjTmpl'
    })
const config = {
  headers: {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Hx-Current-Url': 'https://ssstik.io/id',
    'Hx-Request': 'true',
    'Hx-Target': 'target',
    'Hx-Trigger': '_gcaptcha_pt',
    'Origin': 'https://ssstik.io',
    'Referer': 'https://ssstik.io/id',
    'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
    'Sec-Ch-Ua-Mobile': '?1',
    'Sec-Ch-Ua-Platform': '"Android"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
  }
};

let apilink = 'https://ssstik.io/abc?url=dl';
await axios.post(apilink,param,config).then(async (respon) => {
 if(respon.status === 200){
 let $ = cheerio.load(respon.data)
 let link = $('#dl_btns > a').attr('href')
  result = {
 status:"sukses",
 author:"iwan",
 result:{link:`${baseUrl}/download/id?data=${encodeURIComponent(link)}`,linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(link)}`}
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