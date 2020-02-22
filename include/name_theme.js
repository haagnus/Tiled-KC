function Theme(a) {
	var name = a;
	switch (name) {
		case 0:
			name = 'hex';
			break;
		case 1:
			name = 'sky';
			break;
		case 2:
			name = 'ice';
			break;
		case 3:
			name = 'hills';
			break;
		case 4:
			name = 'island';
			break;
		case 5:
			name = 'desert';
			break;
		case 6:
			name = 'swamp';
			break;
		case 7:
			name = 'mountain';
			break;
		case 8:
			name = 'cave';
			break;
		case 9:
			name = 'forest';
			break;
		case 10:
			name = 'city';
			break;
		default:
			name = 'Error! unknown theme ' + a + '';
	}
	return name;
}