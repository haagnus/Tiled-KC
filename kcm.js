function Hex(a) {
	var b = a+'';
    while (b.length < 2) b = '0' + b;
	return b.toString(16).toUpperCase();
}

function LevelNumber(a) {
	return  a.slice(-6).substr(0, 2).toUpperCase().toString();
}

let kcmMapFormat = {	
    name: 'Kid Chameleon map',
    extension: 'kcm',
	
	read: function(fileName) {		
		let kcb = new BinaryFile(fileName, BinaryFile.ReadOnly);
		let bit = new Uint8Array(kcb.readAll());
			
			if(Check(bit) === true) {
					let tile = 16;
					let level_horizontal = 320;
					let level_vertical = 224;
					
					let levelsize_x = bit[6];
					let levelsize_y = bit[7];
						 let flag_a = bit[8];
						 let flag_b = bit[9];
						let start_x = bit[11] + bit[10];//reverse order (little endian)
						let start_y = bit[13] + bit[12];
						  let end_x = bit[15] + bit[14];
						  let end_y = bit[17] + bit[16];
					let foreground = bit[19] + bit[18];
						let blocks = bit[21] + bit[20];
					let background = bit[23] + bit[22];
					   let enemies = bit[25] + bit[24];
					   
				tiled.log('Level: ' + LevelName(LevelNumber(fileName)));
				tiled.log('Theme: ' + flag_a + ' = ' + Theme(flag_a) + ' theme');
				tiled.log('Width: ' + Hex(levelsize_x) + ' screens = ' + (levelsize_x * level_horizontal / tile) + ' tiles');
				tiled.log('Height: ' + Hex(levelsize_y) + ' screens = ' + (levelsize_y * level_vertical / tile) + ' tiles');
				
				MenuShowdata(bit, LevelName(LevelNumber(fileName)));
			}	
		kcb.close();
	}
}
tiled.registerMapFormat('kcm', kcmMapFormat)