document.addEventListener('DOMContentLoaded', () => {

	const submit = document.querySelector('#search-form');
	submit.addEventListener('submit', async (event) => {
		event.preventDefault();
		const searchTerm = document.querySelector('#search-term');

		fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1`, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('success');
			});

	});
});
