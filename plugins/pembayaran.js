let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╔════════════════════
║ *PEMBAYARAN*
╠════════════════════
║╭───❉ *VIA* ❉─────
║│
║│➸ *OVO*: -
║│➸ *DANA*: 081387127465
║│➸ *PULSA*:081387127465
║│➸ *GOPAY*: 081387127465
║│
║╰──────────────────
║ Silahkan Ketik *UP*
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*POWERED BY HANZZ*_
╚════════════════════
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 HANZZ SHOP TERPERCAYA 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(Pembayaran)$/i
handler.command = new RegExp

module.exports = handler
 