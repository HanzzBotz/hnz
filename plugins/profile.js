let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let premium = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    let { name, limit, exp, coin, health, level, money, lastclaim, registered, regTime, age, role } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
┏━━°❀❬ *PROFILE* ❭❀°━━┓
┃
┃• Name: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nAbout: ' + about : ''}
┃• Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┃• Link: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}
┃• Exp: ${exp}
┃• Money: ${money}
┃• Health: ${health}
┃• Level: ${level}
┃• Rank: ${role}
┃• Limit: ${limit}
┃• Premium User : *${premium ? 'Yes': 'No'}*
┃• Registered: ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim) : ''}
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler

