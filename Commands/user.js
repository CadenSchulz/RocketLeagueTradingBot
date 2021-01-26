module.exports = {
    name: 'user',
    description: "Embed for user Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setDescription(`${user}`)
        .setColor(`#FFFFFF`)
        .setThumbnail(`${user.displayAvatarURL}`)
        .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('Status:', user.presence.status, true)
        .addField('Roles:', user.roles.map(r => `${r}`).join(' | '), true)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();

    message.channel.send({ embed: embed });
}