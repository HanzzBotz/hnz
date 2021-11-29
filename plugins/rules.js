let handler = async m => m.reply(`
┏━━°❀❬ *PERATURAN BOT* ❭❀°━━┓
┃
┃> PERINGATAN :
┃• Telpon/VC = Blok Otomatis
┃ 
┃> BANNED + DENDA 5K :
┃• Spam Chat
┃• Spam Call
┃• Spam SMS
┃• Menghina Bot
┃
┃> BANNED SEMENTARA :
┃• Laporan Request Fitur Palsu/Main-Main
┃• Laporan Bug Pada Fitur Palsu/Main-Main
┃
┃> BANNED + BLOK PERMANEN :
┃• Merusak Nama Baik Bot
┃• Meniru/Menyalin Teks² Pesan Pada Bot Tanpa Izin
┃• Spam Menu Ga Jelas
┃
┃• Bot Tidak Pernah Menyimpan
┃Atau Mendownload File Yang Anda Kirim
┃• Gunakan Dengan Baik Dan Bijak
┃• Jika Menemukan Fitur Error Silahkan Silahkan 
┃Laporkan Ke Owner Dengan Cara Ketik .bug
┃
┃> Note : Jika Tidak Membayar Denda
┃> Maka Bot Akan Banned User Permanen
┃Untuk Info Lebih Lanjut Ketik .owner
┗━━━━━━━━━━━━━━━━

┏━━°❀❬ *DENDA* ❭❀°━━┓
┣➥ *TSEL: *081387127465*
┣➥ *DANA: *081387127465*
┣➥ *GOPAY: *081387127465*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

module.exports = handler