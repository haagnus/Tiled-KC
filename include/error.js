function Check(a) {
	if(a.length < 319)	{
		tiled.error('Error: kcm file is too small');
		return false;
	}
	//if((a[0] << 24) + (a[1] << 16) + (a[2] << 8) + (a[3]) == 0x4B4D4150) {
		//tiled.error(a[0]);
		//return true;
	//}
	return true;
}