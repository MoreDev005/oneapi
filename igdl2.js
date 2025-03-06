const axios = require('axios');
const cheerio = require('cheerio');
async function igdl(url,baseUrl) {
try {
let respon = await axios.post('https://v3.saveig.app/api/ajaxSearch', new URLSearchParams({
      'q': decodeURIComponent(url),
      't':'media',
      'lang':'id'
    }), {
      'headers': {
        'accept': "*/*",
        'accept-language': "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
        'cache-control': "no-cache",
        'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
        'Origin':'https://saveig.app',
        'Referer': "https://saveig.app/",
        'User-Agent':'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
      }
})
const decodeUnicodeEscape = async (str)=>{
    // Mengganti \uXXXX dengan karakter aslinya
    return str.replace(/\\u[\dA-Fa-f]{4}/g, function (match) {
        return String.fromCharCode(parseInt(match.replace('\\u', ''), 16));
    });
}
let page = await decodeUnicodeEscape(respon.data.data)
//console.log(page)
let arrlink = [];
let $ = cheerio.load(page)
 $('.download-items__btn > a').each(async(i,elm)=>{
   let link = $(elm).attr('href');
   arrlink.push(link)
 })
 if(arrlink.length=='0')return {status:'error',author:'iwan',message:'Konten tidak ditemukan'}
 return {status:"sukses",author:'iwan',result:{link:arrlink[1],linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(arrlink[1])}`}}
}catch(e){
  return {status:'error',author:'iwan',message:e.toString()}
}
}

module.exports = igdl;