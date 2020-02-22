//install give here the path to your png folder
var png_dir = "\\C:/Users/Game/AppData/Local/Tiled/extensions/png/\\";

//convert to hex and ad zero when lower then 10
function Hex(a) {
	return (a < 10 ? '0' : '') + a.toString(16).toUpperCase();
}

var kcmMapFormat = {	
    name: 'Kid Chameleon map',
    extension: 'kcm',
	
	read: function(fileName) {		
		let kcb = new BinaryFile(fileName, BinaryFile.ReadOnly);
		let bit = new Uint8Array(kcb.readAll());
			
			if(Check(bit) === true) {
					let tile = 16;
					let level_horizontal = 320;
					let level_vertical = 224;
					
					let levelsize_x = (bit[6] * 20);
					let levelsize_y = (bit[7] * 14);
						 let flag_a = bit[8];
						 let flag_b = bit[9];
						let start_x = bit[11] + bit[10];//reverse order (little endian)
						let start_y = bit[13] + bit[12];
						  let end_x = bit[15] + bit[14];
						  let end_y = bit[17] + bit[16];
					let foreground = (bit[0x13] << 8)+ bit[0x12];
						let blocks = bit[21] + bit[20];
					let background = bit[23] + bit[22];
					   let enemies = (bit[0x19] << 8) + bit[0x18];
					   
				tiled.log('Level: ' + LevelName(fileName));
				tiled.log('Theme: ' + flag_a + ' = ' + Theme(flag_a) + ' theme');
				tiled.log('Width: ' + levelsize_x + ' screens = ' + (levelsize_x * level_horizontal / tile) + ' tiles');
				tiled.log('Height: ' + levelsize_y + ' screens = ' + (levelsize_y * level_vertical / tile) + ' tiles');
				
				MenuShowdata(bit, LevelName(fileName));
				
			//Find theme art
			let png_tset = png_dir + Theme(flag_a) + ".png";
			
			let tileset = new Tileset("foreground");
			tileset.image = png_tset;
			tileset.setTileSize(16, 16);
			
			let tilemap = new TileMap();
			tilemap.addTileset(tileset);
			tilemap.setSize(levelsize_x, levelsize_y);
			tilemap.setTileSize(16, 16);
			
			let fglayer = new TileLayer("foreground");
			fglayer.width = levelsize_x;
			fglayer.height = levelsize_y;
			
			// Get an editable version of the tile layer.
			let fgedit = fglayer.edit();
			for (let x = 0; x < levelsize_x; ++x) {
				for (let y = 0; y < levelsize_y; ++y) {
					let id = bit[foreground + x + levelsize_x*y];
					fgedit.setTile(x, y, tileset.tile(id));
				}
			}
			
			fgedit.apply();
			tilemap.addLayer(fglayer);
			return tilemap;
			}	
		kcb.close();
	}
}
tiled.registerMapFormat('kcm', kcmMapFormat)