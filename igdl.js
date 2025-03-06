const axios = require('axios')

const igdl = async (url) =>{
try{
let igurl = encodeURIComponent(url)
let respon = await axios.get(`https://www.guruapi.tech/api/igdlv1?url=${igurl}`)
return {
error:'',
link: respon.data.data[0].url_download
}
}catch(e){
return {error:e.toString()}
}
}

module.exports = {igdl}