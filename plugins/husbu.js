let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.caliph.my.id/api/husbu?apikey=ctXq8VF4')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Suami kartun', m)
}
handler.help = ['husbu']
handler.tags = ['internet']
handler.command = /^(husbu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
