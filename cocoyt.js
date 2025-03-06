const axios = require('axios')
const delayed = (ms) => {
return new Promise(resolve => setTimeout(resolve,ms));
}

const ytmp4 = async (url,baseUrl) => {
let res = await axios.get(`https://ab.cococococ.com/ajax/download.php?copyright=0&format=360&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,{cache:"no-store"})
let tries = 5
const status = async (idinit) =>{
let {data} = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${idinit}`)
return data.success==1
}

const initial = async (idinfo) =>{
tries = tries-1
let resaudio = await status(idinfo)
if(resaudio){
let {data} = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${idinfo}`)
return {status:"sukses",author:'iwan',result:{link:data.download_url,linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(data.download_url)}`},title:res.data.title,percobaan:5-tries}
}else{
if(tries==0)return{status:'error',message:'Kegagalan Proses Data'}
await delayed(8000)
return initial(idinfo)
}
}
return await initial(res.data.id)
}
module.exports = ytmp4;