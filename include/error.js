function Check(bit) {
	//File is too small to be bit valid map. Min. size: 20x14 tiles, no blocks, enemies or background
	if(bit.length < 319)	{
		tiled.error('Error: kcm file is too small.');
		tiled.alert('This kcm map looks too small. I won\'t try to load it', 'Error');
		return false;
	}	
	//Wrong file header
	if(bit[0] !== 0x4B || bit[1] !== 0x4D || bit[2] !== 0x41 || bit[3] !== 0x50) {
		let message = 'File header incorrect (' + Hex(bit[0]) + Hex(bit[1]) + Hex(bit[2]) + Hex(bit[3]) + ')';
		tiled.error('Error: ' + message + '');
		tiled.alert(message, 'Error');
		return false;
	} else {
		tiled.warn('KMAP Header detected');
	}
	//Foreground theme incorrect
	if(bit[8] > 0xA ) {
		let message = 'Foreground theme number incorrect (' + bit[8] + ')';
		tiled.error('Error: ' + message + '');
		tiled.alert(message, 'Error');
		return false;
	}
	//Background theme incorrect
	if(bit[9] > 0xA ) {
		let message = 'Background theme number incorrect (' + bit[9] + ')';
		tiled.error('Error: ' + message + '');
		tiled.alert(message, 'Error');
		return false;
	}
return true;
}