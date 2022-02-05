"use strict"


let filterDropdown = document.querySelectorAll('.filter-dropdown-js');

filterDropdown.forEach((element)=>{
	element.addEventListener('click', () => {
		element.classList.toggle('active');
	});
})
