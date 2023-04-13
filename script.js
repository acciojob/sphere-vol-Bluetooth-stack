
function volume_sphere() {
    //Write your code here
	let radius = document.querySelector('#radius').value;
	let vol = document.querySelector('#volume');
	let result = 4/3 * (3.141) * (Math.pow(radius, 3));
	// alert(result);
	vol.value= result;
	// console.log(vol);
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
