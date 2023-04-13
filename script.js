const but = document.querySelector('#submit');
	let vol = document.querySelector('#volume').value;
// but.addEventListener('click', volume_sphere) 
function volume_sphere() {
    //Write your code here
	const radius = document.querySelector('#radius').value;
	// vol.disabled = true;
	// let result = 4/3 * (3.141) * (Math.pow(radius, 3));
	// alert(result);
	vol= 4/3 * (3.141) * (Math.pow(radius, 3));
	// console.log(vol);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
