module.exports = {
    name: 'ping',
    description: "Embed for ping Command",
    execute(message, args) {
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`);
        }
    };