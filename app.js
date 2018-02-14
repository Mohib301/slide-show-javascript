var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = 'pic1.jpeg';
	images[1] = 'pic2.jpeg';
	images[2] = 'pic3.jpg';
	images[3] = 'pic4.jpg';
// change image
function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}
setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
