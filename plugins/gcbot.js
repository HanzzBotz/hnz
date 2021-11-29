let handler = async m => m.reply(`
*⚠GRUP BOT⚠*

1. https://chat.whatsapp.com/JEkWRaVlDt3ChkmMAkaCOF
2. https://chat.whatsapp.com/LTBrcXNV0U512LsuDSX0DT
3. https://chat.whatsapp.com/BVeUWly2TH76VsA73WixDS
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gchanzz']
handler.tags = ['info']
handler.command = /^gchanzz$/i

module.exports = handler
