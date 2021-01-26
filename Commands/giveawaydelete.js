module.exports = {
    name: 'giveawaydelete',
    description: "Embed for giveawaydelete Command",
    execute(message, args, Discord){

        if(message.member.roles.cache.has('795528794936311868')){

        const newEmbed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setColor('#777777')
        .setTitle('**__GIVEAWAY DELETED__**')
        .setThumbnail('https://lh3.googleusercontent.com/proxy/TBUgYaL6kmOQCiQH6JCjGeXCEnMthxWnrlKXz2eOiYihVQ0YDttI4mI24OLcDQWoZw7JVta3uBlV4eNdv1AzkCuZJu8xJZSerFnPJgpD8ISGTOVUj25TlNpW14a8PKYb0ic4')
        .setDescription('```The current giveaway has been successfully deleted```')
        .setTimestamp()
        .setFooter('Rocket League Trading Server ©');


            message.channel.send(newEmbed);

        } else{
            message.channel.send('**You do not have permission to use this command!**')
        }

        
    }
}