let handler  = async (m, { conn, usedPrefix: _p }) => {
let event = `
┏━°❀❬ *EVENT MINGGUAN * ❭❀°━┓
┃
┃> Tidak Ada Event Minggu Ini
┃
┗━━━━━━━━━━━━━━━━
`.trim()

  conn.fakeReply(m.chat, event, '6281212083267@s.whatsapp.net', '*Eventnya Udahan:v*')
}
handler.help = ['event']
handler.tags = ['hadiah']
handler.command = /^(event)$/i

handler.fail = null 

module.exports = handler
