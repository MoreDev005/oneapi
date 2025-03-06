const axios = require('axios');

const mp3 = async (input) => {
  let sekarang = new Date().getTime();
  let form = `k_query=${input}&k_page=home&hl=id&q_auto=0`;
  let json = encodeURI(form);

  try {
    let fetchResult = await axios.post("https://www.y2mate.com/mates/en948/analyzeV2/ajax", json, { 
      headers: { 
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8", 
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36' 
      }, 
    });

    if(fetchResult.status === 200) {
      let fetchData = fetchResult.data;
      let vid = fetchData.vid;
      let judul = fetchData.title;
      let kreator = fetchData.a;
      let select = Object.keys(fetchData.links.mp3)[0]
      let k = fetchData.links.mp3[select].k;
      let size = fetchData.links.mp3[select].size;
      let mp3set = `vid=${vid}&k=${k}`;
      let mp3get = encodeURI(mp3set);

      //Area Post Setup
      let fetchMp3 = await axios.post("https://www.y2mate.com/mates/convertV2/index", mp3set, { 
        headers: { 
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8", 
          'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36' 
        }, 
      });

      if(fetchMp3.status === 200) {
        let mp3Result = fetchMp3.data;
        return mp3Result;
      }
    }
  } catch (err) {
    let info = err.toString();
    let dat = {
      status: "error",
      mess: info
    };
    return dat;
  }
}

module.exports = mp3;