module.exports = {
    name: 'gn',
    description: "Embed for good night Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Rocket League Trading Server__**')
        .setThumbnail('https://cdn.discordapp.com/attachments/700502377631055882/804221801433006110/gn.jpg')
        .setDescription(`${user.user.username} **is going to bed...**`)
        .setFooter('Rocket League Trading Server ©')
        .setTimestamp();

        message.channel.send(newEmbed);
    }
}