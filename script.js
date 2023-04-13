function volume_sphere() {
    //Write your code here
	const radius = document.querySelector('#radius').value;
	const vol = document.querySelector('#volume');
	// vol.disabled = true;
	let result = 4/3 * (Math.PI) * (Math.pow(radius, 3));
	// alert(result);
	vol.value = result;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
