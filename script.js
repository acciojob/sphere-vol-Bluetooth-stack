const but = document.querySelector('#submit');
	const vol = document.querySelector('#volume');
but.addEventListener('click', volume_sphere) 
function volume_sphere() {
    //Write your code here
	const radius = document.querySelector('#radius').value;
	// vol.disabled = true;
	let result = 4/3 * (3.141) * (Math.pow(radius, 3));
	// alert(result);
	vol.value = result;
} 

// document.getElementById('MyForm').onsubmit = volume_sphere();
