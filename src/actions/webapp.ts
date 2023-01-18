import {bot} from "../core/index.js";
import {Composer} from "telegraf";

const composer = new Composer()

const webAppUrl = '/'
composer.hears("👕 Kiyimlarni ko'rish",async(ctx) => {
    console.log("birnarsa")
    const chatId = ctx.chat.id;
    await bot.telegram.sendMessage(chatId,'Pastdagi buttonga bosgan holda u yerga kirishingiz mumkin',{
        reply_markup:{
            inline_keyboard:[
                [{text:'Buyurtma berish',web_app:{url:webAppUrl}}]
            ]
        }
    })
})