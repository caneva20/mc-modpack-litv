// priority: 0

console.info('Script for creating new items is starting...')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

event.create('copper_coin').displayName('Copper Coin').tooltip('Acquired through quests')
event.create('iron_coin').displayName('Iron Coin').tooltip('Acquired through quests')
event.create('gold_coin').displayName('Gold Coin').tooltip('Acquired through quests')
event.create('diamond_coin').displayName('Diamond Coin').tooltip('Acquired through quests')
event.create('netherite_coin').displayName('Netherite Coin').tooltip('Acquired through quests')
event.create('monster_coin').displayName('Monster Coin')
event.create('nether_coin').displayName('Nether Coin').tooltip('Acquired through completing Nether chapter quests')

event.create('diamond_nugget').displayName('Diamond Nugget')
event.create('emerald_nugget').displayName('Emerald Nugget')


event.create('coin_01').displayName('Coin')
event.create('coin_02').displayName('Couple of Coins')
event.create('coin_03').displayName('Stack of Coins')
event.create('coin_04').displayName('Pile of Coins')
event.create('coin_05').displayName('Dozen of Coins')

event.create('medal').displayName('Medal').glow(true)
event.create('heart').displayName('Heart')

event.create('fox').displayName('ShadowFoxy Patreon Supporter Icon')
event.create('kruscle').displayName('Kruscle Patreon Supporter Icon')
event.create('plua').displayName('ShadowFoxy Patreon Supporter Icon')
event.create('crankonator').displayName('Kruscle Patreon Supporter Icon')
event.create('lexileexx').displayName('LexiLeeXx Patreon Supporter Icon')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})