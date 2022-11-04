import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://youtube.com/channel/UCWypTAqhYCI45waiZg9T3Lg'
         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: 'My Youtube Official', 
               body: 'Chyailya',
               thumbnail: pp
             } 
         }})
         }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 export default handler
