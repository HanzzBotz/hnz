let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `🔰 -----[ 「 *Sewa Hanzz Botz* 」 ]----- 🔰

──────────────────────────────

○ *SEWA HANZZ BOTZ :*

○ *10K Ampe Pensi Asalkan Memenuhi Syarat Dibawah:

□Tidak Boleh Spam Bot

□Dan Gunakan Bot Dengan Bijak

□Owner Selalu Memperhatikan

◯ *PEMBAYARAN BISA MELALUI :*

◯ *DANA*

◯ *PULSA*

○ *GOPAY*

🗣 : Boleh Liat Fiturnya Gak Bang?
👤 : Boleh Dicoba 
🗣 : Banyak Yang Error Bang!
👤 : Kan Saya Masih Noob Ngab Jangan Dibully
──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*

◯ *HARAP HUBUNGI NOMOR DIBAWAH :*

◯ *wa.me/6281212083267*

──────────────────────────────

🔰 -----[「 *Powered By Hanzz-kun* 」]----- 🔰` 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['iklan'] 
handler.tags = ['info'] 
handler.command = /^(iklan)$/i

module.exports = handler