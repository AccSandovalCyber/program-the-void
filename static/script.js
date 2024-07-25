document.getElementById('doorButton').addEventListener('click', function() {
    console.log('Door button clicked');
    fetchRandomGif();
});

function fetchRandomGif() {
    const apiKey = 'qPKc2S2fpfff7C3cM1mdpKFTzWZZAwUT'; // Your Giphy API key
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=G`;

    console.log('Fetching GIF from Giphy API...');
    
    fetch(apiUrl)
        .then(response => {
            console.log('Response received:', response);
            return response.json();
        })
        .then(data => {
            if (data && data.data && data.data.images) {
                const gifUrl = data.data.images.original.url;
                document.getElementById('giphyImage').src = gifUrl;
                console.log('GIF loaded:', gifUrl);
            } else {
                console.error('No data returned or incorrect data structure:', data);
            }
        })
        .catch(error => console.error('Error fetching GIF:', error));
}
