module.exports = {
    name: 'help',
    description: "Embed for Help Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**Help Center**')
        .setDescription('Follow these steps to get help')
        .addFields(
            {name: 'Step 1', value: 'Go to the SUPPORT channel'},
            {name: 'Step 2', value: 'Click the reaction button (looks like an envelope)'},
            {name: 'Step 3', value: 'A private channel that only you and moderators can see will be setup. Talk with a moderator and they will help you out!'},
            {name: 'Extra Help', value: 'If no moderator assists you, then talk in general-chat for community support'}
        )
        .setImage('https://img.icons8.com/nolan/452/rocket-league.png')
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}