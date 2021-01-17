module.exports = {
    name: 'scam',
    description: "Embed for scam Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**Scammers/Reporting Players**')
        .setDescription("**To report a player of scamming or potentially scamming:** [click me](https://discord.gg/5v4NuMNeEH).")
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}