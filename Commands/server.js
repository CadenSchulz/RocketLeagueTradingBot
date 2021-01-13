module.exports = {
    name: 'server',
    description: "Embed for youtube Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
        .setDescription("**This is the Rocket League Trading Server's Youtube Channel:** [click me](https://www.youtube.com/channel/UCeHkU3QW6zcEC68F3F4zwXw).")
        .addFields(
            {name: 'Step 1', value: 'Like'},
            {name: 'Step 2', value: 'Subscribe'},
            {name: 'Step 3', value: 'Comment'}
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}









message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);