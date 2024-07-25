function fetchRandomGif() {
    const apiKey = 'qPKc2S2fpfff7C3cM1mdpKFTzWZZAwUT'; // Your Giphy API key
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=G`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => {
            console.log('Data received:', data); // Log the data for inspection

            // Ensure you are accessing the correct path in the data object
            if (data && data.data && data.data.images && data.data.images.original && data.data.images.original.url) {
                const gifUrl = data.data.images.original.url;
                document.getElementById('giphyImage').src = gifUrl; // Update the image source
                console.log('GIF loaded:', gifUrl);
            } else {
                console.error('Unexpected data structure:', data);
            }
        })
        .catch(error => console.error('Error fetching GIF:', error));
}
