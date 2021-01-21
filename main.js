const Discord = require('discord.js');

const client = new Discord.Client();

const privateMessag = require('./private-message')

const prefix = '-';

const fs = require('fs');

channel.send({ embed: newEmbed });

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(File => File.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./Commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () =>{
	console.log('RocketLeagueTradingBot is online!');
	client.user.setActivity('for -help', {type: 'WATCHING' });

	privateMessag(client, '-help', '**Do you need help? Please type -yes or -no**')
});

client.on('message', message => {

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'help'){
		client.commands.get('help').execute(message, args, Discord)
	}
	if(command === 'giveaway'){
		client.commands.get('giveaway').execute(message, args, Discord)
	}
	if(command === 'randomwinner'){
		client.commands.get('randomwinner').execute(message, args, Discord)
	}
	if(command === 'youtube'){
		client.commands.get('youtube').execute(message, args, Discord)
	}
	if(command === 'commands'){
		client.commands.get('commands').execute(message, args, Discord)
	}
	if(command === 'bot'){
		client.commands.get('bot').execute(message, args, Discord)
	}
	if(command === 'ping'){
		client.commands.get('ping').execute(message, args, Discord)
	}
	if(command === 'server'){
		client.commands.get('server').execute(message, args, Discord)
	}
	if(command === 'yes'){
		client.commands.get('yes').execute(message, args, Discord)
	}
	if(command === 'no'){
		client.commands.get('no').execute(message, args, Discord)
	}
	if(command === 'scam'){
		client.commands.get('scam').execute(message, args, Discord)
	}
	if(command === 'rules'){
		client.commands.get('rules').execute(message, args, Discord)
	}
	if(command === 'other'){
		client.commands.get('other').execute(message, args, Discord)
	}
	if(command === 'more'){
		client.commands.get('more').execute(message, args, Discord)
	}
	if(command === 'shoutout'){
		client.commands.get('shoutout').execute(message, args, Discord);
	}
});

client.login(process.env.token);