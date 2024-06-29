// --------------------------SALE SECTION SCRIPT--------------------------


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

// --------------------------SALE SECTION SCRIPT------------------------git