module.exports = {
    name: 'randomwinner',
    description: "Embed for randomwinner Command",
    execute(message, args, Discord){

        if(message.member.roles.cache.has('797392951310549033')){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**__Winner of TW OCTANE__**')
        .addFields(
            {name: '**Winner:**', value: '@AdoptMe#1467'}
        )
        .setFooter('Rocket League Trading Server ©');

            message.channel.send(newEmbed);
        
        
        } else{
            message.channel.send('You do not have permission to use this command')
        }

        
    }
}