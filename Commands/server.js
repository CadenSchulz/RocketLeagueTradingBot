module.exports = {
    name: 'server',
    description: "Embed for server Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setDescription(`${message.guild}'s information`)
            .addField("Owner", `The owner of this server is <@700481325232160838>`)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
            

        message.channel.send(newEmbed);
    }
}



//module.exports = {
  //  name: 'server',
    //description: "Embed for server Command",
    //execute(message, args, Discord){
        //const newEmbed = new Discord.MessageEmbed()
        //.setColor('#777777')
        //.setDescription(`**Server name**: ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`)
       // .setFooter('Rocket League Trading Server ©');

      //  message.channel.send(newEmbed);
   // }
//}









