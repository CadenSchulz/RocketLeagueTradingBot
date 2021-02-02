const Discord = require ('discord.js'),
    arraySort = require('array-sort'),
    table = require('table');

exports.run = async (client, message, args, tools) => {
    let invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = [['User', 'Uses']];
    invites.forEach(function(invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]);
    })

    const embed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('Server Invites')
        .addField('Leaderboard', `\`\`\`${table.table(possibleInvites)}\`\`\``);
    message.channel.send(embed);
}