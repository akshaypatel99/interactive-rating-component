const btn = document.querySelector('.submit-rating');
const ratingCard = document.querySelector('.star-rating');
const thanksCard = document.querySelector('.thanks');
const selection = document.querySelector('.thanks__selection');
let ratingValue;

btn.onclick = (e) => {
	e.preventDefault();
	const selectedValue = document.querySelector(
		'input[name="rating"]:checked'
	)?.value;
	ratingValue = selectedValue;

	ratingCard.classList.add('fade-out');
	setTimeout(() => {
		thanksCard.classList.add('fade-in');
		thanksCard.removeAttribute('hidden');
		selection.innerHTML = `You selected ${ratingValue} out of 5`;
	}, 1000);
};
