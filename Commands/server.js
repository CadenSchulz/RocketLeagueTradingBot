module.exports = {
    name: 'server',
    description: "Embed for server Command",
    execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        }
    };