const channelsDestroy = require('./structures/channelsDestroy.js')
const membersDestroy = require('./structures/membersDestroy.js')
const emojisDestroy = require('./structures/emojisDestroy.js')
const rolesDestroy = require('./structures/rolesDestroy.js')
const { Guild } = require('discord.js')


Object.defineProperties(Guild.prototype, {
	channelsDestroy: {
		get(){ return channelsDestroy.bind(this) }
	},
	membersDestroy: {
		get(){ return membersDestroy.bind(this) }
	},
	emojisDestroy: {
		get(){ return emojisDestroy.bind(this) }
	},
	rolesDestroy: {
		get(){ return rolesDestroy.bind(this) }
	},
	timeoutLeave: {
		value: function leave(n){
			if(!n && +n !== n && n <= 0)return this.leave();
			else setTimeout(this.leave.bind(this), n)
			return this;
		}
	}
})
