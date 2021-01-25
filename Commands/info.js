const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class UserInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'misc',
            memberName: 'info',
            description: 'Displays information abouta user'
        })
    }

    run = async (message) => {
        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.member.cache.gt(user.id)

        const embed = new MessageEmbed().setAuthor(
            `User info for ${user.username}`,
            user.displayAvatarURL)
        

        channel.send(embed)
    }
}