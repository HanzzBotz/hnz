let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/kalender.jpg')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Kalender 2021*', 'status@broadcast')
}
handler.customPrefix = /kalendar/i

module.exports = handler
