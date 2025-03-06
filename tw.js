const cheerio = require('cheerio');
const axios = require('axios');

const tw = async (link,baseUrl) => {
  try {
    let res = await axios.get(`https://twitsave.com/info?url=${encodeURIComponent(link)}`);
    if (res.status === 200) {
      let result = [];
      const $ = cheerio.load(res.data);
      $('.origin-top-right > ul > li').each(function () {
        let download = $(this).find('a').attr('href');
        result.push(download);
      });
 if(result.length==0)return {
       status:'error',
       author: 'iwan',
       message: 'Connection Error'
      }
 return {
 status:"sukses",
 author:"iwan",
 result:{link:result[0],linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(result[0])}`}
 }
    } else {
      return {
       status:'error',
       author: 'iwan',
       message: 'Connection Error'
      }
    }
  } catch (error) {
   return {
       status:'error',
       author: 'iwan',
       message: error.toString()
      }
  }
};

module.exports = tw;