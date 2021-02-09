module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '795547039467307029';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "PC (Computer)");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Xbox");
 
        const yellowTeamEmoji = '🎮';
        const blueTeamEmoji = '🖥️';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `${PCEmoji} for PC\n`
                + `${XboxEmoji} for Xbox`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(PCEmoji);
        messageEmbed.react(XboxEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === PCEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(PCRole);
                }
                if (reaction.emoji.name === XboxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(XboxRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === PCEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(PCRole);
                }
                if (reaction.emoji.name === XboxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(XboxRole);
                }
            } else {
                return;
            }
        });
    }
 
}   