module.exports = {
    name: 'yes',
    description: "Embed for yes Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**__GETTING YOU HELP!__**')
        // .setThumbnail(message.guild.iconURL())
        .setDescription("**__Which of these things do you need help with?__**")
        .addFields(
            {
                name: 'For help with scams and reporting players, please type:', 
                value: '**-scam**',
                inline: false
            },
            {
                name: 'For help with rules and guidelines of the server, please type:', 
                value: '**-rules**',
                inline: false
            },
            {
                name: 'For help with all commands of the server, please type:',
                value: '**-commands**',
                inline: false
            },
            {
                name: 'For help or info about this bot, please type:',
                value: '**-bot**',
                inline: false
            },
            {
                name: 'For any other help not listed here or to talk to a server representative, please type:',
                value: '**-other**',
                inline: false
            }
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}



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