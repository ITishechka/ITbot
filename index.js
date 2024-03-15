
const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Незнакомец'}!, БОТ запущен\nСмотри менюшку, и выбирай что тебе подходит)`))

bot.command('user', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>ПОМОЩЬ с УЗ</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Смена пароля', 'btn_1'), Markup.button.callback('Генератор пароля', 'btn_2')],
                [Markup.button.callback('Разблокировка УЗ', 'btn_3'), Markup.button.callback('Аутентификация УЗ', 'btn_4')]
            ]
        ))
    } catch (e) {
        console.log(e)
    }
})

bot.command('links', async (ctx) => {
    try {
        await ctx.replyWithHTML(text.linkSd_1, { disable_web_page_preview: true }),
        await ctx.replyWithHTML(text.linkSd_2, { disable_web_page_preview: true }),
        await ctx.replyWithHTML(text.linkSd_3, { disable_web_page_preview: true }),
        await ctx.replyWithHTML(text.linkSd_4, { disable_web_page_preview: true }),
        await ctx.replyWithHTML(text.linkSd_5, { disable_web_page_preview: true })
    } catch (e) {
        console.log(e)
    }
})

bot.command('connection', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>УДАЛЁННОЕ ПОДКЛЮЧЕНИЕ</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('VPN CiscoAnyConnect', 'btn_5'), Markup.button.callback('VDI CitrixWorkSpace', 'btn_6')],
                [Markup.button.callback('VPN c домашнего НБ/ПК', 'btn_7'), Markup.button.callback('VDI c домашнего НБ/ПК', 'btn_8')]
            ]
        ))
    } catch (e) {
        console.log(e)
    }
})

bot.command('mail', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>OUTLOOK EXCHENGE</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Мобильная почта iOS', 'btn_9')],
                [Markup.button.callback('Мобильная почта Android', 'btn_10')],
                [Markup.button.callback('Мобильная почта Outlook', 'btn_')]
            ]
        ));
    } catch (e) {
        console.log(e);
    }
});

bot.command('print', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>ПЕЧАТЬ</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Печать по QR', 'btn_11')],
                [Markup.button.callback('Добавить принтер MacOS', 'btn_12')],
                [Markup.button.callback('Добавить принтер WinOS', 'btn_13')]
            ]
        ))
    } catch (e) {
        console.log(e)
    }
})

bot.command('cloud', async (ctx) => {
    try {
        await ctx.replyWithHTML(text.cloud, { disable_web_page_preview: true })
    } catch (e) {
        console.log(e)
    }
})



function getPassword() {
    const length = Math.floor(Math.random() * 2) + 12; // Генерируем случайную длину от 12 до 13 символов
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = lowercaseLetters.toUpperCase();
    const numbers = '0123456789';
    const specialChars = '!@#$%&*()_+-=;:<>?';

    // Создаем массив символов для генерации пароля (без специальных символов)
    const allChars = lowercaseLetters + uppercaseLetters + numbers;

    // Формируем пароль
    let password = '';
    for (let i = 0; i < length - 3; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    // Добавляем по одному символу каждого типа (маленькие буквы, большие буквы, цифры)
    password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    // Добавляем один специальный символ
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Перемешиваем символы в пароле
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}


function getPass(btn) {
    bot.action(btn, (ctx) => {
        const pass = getPassword()
        ctx.reply(`Ваш новый пароль: ${pass}`)
    })
}


function actionBtnBot(name, ...actions) {
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery();
            for (const [text, src] of actions) {
                await ctx.replyWithHTML(text, { disable_web_page_preview: true });
                if (src !== false) {
                    await ctx.replyWithPhoto({ source: src });
                }
            }
            await sendKeyboard(ctx);
        } catch (e) {
            console.error(e);
        }
    });
}



actionBtnBot('btn_1', [text.update_pass_1, false], [text.update_pass_2, false], [text.update_pass_3, false], [text.update_pass_4, './img/key.jpg'])
getPass('btn_2')
actionBtnBot('btn_3', [text.unlock_1, false])
actionBtnBot('btn_4', [text.aut_1, './img/aut/aut-1.jpg'], [text.aut_2, './img/aut/aut-2.jpg'])
actionBtnBot('btn_5', [text.vpn, './img/vpn/vpn-ra.jpg'], [text.vpn_2, './img/vpn/vpn-dap.jpg'], [text.vpn_3, './img/vpn/vpn-2.jpg'], [text.vpn_4, false])
actionBtnBot('btn_6', [text.vdi, './img/vdi-2.jpg'])
actionBtnBot('btn_7', [text.vpn_home_1, './img/vpn/vpn-1.jpg'], [text.vpn_home_2, './img/vpn/vpn-2.jpg'], [text.vpn_home_3, false])
actionBtnBot('btn_8', [text.vdi_home_1, false], [text.vdi_home_2, './img/vdi-11.jpg'], [text.vdi_home_3, './img/vdi-2.jpg'])
actionBtnBot('btn_9', [text.mail_ios_1, './img/mail-ios/mail-ios-1.jpg'], [text.mail_ios_2, './img/mail-ios/mail-ios-2.jpg'], [text.mail_ios_3, './img/mail-ios/mail-ios-3.jpg'], [text.mail_ios_4, './img/mail-ios/mail-ios-4.jpg'])
actionBtnBot('btn_10', [text.mail_and_1, './img/mail-android/1.1.jpg'], [text.mail_and_2, './img/mail-android//1.2.jpg'], [text.mail_and_3, './img/mail-android//1.3.jpg'])
actionBtnBot('btn_11', [text.qp_1, './img/qr.print/print-qr-1.jpg'], [text.qp_2, './img/qr.print/print-qr-2.jpg'], [text.qp_3, './img/qr.print/print-qr-3.jpg'], [text.qp_4, false])
actionBtnBot('btn_12', [text.print_mac_1, './img/print.mac/print-mac-1.jpg'], [text.print_mac_2, './img/print.mac/print-mac-2.jpg'], [text.print_mac_3, './img/print.mac/print-mac-3.jpg'])
actionBtnBot('btn_13',
[text.print_win_1, './img/print.win/print-win-1.jpg'],
[text.print_win_2, './img/print.win/print-win-2.jpg'],
[text.print_win_3, './img/print.win/print-win-3.jpg'],
[text.print_win_4, './img/print.win/print-win-4.jpg'],
[text.print_win_5, './img/print.win/print-win-5.jpg'],
[text.print_win_6, './img/print.win/print-win-6.jpg'])


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


