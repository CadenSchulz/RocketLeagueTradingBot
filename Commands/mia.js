// module.exports = {
//     name: 'Mia',
//     description: "Embed for Mia Command",
//     execute(message, args, Discord) {

//         // if (message.member.roles.cache.has('801533869386891304')) {

//             const newEmbed = new Discord.MessageEmbed()
//                 .setColor('#f3f3f3')
//                 .setTitle('**HEHE**')
//                 .setThumbnail('https://cdn.discordapp.com/attachments/803104805886623774/806054862222524466/image0.jpg')
//                 .setDescription("**MIA + CADEN**")
//                 .addFields(
//                     {
//                         name: 'I love you ',
//                         value: ':white_heart: :blue_heart:',
//                         inline: false
//                     }
//                 )
//                 .setFooter('MiaCaden ©');

//             message.channel.send(newEmbed);

//         // } else {
//         //     message.channel.send('**Sorry, this is Mia and my command** :)')
//         // }
//     }
// }

module.exports = {
    name: 'mia',
    description: "Embed for mia Command",
    execute(message, args, Discord){
        // let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**Mia + Caden_** :white_heart: :blue_heart:')
        .setThumbnail('https://cdn.discordapp.com/attachments/803104805886623774/806054862222524466/image0.jpg')
        .setFooter('CM Server ©')
        .setTimestamp();

        message.channel.send(newEmbed);
    }
}