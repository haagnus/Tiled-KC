function Theme(a) {
	var name = a;
	switch (name) {
		case 1:
			name = 'Sky';
			break;
		case 2:
			name = 'Ice';
			break;
		case 3:
			name = 'Hills';
			break;
		case 4:
			name = 'Island';
			break;
		case 5:
			name = 'Desert';
			break;
		case 6:
			name = 'Swamp';
			break;
		case 7:
			name = 'Mountain';
			break;
		case 8:
			name = 'Cave';
			break;
		case 9:
			name = 'Woods';
			break;
		case 10:
			name = 'City';
			break;
		default:
			name = 'Error! unknown theme ' + a + '';
	}
	return name;
}