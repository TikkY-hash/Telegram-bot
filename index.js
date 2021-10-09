const TelegramApi = require('node-telegram-bot-api')

const token = '2024860271:AAHlgbCXGS3BXmrrY05ID6Nqb5L54XO9_FM'

const bot = new TelegramApi(token, {polling : true})


// bot.setMyCommands([
//     {command : '/start', description : 'Выдача сообщения'}
// ])

bot.on('message',msg => {
    
    const text = msg.text
    const messageId = msg.chat.id

    if(text === '/start') {
        bot.sendMessage(messageId,`Привет, тебя зовут ${msg.chat.first_name}`)
    }
})