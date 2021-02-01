module.exports = {
	desc: 'sends messages with an embed',
	syntax: '[#channel] [image URL] [title] | [message]',
	run(message, args) {
        const Discord = require('discord.js')
        
        // Ignore if no args are sent
        if (!args[0]) return

        // Create Embed
        const Embed = new Discord.MessageEmbed()
            .setColor(message.client.config.color)
        
        // Redirect to new channel if provided
        if (args[0].startsWith('<#') && args[0].endsWith('>')) {
            let newChannelID = args[0].replace('<#','').replace('>','')
            var channel = message.client.channels.cache.find(channels => channels.id === newChannelID)
            args.shift()
        }

        // Add image if provided
        if (args[0].startsWith('http')) {
            Embed.setImage(args[0])
            args.shift()
        }

        // Split title and message
        let response = args.join(' ')
        if (response.includes('|')) {
            let content = response.split('|')
            Embed.setTitle(content[0])
            content.shift()
            response = content.join('|')
        }
        Embed.setDescription(response)

        // Send to correct channel
        if (channel) {
            channel.send(Embed)
        } else {
            message.channel.send(Embed)
        }
	}
}