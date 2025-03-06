const axios = require('axios');
const cheerio = require('cheerio');
async function igdl(url,baseUrl) {
try {
let respon = await axios.post('https://social.ioconvert.com/video/info',new URLSearchParams({
      'type': 'INSTAGRAM',
      'url': decodeURIComponent(url)
    }), {
      'headers': {
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://f2mp.com',
  'Referer': 'https://f2mp.comt/',
  'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
  'Sec-Ch-Ua-Mobile': '?1',
  'Sec-Ch-Ua-Platform': '"Android"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'cross-site',
  'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36'
}
})

if(respon.status == 200){
let file = `https://social.ioconvert.com/download?obj=photo&key=${respon.data.data.key}&type=video&id=item0&download=1&file_prefix=f2mp`
return {status:"sukses",author:'iwan',result:{link:`${baseUrl}/download2/id?data=${encodeURIComponent(file)}`,linkUnblock:`${baseUrl}/download2/id?data=${encodeURIComponent(file)}`}}
}else{
return {status:'error',author:'iwan',message:'Konten tidak ditemukan'}
} 
}catch(e){
return {status:'error',author:'iwan',message:e.toString()}
}
}

module.exports = igdl;