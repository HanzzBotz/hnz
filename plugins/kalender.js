// Tolong jangan bully saya bang,, saya cuman mau bisnis :)

let uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')
let util = require('util')

let handler = async(m, { conn, args }) => {
gay = `sayang`

  if (!m.quoted) throw `Tag Fotonya ` + gay // org gay

    await m.reply(`*[❗] Wait,Sedang Dalam Proses...*`)
  let q = m.quoted ? m.quoted : m
  let media = await q.download()
  let img = await uploadImage(media)
  let res = 'https://api.zeks.me/api/calender?apikey=7vQI9VTpgWYYV6q1L9KV427v6ry&image=' + img + '&apa=nani')).buffer() // Masukan ApiKeymu disini..  
  conn.sendFile(m.chat, buffer, 'gambar.jpg', 'Nih Mhank', m)
}
handler.help = ['kalender (reply)']
handler.tags = ['editor']
handler.command = /^kalender/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler