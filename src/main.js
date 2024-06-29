// --------------------------SALE SECTION SCRIPT--------------------------


document.addEventListener("DOMContentLoaded", function () {
	const mainImg = document.getElementById('main-img');
	const thumbnails = document.querySelectorAll('.thumbnail');

	thumbnails.forEach(thumbnail => {
		thumbnail.addEventListener('click', function () {
			const mainSrc = mainImg.src;
			const mainSrcset = mainImg.srcset;
			const newSrc = this.src;
			const newSrcset = this.srcset;

			// Swap the images
			mainImg.src = newSrc;
			mainImg.srcset = newSrcset;
			this.src = mainSrc;
			this.srcset = mainSrcset;

			// Add transition effect
			mainImg.style.transform = 'scale(1.05)';
			setTimeout(() => {
				mainImg.style.transform = 'scale(1)';
			}, 300 );
		});
	});
});

// --------------------------SALE SECTION SCRIPT------------------------git