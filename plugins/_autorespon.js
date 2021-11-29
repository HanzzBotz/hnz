let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = DATABASE.data.settings
    let { isBanned } = DATABASE.data.chats[m.chat]
    let { banned } = DATABASE.data.users[m.sender]

    // ketika kena tag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
        let stc = fs.readFileSync('./src/tag.mp3')
        conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Hanzz Botz By Hanzz-kun*', 'status@broadcast')
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.senDATABASEutton(m.chat, `〔 Undang Bot Masuk Grup 〕
Donasi Minimal 10K Untuk Memasukan Bot Ke Group
╭─「 Donasi • Pulsa 」
│ > Gopay: 081387127465
│ > Tsel: 081387127465
│ > Dana: 081387127465
╰────

Subscribe Hanzz K To Get Trial 1 Days

`.trim(), 'Hanzz Botz', 'CHAT ME TO BUY', '.owner', { contextInfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`Waalaikum'salam`)
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.DATABASE.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        let totalreg = Object.keys(global.DATABASE._data.users).length
        await this.setStatus(`Aktif Selama ${uptime}
Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'} 
User In Database: ${totalreg} User 
Hanzz Botz Next Generation`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}