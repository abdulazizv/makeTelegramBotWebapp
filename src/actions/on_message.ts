import {bot} from '../core/bot.js'
import {Composer, Markup} from "telegraf";
import {User} from "../models/user.model.js";
// import {webApp} from "telegraf/typings/button.js";

const composer = new Composer()

composer.on('message', async (ctx) => {
    let lang = ''
    let tg_link = ''
    await User.findOne({where:{user_id: `${ctx.from.id}`}}).then(async (user) => {
        if(!user) {
            await ctx.reply(`👉 "/start" `)
        } else {
            lang = user.dataValues.user_lang
            tg_link = user.dataValues.username
        }
    })
    const user = await User.findOne({
        where:{
            user_id: `${ctx.from.id}`
        }
    })
    
})

bot.use(composer.middleware())