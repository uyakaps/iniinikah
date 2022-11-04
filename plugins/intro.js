
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `☰⃟⟣⟔ Yᴏᴜʀ Cᴀʀᴅ Iɴᴛʀᴏ ⟓⟢⃟
┇⃟⟣⟜ *Rules description:* 
┇⃟⟣⟜ *Dilarang drama:* 
┇⃟⟣⟜ *Menggoreng drama dilarang:*
┇⃟⟣⟜ *Show rate tidak diperbolehkan:*
┇⃟⟣⟜ *Ragu transaksi Bisa pakai mm:*
┖┈┈┈╼╸╸╸╴╴╴ ╳
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UCWypTAqhYCI45waiZg9T3Lg",
    mediaType: "VIDEO",
    description: "https://youtube.com/channel/UCWypTAqhYCI45waiZg9T3Lg", 
    title: 'Iɴᴛʀᴏᴄᴀᴅᴜᴛɪᴏɴ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

