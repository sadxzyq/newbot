
const fs = require('fs')
const chalk = require('chalk')
global.footer = 'BudyBot'//ganti
global.pulsa = "6282285357346"//ganti
global.gopay = "-"//ganti
global.dana = "082285357346"//ganti
global.paypal = "---" 
global.shopay = "---" 
global.saweria = "---" 
global.sociabus = "---" 
global.bni = "---" 
global.bri = "---" 
global.bankjatim = "---" 
global.jago = "---" 
global.neobank = "---" 
global.packname = 'ッ'//ganti
global.footer = '©Darkx'//ganti
global.ovo = "-"//ganti
global.ownerlen = "Bud/Darkx"
global.owner = ['6282285357346'] //ubh nomor owner hp
global.ownername = "BudyTzy" 
global.ytname = "YT: null"
global.socialm = "IG: mydiam.is.fun"
global.location = "Indonesia, SumSel, Lubuklinggau"
global.ownernomer = "6282285357346" 
global.premium = ['6282285357346'] 
global.nomorcs = '6282285357346'
global.botname = 'sɪᴍᴘʟᴇ x ʙᴏᴛ' 
global.linkz = "-"
global.websitex = "-"
global.botscript = 'https://github.com/sadxzyq/newbot'
global.themeemoji = "😿"
global.packname = "𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝘽𝙮 𝙳𝚊𝚛𝚔𝚡"
global.author = "𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝘽𝙮 𝙳𝚊𝚛𝚔𝚡"
global.wm = "ッ"
global.sessionName = 'session'
global.prefa = global.prefa = ['!','.']
global.sp = '!'

global.mess = {
success: 'Sucses Masbro....',
admin: 'Mohon Maaf Feature hanya Khusus admin',
botAdmin: 'Bot Harus Menjadi Admin Group Terlebih dahulu',
premime: 'Maaf Kamu tidak Bisa menggunakan Feature Premium',
owner: 'Maaf Kamu Tidak Bisa menggunakan Feature Owner', 
group: 'Feature Hanya Bisa Di gunakan Di dalam Group',
private: 'Feature Hanya Bisa di gunakan di dalam Private Chat!',
bot: 'Feature Hanya Bisa di gunakan oleh bot',
wait: 'Permintaan Anda sedang kami proses....',
linkm: 'Mana Link Nya?',
}
global.thum = fs.readFileSync("./image/image.jpg")
global.log0 = fs.readFileSync("./image/image.jpg")
global.err4r = fs.readFileSync("./image/image.jpg")
global.thumb = fs.readFileSync("./image/image.jpg")
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
