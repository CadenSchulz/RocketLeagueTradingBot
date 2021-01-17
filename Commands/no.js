module.exports = {
    name: 'no',
    description: "Embed for no Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**No Help Needed**')
        .setDescription("Thank you for choosing the Rocket League Trading Server! If you have anymore questions, please type: -help")
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}