const axios = require('axios');
const cheerio = require('cheerio');
const ytmp4 = async (url,baseUrl) => {
let api = "https://yt1d.com/mates/en/analyze/ajax?retry=undefined&platform=youtube";
let head = {
  'accept': "*/*",
  'accept-language': "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
  'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
  'origin':'https://yt1d.com',
  'referer': "https://yt1d.com/"
}
let data = {
url:url,
ajax:"1",
lang :"id"
}
let datae = new URLSearchParams(data);
let res = await axios.post(api,datae,{headers:head})
//console.log(res.data)
if(res.data.status=='success'){
let $ = cheerio.load(res.data.result)
let arrtes = []
 $('#mp4 > table').each(async(i,elm)=>{
   let link = $(elm).find('td > a').attr('href')
   arrtes.push(link)
 })
 let vid = $('#video_status').attr('data-id')
 let judul = $('#video_title').text()
 let yturl = `https://youtube.com/watch?v=${vid}`
 let dataresult = {
   status : 'sukses',
   author: 'iwan',
   result : {
     link : arrtes[0],
     linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(arrtes[0])}`
     },
   metadata : {
     platform : 'youtube',
     url : yturl,
     title : judul,
     id : vid,
     ext : 'mp3',
     note : '128k',
     format : ''
   }
 }
 return dataresult
}else{
  return {
    status : 'error',
    author : 'iwan',
    message : 'Terjadi kesalahan'
  }
}
}

const ytmp3 = async (url,baseUrl) => {
let info = await ytmp4(url);
console.log(info)
if(info.status=='sukses'){
let api = `https://yt1d.com/mates/en/convert?id=${info.metadata.id}`;
let head = {
  'accept': "*/*",
  'accept-language': "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
  'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
  'origin':'https://yt1d.com',
  'referer': "https://yt1d.com/",
  'X-Note':'128k'
}
let datae = new URLSearchParams(info.metadata);
let res = await axios.post(api,datae,{headers:head})
console.log(res.data)
if(res.data.status=='success'){
  return {
    status : 'sukses',
    author : 'iwan',
    result : {
    link : res.data.downloadUrlX,
    linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(res.data.downloadUrlX)}`
     },
    metadata : info.metadata
  }
}else{
  return {
    status : 'error',
    author : 'iwan',
    message : 'Terjadi kesalahan'
  }
}
}
}

module.exports = {ytmp3,ytmp4}