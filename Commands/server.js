// let embed = new Discord.MessageEmbed()
//             .setColor("RANDOM")
//             .setTitle("Server Info")
//             .setImage(message.guild.iconURL)
//             .setDescription(`${message.guild}'s information`)
//             .addField("Owner", `The owner of this server is ${message.guild.owner}`)
//             .addField("Member Count", `This server has ${message.guild.memberCount} members`)
//             .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
//             .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
            

//         message.channel.send(embed)

module.exports = {
    name: 'server',
    description: "Embed for server Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("777777")
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s information`)
            .addField("Owner", `The owner of this server is ${message.guild.owner}`)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
        
        message.channel.send(newEmbed);
    }
}








