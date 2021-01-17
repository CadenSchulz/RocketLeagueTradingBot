module.exports = {
    name: '-rules',
    description: "Embed for -rules Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**Rules/Guidelines**')
        .setDescription("**To access the rules/guidelines of the server:** [click me](https://discord.gg/qeQCEJvzD8).")
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}