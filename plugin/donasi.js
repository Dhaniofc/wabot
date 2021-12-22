let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • AXIS [083822759168]
│ • AXIS             [083822759168]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [083822759168]
│ • https://www.facebook.com/andriistreetmoon
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
