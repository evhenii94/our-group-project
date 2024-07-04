
document.addEventListener("DOMContentLoaded", function () {
	const openMenuButton = document.querySelector('.open-menu-button');
	const closeMenuButton = document.querySelector('.close-menu-btn');
	const mobMenu = document.querySelector('.mob-menu');
	const body = document.querySelector('body');

	document.addEventListener('click', function (event) {
		const isClickInsideMobMenu = mobMenu.contains(event.target);
		const isClickInsideOpenMenuButton = openMenuButton.contains(event.target);

		if (!isClickInsideMobMenu && !isClickInsideOpenMenuButton && mobMenu.classList.contains('open')) {
			mobMenu.classList.remove('open');
		}
	});

	openMenuButton.addEventListener('click', function () {
		mobMenu.classList.add('open');

	});

	closeMenuButton.addEventListener('click', function () {
		mobMenu.classList.remove('open');
	});
	document.addEventListener("DOMContentLoaded", function () {
		const firstItemLink = document.querySelector('.mob-item-link.first-item');

		firstItemLink.addEventListener('click', function () {
			this.classList.toggle('active');
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const headerLinks = document.querySelectorAll('.header-item-link, .mob-item-link');

	headerLinks.forEach(link => {
		link.addEventListener('click', function (event) {
			headerLinks.forEach(link => link.classList.remove('active'));

			this.classList.add('active');
		});

	});
});

document.addEventListener('DOMContentLoaded', function () {
	const header = document.querySelector('.header');
	const links = document.querySelectorAll('a[href^="#"]');

	function offsetAnchor() {
		const targetId = this.getAttribute('href');
		if (targetId.length > 1) {
			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				const headerHeight = header.offsetHeight;
				window.scrollTo({
					top: targetElement.offsetTop - headerHeight,
					behavior: 'smooth'
				});
			}
		}
	}

	links.forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			offsetAnchor.call(this);
		});
	});

	// Плавный скроллинг при прокрутке колесиком
	document.documentElement.style.scrollBehavior = 'smooth';
});


// --------------------------SALE HEADER SCRIPT--------------------------//

// --------------------------CATALOG SECTION SCRIPT--------------------------//

document.addEventListener('DOMContentLoaded', function () {
	const showMoreBtn = document.querySelector('.catalog-btn');
	const showLessBtn = document.querySelector('.catalog-btn-less');
	const hiddenItems = document.querySelectorAll('.catalog-item.hidden');
	const catalogSection = document.getElementById('catalog');

	showMoreBtn.addEventListener('click', function () {
		hiddenItems.forEach(item => item.style.display = 'block');
		showMoreBtn.style.display = 'none';
		showLessBtn.style.display = 'block';
	});

	showLessBtn.addEventListener('click', function () {
		hiddenItems.forEach(item => item.style.display = 'none');
		showMoreBtn.style.display = 'block';
		showLessBtn.style.display = 'none';

		// Плавная прокрутка к секции Catalog
		catalogSection.scrollIntoView({ behavior: 'smooth' });
	});
});







// --------------------------CATALOG SECTION SCRIPT--------------------------//


// --------------------------SALE SECTION SCRIPT--------------------------//


document.addEventListener("DOMContentLoaded", function () {
	const mainImage = document.getElementById('main-img');
	const thumbnails = document.querySelectorAll('.thumbnail');

	thumbnails.forEach(thumbnail => {
		thumbnail.addEventListener('click', function () {
			const mainSrc = mainImage.src;
			const mainSrcset = mainImage.srcset;
			const newSrc = this.src;
			const newSrcset = this.srcset;

			// Swap the images
			mainImage.src = newSrc;
			mainImage.srcset = newSrcset;
			this.src = mainSrc;
			this.srcset = mainSrcset;

			// Add transition effect
			mainImage.style.transform = 'scale(1.05)';
			setTimeout(() => {
				mainImage.style.transform = 'scale(1)';
			}, 300);
		});
	});
});

// --------------------------SALE SECTION SCRIPT--------------------------//