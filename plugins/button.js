let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK👋👋\nSaya Hanzz Botz\n\nBot Yang Dibuat Untuk Membantu Anda Seperti Membuat Sticker Dan Lain-Lain\n\nSilahkan Pilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam/Telpon = Block\n\nSubcribe Channelku https://bit.ly/3bGFJuG\nMy Rest Api https://hanzz-web.herokuapp.com/\nJoin Group WhatsApp\nhttps://tinyurl.com/yy5w6ydx",
                        "description": "*Note : Jika ingin melihat semua menu ketik .allmenu*",
                        "buttonText": "Daftar Menu Hanzz Botz",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Downloader Menu`,
                                        "description": "",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Donasi",
                                        "description": "",
                                        "rowId": ".donasi"
                                    },{
                                        "title": "Owner Bot",
                                        "description": "",
                                        "rowId": ".owner"                                        
                                    },{
                                        "title": "Info Bot",
                                        "description": "",
                                        "rowId": ".info"                                        
                                    },{
                                        "title": "Sewa Bot",
                                        "description": "",
                                        "rowId": ".iklan"
                                    },{
                                        "title": "Rules",
                                        "description": "",
                                        "rowId": ".rules"  
                                    },{
                                        "title": "SNK",
                                        "description": "",
                                        "rowId": ".snk"                                                       
                                    },{
                                        "title": "Group Bot",
                                        "description": "",
                                        "rowId": ".gchanzz"
                                    },{
                                        "title": "Game Menu",
                                        "description": "",
                                        "rowId": ".gamemenu"
                                    },{
                                        "title": "Primbon Menu",
                                        "description": "",
                                        "rowId": ".primbonmenu"                                        
                                    },{
                                        "title": "Rpg Menu",
                                        "description": "",
                                        "rowId": ".rpgmenu"                                           
                                    },{
                                        "title": "Grup Menu",
                                        "description": "",
                                        "rowId": ".Grupmenu"             
                                    },{
                                        "title": "Database Menu",
                                        "description": "",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Sticker Menu",
                                        "description": "",
                                        "rowId": ".stickermenu"
                                    },{
                                        "title": "Islam Menu",
                                        "description": "",
                                        "rowId": ".islammenu"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Anime Menu",
                                        "description": "",
                                        "rowId": ".animemenu" 
                                    },{
                                        "title": "Fun Menu",
                                        "description": "",
                                        "rowId": ".funmenu" 
                                    },{
                                        "title": "Anonymous Chat",
                                        "description": "",
                                        "rowId": ".anonymouschat"                                                                                         
                                    },{
                                        "title": "Info Owner",
                                        "description": "",
                                        "rowId": ".infoowner"                                
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "",
                                        "rowId": ".hentaimenu" 
                                    },{
                                        "title": "Creator Menu",
                                        "description": "",
                                        "rowId": ".creatormenu"
                                    },{
                                        "title": "Editor Menu",
                                        "description": "",
                                        "rowId": ".editormenu" 
                                    },{
                                        "title": "Education Menu",
                                        "description": "",
                                        "rowId": ".educationmenu"  
                                    },{
                                        "title": "Image Menu",
                                        "description": "",
                                        "rowId": ".imagemenu"
                                    },{
                                        "title": "Sound Menu",
                                        "description": "",
                                        "rowId": ".soundmenu"
                                    },{
                                        "title": "Video Menu",
                                        "description": "",
                                        "rowId": ".vidiomenu"
                                    },{
                                        "title": "Music Menu",
                                        "description": "",
                                        "rowId": ".musicmenu"
                                    },{
                                        "title": "News Menu",
                                        "description": "",
                                        "rowId": ".newsmenu"
                                    },{
                                        "title": "Info Menu",
                                        "description": "",
                                        "rowId": ".infomenu"
                                    },{
                                        "title": "Tools Menu",
                                        "description": "",
                                        "rowId": ".toolsmenu"
                                    },{
                                        "title": "Status Bot",
                                        "description": "",
                                        "rowId": ".mystat"
                                    },{
                                        "title": "Hadiah Menu",
                                        "description": "",
                                        "rowId": ".hadiahmenu"
                                    },{
                                        "title": "Premium Menu",
                                        "description": "",
                                        "rowId": ".premiummenu"
                                    },{
                                        "title": "18+ Menu",
                                        "description": "",
                                        "rowId": ".dewasamenu"
                                    },{
                                        "title": "Xp Menu",
                                        "description": "",
                                        "rowId": ".xpmenu" 
                                    },{
                                        "title": "Kerang Menu",
                                        "description": "",
                                        "rowId": ".kerangmenu"
                                    },{
                                        "title": "Converter Menu",
                                        "description": "",
                                        "rowId": ".convertermenu"
                                    },{
                                        "title": "Search Menu",
                                        "description": "",
                                        "rowId": ".searchmenu"
                                    },{
                                        "title": "Random Menu",
                                        "description": "",
                                        "rowId": ".randommenu"                  
                                    },{
                                        "title": "Absen Menu",
                                        "description": "",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": "Group Setting",
                                        "description": "",
                                        "rowId": ".groupset"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu', 'help']
handler.register = true
module.exports = handler