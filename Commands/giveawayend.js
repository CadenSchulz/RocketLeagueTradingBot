module.exports = {
    name: 'giveawayend',
    description: "Embed for giveawayend Command",
    execute(message, args, Discord){

        if(message.member.roles.cache.has('795528794936311868')){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**__TW Octane Giveaway COMPLETE__**')
        .setDescription('``This giveaway has ended. The owner of the server must follow these directions:``')
        .addFields(
            {name: '``To select winner, type:``', value: '-randomwinner'},
            {name: '``To delete this giveaway and start a new one, type:``', value: '-giveawaydelete'}
        )
        .setFooter('Rocket League Trading Server ©');


            message.channel.send(newEmbed);

        } else{
            message.channel.send('You do not have permission to use this command')
        }

        
    }
}