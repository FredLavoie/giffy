autocompleteSearchTerms = [
	'about',
	'above',
	'across',
	'app',
	'apple',
	'appreciate',
	'bad',
	'ball',
	'balloon',
	'bell',
	'cat'
]

document.addEventListener('DOMContentLoaded', () => {
	const searchTerm = document.querySelector('#search-term');
	searchTerm.value = '';
	const list = document.querySelector('#list');

	searchTerm.addEventListener('input', (event) => {
		if (searchTerm.value.length < 3) return;
		for (const ea of autocompleteSearchTerms) {
			if (ea.includes(searchTerm.value)) {
				const item = document.createElement('p');
				item.setAttribute('id', ea);
				item.innerHTML = ea;
				list.appendChild(item);
			}
		}
	});

	const submit = document.querySelector('#search-form');
	submit.addEventListener('submit', (event) => {
		event.preventDefault();
		document.querySelector('#result-image').setAttribute('src', '');

		fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm.value}&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1`, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				document.querySelector('#result-image').setAttribute('src', data.data[0].images.original.url);
			});

	});
});
