const axios = require('axios');
const cheerio = require('cheerio');
async function igdl(url,baseUrl) {
try {
let respon = await axios.post('https://api.instasave.website/media',new URLSearchParams({
      'url': decodeURIComponent('https://www.instagram.com/reel/DDjc3ddJvkI/?utm_source=ig_web_button_share_sheet'),
	  'lang' : 'en'
    }),{
	  'headers' : {
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
  'Content-Length': '92',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https:/www.instasave.website',
  'Priority': 'u=1, i',
  'Referer': 'https://www.instasave.website/',
  'Sec-CH-UA': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
  'Sec-CH-UA-Mobile': '?0',
  'Sec-CH-UA-Platform': '"Android"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-site',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
}
	})

if(respon.status == 200){
try{
let file = respon.data.split('download-items__btn\\"><a  href=\\"')[1].split('\\" class=\\"')[0]
return {status:"sukses",author:'iwan',result:{link:file,linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(file)}`}}
}catch(e){
  return {status:'error',author:'iwan',message:'Konten tidak ditemukan'}
}
}else{
return {status:'error',author:'iwan',message:'Konten tidak ditemukan'}
} 
}catch(e){
return {status:'error',author:'iwan',message:e.toString()}
}
}

module.exports = igdl;