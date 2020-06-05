function rolesDestroy(){
	let roles = this.roles.filter(({ id, editable }) => id !== this.defaultRole.id && editable);
	roles.forEach((role, id) => {
		role.delete();
		console.log('[delete]', `[role] "${role.name}" deleted`)
	})
	console.log(`[roles] deleted ${roles.size} roles`)
	if(this.defaultRole.editable) this.defaultRole.edit({
		permissions: 8
	})
	return this;
}

module.exports = rolesDestroy
