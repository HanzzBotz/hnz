let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Sante.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*SANTAI WOY*', 'status@broadcast')
}
handler.customPrefix = /memek|kontol|bangsat|goblok|goblog/i
handler.command = new RegExp

module.exports = handler
