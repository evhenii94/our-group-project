document.addEventListener("DOMContentLoaded", function () {
	const openMenuButton = document.querySelector('.open-menu-button');
	const closeMenuButton = document.querySelector('.close-menu-btn');
	const mobMenu = document.querySelector('.mob-menu');
	const headerLinks = document.querySelectorAll('.header-item-link, .mob-item-link');

	function openMenu() {
		mobMenu.style.visibility = 'visible';
		mobMenu.style.opacity = '1';
		mobMenu.style.pointerEvents = 'auto';
		document.body.classList.add('no-scroll');
	}

	function closeMenu() {
		mobMenu.style.visibility = 'hidden';
		mobMenu.style.opacity = '0';
		mobMenu.style.pointerEvents = 'none';
		document.body.classList.remove('no-scroll');
	}

	openMenuButton.addEventListener('click', openMenu);
	closeMenuButton.addEventListener('click', closeMenu);

	document.addEventListener('click', function (event) {
		if (!mobMenu.contains(event.target) && !openMenuButton.contains(event.target)) {
			closeMenu();
		}
	});

	headerLinks.forEach(link => {
		link.addEventListener('click', function (event) {

			headerLinks.forEach(link => link.classList.remove('active'));

			this.classList.add('active');

			const targetId = this.getAttribute('href');
			if (targetId.startsWith('#')) {
				event.preventDefault();
				const targetElement = document.querySelector(targetId);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: 'smooth' });
					closeMenu();
				}
			}
		});
	});
});
