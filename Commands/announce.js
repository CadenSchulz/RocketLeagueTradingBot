const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "announce",
  description: "Get the bot to say what ever you want in a specific channel.",
  usage: "<channel id> <msg>",
  run: async (message, args, Discord) => {
    let rChannel = message.guild.channels.cache.get(args[0])
    if (!rChannel)return message.channel.send(`You did not specify your channel to send the announcement to`)
    console.log(rChannel);
    let MSG = args.slice(1).join(" ");
    // let MSG = message.content.split(`${bot.prefix}announce ${rChannel.id} `).join("")
    if (!MSG)return message.channel.send(`You did not specify your message to send!`)
    const _ = new MessageEmbed()
      .setTitle(`${message.author} says:`)
      .setDescription(`${MSG}`)
      .setColor('#f3f3f3')
      .setTimestamp()
      .setFooter('Rocket League Trading Server ©')
    rChannel.send(_);
    message.delete();
  },
};