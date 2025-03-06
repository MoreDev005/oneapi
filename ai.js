const axios = require('axios');
const unicodeToChar = (text) => {
return text.replace(/\\u[\dA-Fa-f]{4}/g, function(match) {
return String.fromCharCode(parseInt(match.substr(2), 16));
});
};

const aichat = async (input) => {
try {
const response = await axios.post('https://www.pizzagpt.it/api/chatx-completion', { question: input }, {
headers: {
'Content-type': 'application/json; charset=UTF-8',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36',
'Cookie': 'n-req=0; dntd=false; cf_clearance=jgR4E6qbu1AFj59fm64VpuevZVjorMuAY_fLHdOIrQw-1706706069-1-ASTrvZVbzhJdUGOEHU5AHIpZnsE9n4tbEInseyuIFwb495jlJ5j3XNjPWmnrs8iVZSzhSgOULMk25prSPsR29i8=; _ga_LZKWDTM58H=GS1.1.1706706071.1.0.1706706071.0.0.0; _ga=GA1.1.1612128193.1706706072; dom3ic8zudi28v8lr6fgphwffqoz0j6c=867728ea-9d5c-4669-8118-9fe9466cd12e%3A1%3A1',
'Origin': 'https://www.pizzagpt.it',
'Referer': 'https://www.pizzagpt.it/',
'X-Secret': 'Marinara'
}
});
    
if (response.status === 200) {
const airespon = response.data.answer.content;
return {
  error: '',
  respon: airespon
      };
    }
  } catch (error) {
    return { respon: error.toString() };
  }
};

module.exports = { aichat };