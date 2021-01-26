module.exports = {
    name: 'bot',
    description: "Embed for youtube Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Rocket League Trading Server Bot__**')
        .setDescription("**TO ADD THIS BOT TO YOUR SERVER:** [click me](https://discord.com/api/oauth2/authorize?client_id=797190814572609627&permissions=8&scope=bot).")
        .addFields(
            {name: 'About the Bot', value: 'This bot was created on 1/10/21 by Caden. There are multiple commands to use with this bot and more commands are added daily!'},
            {name: 'To access all commands type:', value: '-commands'}
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}