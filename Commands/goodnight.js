module.exports = {
    name: 'goodnight',
    description: "Embed for good night Command",
    execute(message, args, Discord){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Rocket League Trading Server__**')
        .setThumbnail('https://cdn.discordapp.com/attachments/700502377631055882/804221801433006110/gn.jpg')
        .setDescription(`${message.author} **is going to bed...**:zzz::dizzy:`)
        .setFooter('Rocket League Trading Server ©')
        .setTimestamp();

        message.channel.send(newEmbed);
    }
}