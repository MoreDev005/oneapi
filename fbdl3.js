const axios = require('axios');
const cheerio = require('cheerio');
async function fbdl(url,baseUrl) {
try {
let respon = await axios.post('https://fbtake.com/?', new URLSearchParams({
      'page': decodeURIComponent(url),
      'ftype':'all',
      'ajax':'1'
    }), {
      'headers': {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://fbtake.com',
    'Referer': 'https://fbtake.com/id/',
    'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
    'Sec-Ch-Ua-Mobile': '?1',
    'Sec-Ch-Ua-Platform': '"Android"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
let arrlink = [];
let $ = cheerio.load(respon.data)
 $('tbody > tr > td > a').each(async(i,elm)=>{
   let link = $(elm).attr('href');
   arrlink.push(link)
 })
 let hd = `${baseUrl}/download/id?data=${encodeURIComponent(arrlink[0])}`;
 let sd = `${baseUrl}/download/id?data=${encodeURIComponent(arrlink[0])}`
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