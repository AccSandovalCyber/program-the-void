document.getElementById('doorButton').addEventListener('click', function() {
    fetchRandomGif();
});

function fetchRandomGif() {
    const apiKey = 'qPKc2S2fpfff7C3cM1mdpKFTzWZZAwUT'; // Your Giphy API key
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=G`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            document.getElementById('giphyImage').src = gifUrl;
        })
        .catch(error => console.error('Error fetching GIF:', error));
}
