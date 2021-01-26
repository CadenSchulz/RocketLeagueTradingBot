const { User, ClientUser } = require("discord.js");

module.exports = {
    name: 'shoutout',
    description: "Embed for shoutout Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**Shoutout**')
        .setDescription("**Shoutout to @---------------------- for this sick new server profile picture! Go join his discord server:** [Click Here](https://discord.gg/TwHsft5yhH).")
        .setImage('https://cdn.discordapp.com/attachments/800852669698539520/801519373574733914/image0.png')
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}