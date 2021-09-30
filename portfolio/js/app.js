const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = 'gray';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//Typing 
// var typed = new Typed(".type", {
//     strings: ["MY NAME IS QUY"],
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: false,
// });
// var typed = new Typed(".type2", {
//     strings: ["WHO AM I ?"],
//     typeSpeed: 150,
//     backSpeed: 50,
//     loop: false,
// });
var typed = new Typed(".type3", {
    strings: ["A CODER", "A FRONTEND-DEV", "A COPIER"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true,
});



