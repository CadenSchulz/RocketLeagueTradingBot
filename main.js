const Discord = require('discord.js');

const client = new Discord.Client();

const privateMessag = require('./private-message')

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(File => File.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () => {
	var testChannel = client.channels.cache.find(channel => channel.id === '804565322681286676');
	console.log('RocketLeagueTradingBot is online!');
	setInterval(() =>{
		testChannel.send("Good Morning Everyone")
	}, 86400);
	client.user.setActivity('for -help', { type: 'WATCHING' });
	// client.user.setActivity("Playng Rocket League", {
	// 	type: "STREAMING",
	// 	url: "https://www.twitch.tv/cadenscrims"


	privateMessag(client, '-help', '**Do you need help? Please type -yes or -no**')
});

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'help') {
		client.commands.get('help').execute(message, args, Discord)
	}
	if (command === 'giveaway') {
		client.commands.get('giveaway').execute(message, args, Discord)
	}
	if (command === 'randomwinner') {
		client.commands.get('randomwinner').execute(message, args, Discord)
	}
	if (command === 'youtube') {
		client.commands.get('youtube').execute(message, args, Discord)
	}
	if (command === 'commands') {
		client.commands.get('commands').execute(message, args, Discord)
	}
	if (command === 'bot') {
		client.commands.get('bot').execute(message, args, Discord)
	}
	if (command === 'ping') {
		client.commands.get('ping').execute(message, args, Discord)
	}
	if (command === 'yes') {
		client.commands.get('yes').execute(message, args, Discord)
	}
	if (command === 'no') {
		client.commands.get('no').execute(message, args, Discord)
	}
	if (command === 'scam') {
		client.commands.get('scam').execute(message, args, Discord)
	}
	if (command === 'rules') {
		client.commands.get('rules').execute(message, args, Discord)
	}
	if (command === 'other') {
		client.commands.get('other').execute(message, args, Discord)
	}
	if (command === 'more') {
		client.commands.get('more').execute(message, args, Discord)
	}
	if (command === 'shoutout') {
		client.commands.get('shoutout').execute(message, args, Discord)
	}
	if (command === 'kick') {
		client.commands.get('kick').execute(message, args, Discord)
	}
	if (command === 'ban') {
		client.commands.get('ban').execute(message, args, Discord)
	}
	if (command === 'mute') {
		client.commands.get('mute').execute(message, args, Discord)
	}
	if (command === 'unmute') {
		client.commands.get('unmute').execute(message, args, Discord)
	}
	if (command === 'server') {
		client.commands.get('server').execute(message, args, Discord)
	}
	if (command === 'giveawayend') {
		client.commands.get('giveawayend').execute(message, args, Discord)
	}
	if (command === 'giveawaydelete') {
		client.commands.get('giveawaydelete').execute(message, args, Discord)
	}
	if (command === 'user') {
		client.commands.get('user').execute(message, args, Discord)
	}
	if (command === 'twitch') {
		client.commands.get('twitch').execute(message, args, Discord)
		// message.react('👍');
	}
	if (command === 'modapplication') {
		client.commands.get('modapplication').execute(message, args, Discord)
	}
	if (command === 'play') {
		client.commands.get('play').execute(message, args, Discord)
	}
	if (command === 'leave') {
		client.commands.get('leave').execute(message, args, Discord)
	}
	if (command === 'gn') {
		client.commands.get('gn').execute(message, args, Discord)
	}
	if (command === 'gm') {
		client.commands.get('gm').execute(message, args, Discord)
	}
	if (command === 'goodmorning') {
		client.commands.get('goodmorning').execute(message, args, Discord)
	}
	if (command === 'goodnight') {
		client.commands.get('goodnight').execute(message, args, Discord)
	}
	if (command === 'charity') {
		client.commands.get('charity').execute(message, args, Discord)
	}
	if (command === 'donate') {
		client.commands.get('donate').execute(message, args, Discord)
	}
	if (command === 'announce') {
		client.commands.get('announce').execute(message, args, Discord)
	}
	if (command === 'giveaway2') {
		client.commands.get('giveaway2').execute(message, args, Discord)
	}
	if (command === 'eannounce') {
		client.commands.get('eannounce').execute(message, args, Discord)
	}
	if (command === 'image1') {
		client.commands.get('image1').execute(message, args, Discord)
	}
	if (command === 'image2') {
		client.commands.get('image2').execute(message, args, Discord)
	}
	if (command === 'image3') {
		client.commands.get('image3').execute(message, args, Discord)
	}
	if (command === 'image4') {
		client.commands.get('image4').execute(message, args, Discord)
	}
	if (command === 'image5') {
		client.commands.get('image5').execute(message, args, Discord)
	}
	if (command === 'image6') {
		client.commands.get('image6').execute(message, args, Discord);
	}
	if (command === 'clear') {
		client.commands.get('clear').execute(message, args, Discord);
	}
	if (command === 'suggestions') {
		client.commands.get('suggestions').execute(client, message, args, Discord);
	}
	if (command === 'suggest') {
		client.commands.get('suggest').execute(client, message, args, Discord);
	}
	if (command === 'sug') {
		client.commands.get('sug').execute(client, message, args, Discord);
	}
	// if (command === 'image') {
	// 	client.commands.get('image').execute(client, message, args, Discord);
	// }
});

const { Client, Collection, MessageEmbed } = require("discord.js");

client.on('guildMemberAdd', (member) => {
	const embed = new MessageEmbed()
		.setTitle(`Welcome to the Rocket League Trading Server`)
		.setColor('#f3f3f3')
		.setThumbnail(member.user.displayAvatarURL())
		.setTimestamp()
		.addField("Name", member.user.username)
		.addField('ID/Tag:', member.user)
	member.guild.channels.cache.get('808518639845507082').send({ embed })
});

client.login(process.env.token);