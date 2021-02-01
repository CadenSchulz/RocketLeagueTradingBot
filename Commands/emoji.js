module.exports = {
    name: 'emoji',
    description: "Embed for emoji Command",
    execute(message, args, Discord){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Rocket League Trading Server__**')
        .setThumbnail(message.guild.iconURL())
        .setDescription(`${message.author} **These are all the emojis:**`)

        message.channel.send(newEmbed).then(msg => {
            msg.react(':Verified:')
            // msg.react('')
            // msg.react('')
            // msg.react('')
            // msg.react('')
            // msg.react('')
            // msg.react('')
            // msg.react('')
            // msg.react('')
        })
    }
}