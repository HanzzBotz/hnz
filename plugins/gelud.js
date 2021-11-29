let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.DATABASE.data.users[m.sender].as)
    let _timers = (500000 - __timers)
    let timers = clockString(_timers) 
    let user = global.DATABASE.data.users[m.sender]
    let username = conn.getName
    let potion = `${Math.floor(Math.random() * 2)}`.trim()
    let _diamond = ( == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || == 1 ? pickRandom(['0', '1', '0', '1']) : '' || == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
    let diamond = (_diamond * 1)
    let _common = `${Math.floor(Math.random() * 3)}`.trim()
    let common = (_common * 1)
    let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
    let uncommon = (_uncommon * 1) 
    let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
    let mythic = (_mythic * 1)
    let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
    let sampah = `${Math.floor(Math.random() * 300)}`.trim()
    let legendary = (_legendary * 1)
    let uang = `${Math.floor(Math.random() * 400)}`.trim() 
	let exp = parseInt(Math.floor(Math.random() * 601))
    let sum = 82 * user.area - 59
    let dmg = (user.sword  * 5 + user.armor * 5 - sum)
    let buttons = [
{buttonId: 'id1', buttonText: {displayText: '/use potion 2'}, type: 1}, 
]
const buttonMessage = {
    contentText: `\n*Sepertinya Anda Sudah Kecapekan*\n*Silahkan Istirahat Dulu sekitar ${timers}*\n*Untuk bisa melanjutkan Gelud*\n`,
    footerText: 'Hanzz', 
    buttons: buttons,
    headerType: 1
}

hsl = `
*《 Hadiah Gelud Kali Ini 》*

Nyawa mu berkurang ${dmg} karena Kamu telah gelud dengan ${username} dan mendapatkan
*exp:* ${exp}
*uang:* ${uang}
*Item Yaitu:${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*uncommon crate:* ' + uncommon + ''}

 *Hanzz Botz*
 
`

            global.DATABASE._data.users[m.sender].health -= health * 1
            global.DATABASE._data.users[m.sender].exp += exp * 1
            global.DATABASE._data.users[m.sender].money += uang * 1
            global.DATABASE._data.users[m.sender].potion += potion * 1
            global.DATABASE._data.users[m.sender].diamond += diamond * 1
            global.DATABASE._data.users[m.sender].common += common * 1 
            global.DATABASE._data.users[m.sender].uncommon += uncommon * 1
            global.DATABASE._data.users[m.sender].sampah += sampah * 1
            global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
            global.DATABASE._data.users[m.sender].user -= user * 1
            global.DATABASE.data.users[m.sender]
            
setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 20000) 
               
                     setTimeout(() => {
                     m.reply(`*Mampus kalahlu*`)
                      }, 18000)
                    
                     setTimeout(() => {
                     m.reply('Mampus lu ajg')
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply('Anying-Anying')
                     }, 14000) 
                     
                     setTimeout(() => {
                     m.reply('_Sedang Gelud..._')
                     }, 0) 
  user.as = new Date * 1
}
handler.help = ['gelud']
handler.tags = ['rpg']
handler.command = /^gelud/i

handler.fail = null

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}