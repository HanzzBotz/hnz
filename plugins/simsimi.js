let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Teksnya gak ada kak', m)

	axios.get(`https://badai-api.herokuapp.com/search/simsimi?query=${text}&lc=id`).then ((res) => {
    let hasil = `${res.data.answer}`

    conn.reply(m.chat, hasil, m)
	}).catch(() => {
 m.reply('Simi gak ngerti kak,, bahasa alien kahh??')
   })
}
handler.help = ['simi'].map(v => v + ' <chat>')
handler.tags = ['simi']
handler.command = /^simi/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
