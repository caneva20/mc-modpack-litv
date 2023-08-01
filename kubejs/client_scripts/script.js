// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.information', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	
	event.add('storagenetwork:inventory_remote', ["Warning! Enabling the JEI search feature of a storage remote will cause the game to crash."])
	
	event.add('storagenetwork:crafting_remote', ["Warning! Enabling the JEI search feature of a storage remote will cause the game to crash."])
})

onEvent('item.tooltip', tooltip => {

  tooltip.add(['storagenetwork:crafting_remote', 'storagenetwork:inventory_remote', 'storagenetwork:request', 'storagenetwork:inventory', 'storagenetwork:master'], Text.red('Warning! Enabling the JEI search feature of a storage remote will cause the game to crash.'))


})