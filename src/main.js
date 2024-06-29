document.addEventListener("DOMContentLoaded", function () {
	const openMenuButton = document.querySelector('.open-menu-button');
	const closeMenuButton = document.querySelector('.close-menu-btn');
	const mobMenu = document.querySelector('.mob-menu');
	const headerLinks = document.querySelectorAll('.header-item-link, .mob-item-link');

	// Функция для открытия меню
	function openMenu() {
		mobMenu.style.visibility = 'visible';
		mobMenu.style.opacity = '1';
		mobMenu.style.pointerEvents = 'auto';
		document.body.classList.add('no-scroll');
	}

	// Функция для закрытия меню
	function closeMenu() {
		mobMenu.style.visibility = 'hidden';
		mobMenu.style.opacity = '0';
		mobMenu.style.pointerEvents = 'none';
		document.body.classList.remove('no-scroll');
	}

	openMenuButton.addEventListener('click', openMenu);
	closeMenuButton.addEventListener('click', closeMenu);

	// Закрытие меню при клике вне его области
	document.addEventListener('click', function (event) {
		if (!mobMenu.contains(event.target) && !openMenuButton.contains(event.target)) {
			closeMenu();
		}
	});

	// Обработчик кликов по ссылкам меню
	headerLinks.forEach(link => {
		link.addEventListener('click', function (event) {
			// Удаляем класс 'active' у всех ссылок
			headerLinks.forEach(link => link.classList.remove('active'));

			// Добавляем класс 'active' к нажатой ссылке
			this.classList.add('active');

			// Плавное скроллирование к якорной ссылке
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
