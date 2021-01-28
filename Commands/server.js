module.exports = {
  name: 'server',
  description: "Embed for server Command",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setColor('#f3f3f3')
      .setThumbnail(message.guild.iconURL())
      .setDescription(`Owner: ${message.guild.owner}`)
      .addFields(
        {
          name: ':small_blue_diamond: Member Count',
          value: `${message.guild.memberCount} members`,
          inline: true
        },
        {
          name: ':small_blue_diamond: Bot Count',
          value: `10`,
          inline: true
        },
        {
          name: ':small_blue_diamond: Main Bot',
          value: `<@797190814572609627>`,
          inline: true
        },
        {
          name: ":small_blue_diamond: Roles Count",
          value: `${message.guild.roles.cache.size} roles`,
          inline: true
        },
        {
          name: ':small_blue_diamond: Main Roles',
          value: "<@&795528794936311868> <@&797392951310549033> <@&795912955169996800> <@&798873968785621002> <@&795851077957189645> <@&795529470240358420> <@&795543385632407582>",
          inline: true
        },
        {
          name: ':small_blue_diamond: Other Roles',
          value: `<@&795529951306711090> <@&795529691662123009> <@&795529768438071297> <@&795562842413465651> <@&803060692542160896>`,
          inline: true
        },
        {
          name: ':small_blue_diamond: Emojis',
          value: `${message.guild.emojis.cache.size} emojis`,
          inline: true
        },
        {
          name: ':small_blue_diamond: AFK Timeout',
          value: `${message.guild.afkTimeout / 60} minutes`,
          inline: true
        },
        {
          name: ':small_blue_diamond: AFK Channel',
          value: `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`,
          inline: true
        },
        {
          name: ':small_blue_diamond: Location',
          value: message.guild.region,
          inline: true
        },
        {
          name: ':small_blue_diamond: Commands List',
          value: `[CLICK HERE](https://sites.google.com/view/rocketleaguetradingserver/commands)`,
          inline: true
        },
        {
          name: ':small_blue_diamond: Date Created',
          value: `January 4th, 2021`,
          inline: true
        },
        {
          name: ':small_blue_diamond: Time Created',
          value: `4:45 AM`,
          inline: true
        }
      )
      .setTimestamp()
      .setFooter('Rocket League Trading Server ©');

    message.channel.send(newEmbed);
  }
}

exports.conf = {
  enabled: true,
  aliases: ['info', 'stats', 'serverstats', 'guildinfo', 'guildstats'],
  permLevel: 0
};

exports.help = {
  name: 'server',
  description: 'Displays server information & statistics',
  usage: 'server',
  category: 'General',
};









