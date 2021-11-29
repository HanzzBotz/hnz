let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
┏━━°❀❬ *USER PROFILE* ❭❀°━━┓
┃
┃•  *Nama :* ${username}
┃•  *Umur :* ${registered ? '' + age : ''}
┃•  *Exp :* ${exp}
┃•  *Limit :* ${limit}
┃•  *Level :* ${level}
┃
┣━━°❀❬ *RPG MENU* ❭❀°━━┓
┃
┣➥ *${usedPrefix}inv*
┣➥ *${usedPrefix}shop*
┣➥ *${usedPrefix}hunt*
┣➥ *${usedPrefix}mancing*
┣➥ *${usedPrefix}berburu*
┣➥ *${usedPrefix}mulung*
┣➥ *${usedPrefix}nyampah*
┣➥ *${usedPrefix}nebang*
┣➥ *${usedPrefix}open (nama crate) jumlah*
┣➥ *${usedPrefix}use potion jumlah*
┣➥ *${usedPrefix}jual*
┣➥ *${usedPrefix}gaji*
┣➥ *${usedPrefix}dompet*
┣➥ *${usedPrefix}judi <taruhan>*
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┣➥ *Nurotomo (author)*
┣➥ *Ibnu NR (pengembang)*
┣➥ *RC047 (pengembang)*
┣➥ *Caliph (pengembang)*
┣➥ *Raku Gans*
┣➥ *Layscode*
┣➥ *Zeks*
┣➥ *Dll
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['rpgmenu']
handler.tags = ['nande']
handler.command = /^rpgmenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

