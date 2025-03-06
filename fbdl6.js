const axios = require('axios');
const cheerio = require('cheerio');
async function fbdl(url,baseUrl) {
try {
let respon = await axios.post('https://fdown.net/download.php', new URLSearchParams({
      'URLz': decodeURIComponent(url)
    }), {
      'headers': {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control': 'max-age=0',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'cf_clearance=cCtSD19mgB8nUqnlvjfv2PiytEmZ7YplMa3sIpaTQEA-1727511362-1.2.1.1-tJk.s95bl45ISYMddlfwjGeO7OdFZZwYQ1xcg6Jl0SJuX1LYHRep31yVz2ROSBubStLQRFnrdS9QpswSnyHFAZU86zuCtuS13hN4ZnAbJG0JLK43_M3sGLRiVrJXiwFaiVkMBfAGVT_hMhfP4M8xQq.NsFftN3OsANUHIzbR_Q3v1Kceu0k40zIDpwL1QMXM9uoEAom1QNqq3LHQNhWq0DxqdnCqwt1q8rLisaBEerbL6q342ummIPKy7NnuVOvjAduniXo9IA3yzs7iXpJycywFm3aZ2DwgZRF26j.yywJejwRxZwI8AyxtSpWblWRv9gWQAriTLLl1aJR42NcyJYovYKsoZadf6kvH64oyeNCtzg9kS3Ff0rI6MIwBoYJCd83.o_gPDe87oVrIoNg2OQ',
    'Origin': 'https://fdown.net',
    'Referer': 'https://fdown.net/',
    'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
    'Sec-Ch-Ua-Mobile': '?1',
    'Sec-Ch-Ua-Platform': '"Android"',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
  }
})
const decodeUnicodeEscape = async (str)=>{
    // Mengganti \uXXXX dengan karakter aslinya
    return str.replace(/\\u[\dA-Fa-f]{4}/g, function (match) {
        return String.fromCharCode(parseInt(match.replace('\\u', ''), 16));
    });
}
let page = respon.data
//console.log(page)
let arrlink = [];
let $ = cheerio.load(page)
 $('.col-xs-12 > #sd > a').each(async(i,elm)=>{
   let link = $(elm).attr('href');
   arrlink.push(link)
 })
 if(arrlink.length=='0')return {status:'error',author:'iwan',message:'Konten tidak ditemukan'}
 return {status:"sukses",author:'iwan',result:{videohd:arrlink[1],videosd:`${baseUrl}/download/id?data=${encodeURIComponent(arrlink[1])}`}}
}catch(e){
  return {status:'error',author:'iwan',message:e.toString()}
}
}

module.exports = fbdl;