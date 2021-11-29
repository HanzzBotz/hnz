let handler = function (m) {
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  this.sendContact(m.chat, '6281212083267', 'My Owner', m)
  conn.reply(m.chat, `Ini Owner Ku, Silahkan Bertanya Ya Kak > _ <`, m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
