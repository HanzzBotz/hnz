                                                                                                                                                                                                                                                                /*

❗❗🇧 🇦 🇨 🇦    🇧 🇦 🇳 🇬  ❗❗

❗KLO NYOLONG/COPY CASE ITU YG BENER BANG JANGAN STENGAH"
❗USAHAIN TAMBAHIN NAMA GW KLO MAU NYOLONG/NGCOPAS YE BANG (ALAN BOTZ @6285718366706)
❗YANG MAU NYUMBANG FITUR, KE PM YA GANS :V (wa.me/6285718366706)



❗KITA JUGA SAMA BANG SESAMA NEWBIE
❗JANGAN DULU TANYA² SEBELUM DI COBA BEBERAPA KALI
❗INTI NYA JANGAN PUTUS ASA (ERROR COBA LAGI)
❗ERROR & GATAU ERRORNYA DI MANA (DOWNLOAD ULANG SC NYA)

SCIRPT BOT INI CUMAN MEMERLUKAN 1 APIKEY YAITU APIKEY LOLHUMAN KALIAN BISA BELI DI lohuman.xyz UNTUK MEMBELI APIKEY, HARGA APIKEY SEKITAR 10-15 AN KALO GA SALAH
TANPA APIKEY SEBAGIAN FITUR BOT TIDAK BISA DI PAKE

🖤 THANKS TO :
❤ NURUTOMO
❤ SENKU ARD
❤ ALAN BOTZ
❤ ZERO BOTZ
❤ FERNAZER
❤ ARIFI RAZZAQ
❤ PENYEDIA REST API && MODULE

❗❗Ambil Case Kasih Credits Gw Dong : ALAN BOTZ
 
 
EDIT SEMUA DI PLUGINS : OWNER.JS / BUTTON.JS / MENU.JS / DONASI.JS YA SAYANG 💕
❗NOTE : 
MISAL DEPANNYA PAKE TANDA PETIK DI ATAS 2 (") BERARTI DI AKHIRNYA HARUS DI TUTUP LAGI DENGAN TANDA PETIK 2 (")
MISAL DEPANNYA PAKE TANDA PETIK DI ATAS 1  (') BERARTI DI AKHIRNYA HARUS DI TUTUP LAGI DENGAN TANDA PETIK 1 (')
MISAL DEPANNYA PAKE TANDA PETIK DI ATAS 1 (`) BERARTI DI AKHIRNYA HARUS DI TUTUP LAGI DENGAN TANDA PETIK 1 (`)
❗MAU BELI SCRIPT YANG NO ENC ? KE PM BAWA DANA, HARGA BISIK BISIK :V (6285718366706)
────────────────────────────────────────────────────────────────────────────────────────                                                                                                                                                                                                                                                                */
global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/CiypUhAJYSg9PCOVrVKBLQ, https://chat.whatsapp.com/KrIEwXTyhBE5FBweOsPOfZ']
global.channelYT = ['https://youtube.com/channel/UCjfQUhw550WDZv31eJQaehw'] 
global.owner = ['6281212083267']// Put your number here
global.mods = ['6281212083267'] // Want some help?
global.prems = ['6287886674599', '6281212083267','6285947322310','6281388218284','6285382317734','6283895646213','6281413049152','6285955110056','6289516394766','6285742344873','62895611355890','6288211419255'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ' 
}

// Sticker WM
global.packname = ''
global.author = ''

global.multiplier = 1000 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
