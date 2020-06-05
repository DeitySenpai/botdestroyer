const config = require('config')

function membersDestroy(){
	let members = this.members.filter(({ id, bannable }) => !config.filterUsers.includes(id) && bannable);
	members.forEach(member => {
		member.ban();
		console.log('[delete]', `[member] "${member.user.username}" baned`);
	})
	console.log(`[members] banned ${members.size} members`)
	return this
}

module.exports = membersDestroy
