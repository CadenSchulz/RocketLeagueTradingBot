module.exports = {
	desc: 'checks Rocket League rank stats',
	syntax: '[platform] [account]',
	//onlyORLA: true,
	async run(message, args) {
		const Discord = require('discord.js')
		const moment = require('moment-timezone')

		const requestInitiated = moment().unix()

		const accountInfo = {
			"isReal": false
		}

		if (!(0 in args)) {
			// if checking own rank
			let query = await message.client.query('SELECT * FROM `users` WHERE `id`="'+message.author.id+'"')
			const user = query.getFirst()

			if (user.main !== null) {
				// if account is linked
				accountInfo['platform'] = user.main
				accountInfo['account'] = user[user.main]
				accountInfo['isReal'] = true
			} else {
				// if account is not linked
				message.client.error('notLinked', message)
				return
			}
		} else {
			// if checking other player's rank
			if (message.mentions.members.first()) {
				// if checking via ping
				let query = await message.client.query('SELECT * FROM `users` WHERE `id`="'+message.mentions.members.first().user.id+'"')
				const user = query.getFirst()

				if (user.main !== null) {
					// if account is linked
					accountInfo['platform'] = user.main
					accountInfo['account'] = user[user.main]
				} else {
					// if account is not linked
					message.client.error('notLinkedOther', message)
					return
				}
			} else {
				// if checking via platform and account
				if (['pc', 'ps', 'xbox'].indexOf(args[0].toLowerCase()) === -1) {
                    message.client.error('invalidPlatform', message)
                    return
                }
                
                if (!(1 in args)) {
                    message.client.error('noPlayerSpecified', message)
                    return
				}
				
				accountInfo['platform'] = args[0].toLowerCase()
				accountInfo['account'] = args[1]
			}
		}
		const platforms = {steam: 'steam', pc: 'steam', xbox: 'xbl', ps: 'psn'}
        accountInfo['platform'] = platforms[accountInfo['platform']]

		const loading = message.client.guilds.cache.find(g => g.id === '690588183683006465').emojis.cache.find(e => e.name === 'd_loading')

		message.channel.send(`${loading} Getting rank...`).then(async msg => {
			const {Stat} = require('../../utils/Stat')
			const player = await Stat.build(message.client, accountInfo['platform'], accountInfo['account'])

			if (player.valid) {
				const Embed = new Discord.MessageEmbed()
					.setColor(message.client.config.color)
					.setFooter(`ORLA - Requested by ${message.author.tag}`, message.client.config.logo)
					.setTitle(`RL Stats: ${player.user.name}`)
					.setURL(player.user.statsURL)
					.setThumbnail(player.user.avatarURL)
				
				let totalModes = 0
				for (const i in player.modes) {
					let mode = player.modes[i]
					
					const ranksList = ['Unranked','BronzeI','BronzeII','BronzeIII','SilverI','SilverII','SilverIII','GoldI','GoldII','GoldIII','PlatinumI','PlatinumII','PlatinumIII','DiamondI','DiamondII','DiamondIII','ChampionI','ChampionII','ChampionIII','GrandChampionI','GrandChampionII','GrandChampionIII','SupersonicLegend']
					const ranksEmoji = ['00_unranked','01_bronze1','02_bronze2','03_bronze3','04_silver1','05_silver2','06_silver3','07_gold1','08_gold2','09_gold3','10_plat1','11_plat2','12_plat3','13_diamond1','14_diamond2','15_diamond3','16_champion1','17_champion2','18_champion3','19_grandchampion1','20_grandchampion2','21_grandchampion3','22_supersoniclegend']
					let emote = ''
					for (x = 0; x < ranksList.length; x++) {
						if (mode.rank.replace(/ /g,'') == ranksList[x]) {
							emote = message.client.guilds.cache.find(g => g.id === '690588183683006465').emojis.cache.find(e => e.name === ranksEmoji[x])
						}
					}
					
					d_up = message.client.guilds.cache.find(g => g.id === '690588183683006465').emojis.cache.find(e => e.name === 'd_up')
					d_down = message.client.guilds.cache.find(g => g.id === '690588183683006465').emojis.cache.find(e => e.name === 'd_down')
					
					const rank = ((mode.rank === 'Supersonic Legend') || (mode.rank === 'Unranked')) ? `${emote} (${mode.mmr})` : `${emote} Div ${mode.division} (${mode.mmr})`
					
					let mmr = ''
					if (mode.rank === 'Supersonic Legend') {
						mmr = (mode.down !== undefined) ? `${d_down} ${mode.down}` : ''
					} else {
						mmr = ((mode.rank === 'Unranked') || (mode.down === undefined) || (mode.up === undefined)) ? '' : `${d_up} ${mode.up} ${d_down} ${mode.down}`
					}
					
					const streak = (mode.streak > 0) ? `🔥 ${mode.streak}` : `❄️ ${String(mode.streak).replace('-','')}`
					const games = (mode.name === 'Casual') ? '' : `🕐 ${mode.games} - ${streak}`
					const position = (mode.overall >= 1000) ? `${Math.floor((100 - mode.percentile)*10)/10}%` : `#${mode.overall}`
					
					Embed.addField(`__${mode.name}__ *(Top ${position})*`, `${rank}\n${mmr}\n${games}`, true)
					
					totalModes += 1
				}
				
				while (totalModes % 3 !== 0) {
					Embed.addField("‎", "‎", true) // these have invisible characters in them
					totalModes += 1
				}

				msg.edit(' ', Embed)

				if (accountInfo['isReal'] === true) {
					let query = await message.client.query('SELECT `rankroles` FROM `servers` WHERE `id`="'+message.channel.guild.id+'"')
					const rankID = JSON.parse(query.getFirst())
					
					if (rankID !== null) {
						for (i in rankID) {
							if (message.member.roles.cache.some(role => role.id === rankID[i])) {
								message.member.roles.remove(rankID[i])
							}
						}
						message.member.roles.add(rankID[player.highestRank().value-1])
					}
				}
			} else {
				if (requestInitiated > (moment().unix() - 20)) {
					const Embed = new Discord.MessageEmbed()
						.setColor(message.client.config.color)
						.setFooter(`ORLA - Requested by ${message.author.tag}`, message.client.config.logo)
						.setTitle('Error: Profile Not Found')
						.setDescription('The profile you searched for could not be found. Please try again.')
					
					msg.edit(' ', Embed)
				} else {
					const Embed = new Discord.MessageEmbed()
						.setColor(message.client.config.color)
						.setFooter(`ORLA - Requested by ${message.author.tag}`, message.client.config.logo)
						.setTitle('Error: Request Timeout')
						.setDescription('The server took too long to respond. Unfortunately we can\'t receive your account stats right now.')
					
					msg.edit(' ', Embed)
				}
			}
		})
	}
}