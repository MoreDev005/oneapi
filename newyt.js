const axios = require('axios');
const cheerio = require('cheerio');

const newyt = async (url) => {
const headers = {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,id;q=0.7',
  'Cache-Control': 'no-cache',
  'Content-Length': '64',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://ssyoutube.online',
  'Pragma': 'no-cache',
  'Priority': 'u=0, i',
  'Referer': 'https://ssyoutube.online/',
  'Sec-CH-UA': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
  'Sec-CH-UA-Mobile': '?0',
  'Sec-CH-UA-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-User': '?1',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
};


const data = new URLSearchParams();
data.append("videoURL",url);

let response = await axios.post('https://ssyoutube.online/yt-video-detail', data, {
  headers: headers
})
if(response.status == 200){
let $ = cheerio.load(response.data);
let arr = [];
$('.list > tbody > tr').each(function(){
let reso = $(this).find('td > div > span').text().trim()
let resolink = $(this).find('.downloadButton > button').map((index, element) => "https:"+element.attribs.onclick.split("https:")[1].split("',")[0])[0]

if(reso){
arr.push({
quality: reso,
link: resolink
});
}


})

return arr.filter(item => item.quality == "OPUS (weba)")[0]

}
else {
  console.error(response.status);
}

}
module.exports = newyt