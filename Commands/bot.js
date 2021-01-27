// module.exports = {
//     name: 'bot',
//     description: "Embed for youtube Command",
//     execute(message, args, Discord){
//         const newEmbed = new Discord.MessageEmbed()
//         .setColor('#f3f3f3')
//         .setTitle('**__Rocket League Trading Server Bot__**')
//         .setDescription("**TO ADD THIS BOT TO YOUR SERVER:** [click me](https://discord.com/api/oauth2/authorize?client_id=797190814572609627&permissions=8&scope=bot).")
//         .addFields(
//             {
//                 name: 'About the Bot', 
//                 value: 'This bot was created on 1/10/21 by <@700481325232160838>. There are multiple commands to use with this bot and more commands are added daily!',
//                 inline: false
//             },

//             {name: 'To access all commands type:', value: '-commands'}
//         )
//         .setFooter('Rocket League Trading Server ©');

//         message.channel.send(newEmbed);
//     }
// }







const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bot",
    category: "Commands",
    execute(message, args, Discord){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:803722108059648042> online";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`**Rocket League Trading Bot** stats`)
            .setColor(`#f3f3f3`)
            .setThumbnail('https://cdn.discordapp.com/icons/795513122362097675/8574e462fd6570678c1d763a3a0fa6c5.webp')
            .addFields(
                {
                    name: "**Name: **",
                    value: 'Rocket League Trading Bot',
                    inline: true
                },
                {
                    name: "#️⃣ **Discriminator:** ",
                    value: `8357`,
                    inline: true
                },
                {
                    name: "🆔 **ID:** ",
                    value: '797190814572609627',
                },
                {
                    name: "**Bot or Not:**",
                    value: 'BOT',
                    inline: true
                },
                {
                    name: "**Current Status: **",
                    value: 'online :green_circle:',
                    inline: true
                },
                {
                    name: '**Avatar link:** ',
                    value: `[Click Here](https://cdn.discordapp.com/icons/795513122362097675/8574e462fd6570678c1d763a3a0fa6c5.webp)`
                },
                {
                    name: '**Creation Date: **',
                    value: '1/10/21',
                    inline: true
                },
                {
                    name: '**Creation By: **',
                    value: '<@700481325232160838>',
                    inline: true
                },
                {
                    name: '**Joined Date: **',
                    value: '1/10/21',
                    inline: true
                },
                {
                    name: '**Bot Roles: **',
                    value: '<!795543385632407582>',
                    inline: true
                }
            )

        message.channel.send(embed)
    }
}