// module.exports = {
//     name: 'server',
//     description: "Embed for server Command",
//     execute(message, args, Discord){
//         const newEmbed = new Discord.MessageEmbed()
//         .setColor("777777")
//             .setTitle("Server Info")
//             .setImage(message.guild.iconURL)
//             .setDescription(`${message.guild}'s information`)
//             .addField("Owner", `The owner of this server is ${message.guild.owner}`)
//             .addField("Member Count", `This server has ${message.guild.memberCount} members`)
//             .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
//             .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
        
//         message.channel.send(newEmbed);
//     }
// }









module.exports = {
    name: 'server',
    description: "Embed for server Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setColor('#FFFFFF')
        .setThumbnail(message.guild.iconURL())
        .setDescription(`Owner: ${message.guild.owner}`)
        .addField('Member Count', `${message.guild.memberCount}`)
        .addField (guild.members.cache.filter(member => !member.user.bot).size)
        .addField("Roles Count", `${message.guild.roles.cache.size} roles`)
        .addField("Emoji Count", `${message.guild.emojis.cache.size} emojis`)
        .addField('AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
        .addField('AFK Channel', `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`, true)
        .addField('Location', message.guild.region, true)
        .addField('Created', message.guild.createdAt.toLocaleString(), true)
        .setTimestamp()
        .setFooter('Rocket League Trading Server ©');
        
        message.channel.send(newEmbed);
    }
}

exports.conf = {
    enabled: true,
    aliases: ['info','stats','serverstats','guildinfo','guildstats'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'server',
    description: 'Displays server information & statistics',
    usage: 'server',
    category: 'General',
  };









