function MenuShowdata(a, b) {
	var action = tiled.registerAction('CustomAction', function(action) {
		tiled.warn(a)
	});

	action.text = 'Log map data console ' + b + '',
	//action.checkable = true,
	action.shortcut = 'Ctrl+K',

	tiled.extendMenu('Edit', [
		{ action: 'CustomAction', before: 'SelectAll' },
		{ separator: true }
	]);
}