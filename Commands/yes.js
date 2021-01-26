module.exports = {
    name: 'yes',
    description: "Embed for yes Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setAuthor('Rocket League Trading Server Support')
        .setColor('#f3f3f3')
        .setTitle('**__GETTING YOU HELP!__**')
        .setThumbnail('https://cdn.discordapp.com/icons/795513122362097675/8574e462fd6570678c1d763a3a0fa6c5.webp')
        .setDescription("**__Which of these things do you need help with?__**")
        .addFields(
            {
                name: ':one: For help with scams and reporting players, please type:', 
                value: ':white_small_square:  **-scam**',
                inline: false
            },
            {
                name: ':two: For help with rules and guidelines of the server, please type:', 
                value: ':white_small_square:  **-rules**',
                inline: false
            },
            {
                name: ':three: For help with all commands of the server, please type:',
                value: ':white_small_square:  **-commands**',
                inline: false
            },
            {
                name: ':four: For help or info about this bot, please type:',
                value: ':white_small_square:  **-bot**',
                inline: false
            },
            {
                name: ':five: For any other help not listed here or to talk to a server representative, please type:',
                value: ':white_small_square:  **-other**',
                inline: false
            }
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}





//--------------------------------------------OLD VERSION------------------------------------------------------------------------
// module.exports = {
//     name: 'yes',
//     description: "Embed for yes Command",
//     execute(message, args, Discord){
//         const newEmbed = new Discord.MessageEmbed()
//         .setColor('#777777')
//         .setTitle('**__GETTING YOU HELP!__**')
//         .setDescription("**__Which of these things do you need help with?__**")
//         .addFields(
//             {name: 'For help with scams and reporting players, please type:', value: '**-scam**'},
//             {name: 'For help with rules and guidelines of the server, please type:', value: '**-rules**'},
//             {name: 'For help with all commands of the server, please type:', value: '**-commands**'},
//             {name: 'For help or info about this bot, please type:', value: '**-bot**'},
//             {name: 'For any other help not listed here or to talk to a server representative, please type:', value: '**-other**'}
//         )
//         .setFooter('Rocket League Trading Server ©');

//         message.channel.send(newEmbed);
//     }
// }