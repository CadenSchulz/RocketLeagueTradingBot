const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "announce",
  description: "Get the bot to say what ever you want in a specific channel.",
  usage: "<channel id> <msg>",
  execute: async (bot, message, args) => {
    let rChannel = message.mentions.channels.first() /* to allow the user to #channel instead of using the ID */ || bot.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `You did not specify your channel to send the announcement too!`
      );
    console.log(bot);
    let MSG = message.content
      .split(`${bot.prefix}announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    const _ = new MessageEmbed()
      .setTitle(`New announcement!`)
      .setDescription(`${MSG}`)
      .setColor("#f3f3f3");
    rChannel.send(_);
    message.delete();
  },
};