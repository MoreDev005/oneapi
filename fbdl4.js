const axios = require('axios');
async function fbdl(url) {
try {
let respon = await axios.post('https://fbload.online/download', new URLSearchParams({
      'url': decodeURIComponent(url)
    }), {
      'headers': {
        'accept': "*/*",
        'accept-language': "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
        'cache-control': "no-cache",
        'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
        'Cookie':'XSRF-TOKEN=eyJpdiI6IjliTVJ0NFZyODBMdnBpU3ZhajdzYVE9PSIsInZhbHVlIjoiUjIrb2tVUHMveGx0MGFLRHFCdGE1c1VqdWo4dW0ybDVWWjZpTEc1WXJaSGhDQTZPS28vY3JCQWx2aWVhVGpQYzUvQWVlYmczNmdhbEc4N1VlZ2dheW5tOGVDLzBBaVlVdEF1bEtIRHB1QWNiRTRoWGNmWGFGZUp1OUZKbWlkejQiLCJtYWMiOiI4OTNmMWYzZTk1Y2I4NDgxOWFhZmZiM2IyZmYzMjA3MTc3NGUxZjE5NGZmNjBkNzkxODJiMzhmYjY5ZTgzODZiIiwidGFnIjoiIn0%3D; fbloadonline_session=eyJpdiI6Ing3dG5mRGZ1WnhTQVlFQkUrMW91VkE9PSIsInZhbHVlIjoiMkNtUUF6b2RxS3ZKSkFNSDFiUlZaK04xODVLT3gyVGlKbHVTbktkNi82bTlhc3NWc0lzZVFnRFB2bXkxcDUwdGpUbEc0Y1pWMENCbEo1SWh6NnZwRWdZRmIydjRvS3I1akkzcW5JdzJ2MitrWjk4ci9CYnlMaFBHUVdRbFU2T3IiLCJtYWMiOiJjNjU1NzJkNjBkNDc1MmVlMjA0ZmFiZTVkZjhhMWRkZTM1YmMyMzc0MWEwZjBmMTVmYjQ1OTczNWYwMTQ2MjUyIiwidGFnIjoiIn0%3D',
        'X-Csrf-Token':'3I5yMs0C0gzQufwpnPvyTMvtpCG8kFOK7eVyQ8si',
        'Origin':'https://fbload.online',
        'Referer': "https://fbload.online/",
        'X-Requested-With':'XMLHttpRequest'
      }
})
 return {
 status:"sukses",
 author:"iwan",
 result:{videohd:respon.data.medias[0].url,videosd:respon.data.medias[1].url}
 }
}catch(e){
  return {status:'error',author:"iwan",message:e.toString()}
}
}

module.exports = fbdl;