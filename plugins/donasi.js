let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ > Gopay: 081387127465
│ > Tsel: 081387127465
│ > Dana: 081387127465
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281212083267
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
