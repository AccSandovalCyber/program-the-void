document.addEventListener('DOMContentLoaded', (event) => {
    // Code to run when the DOM is fully loaded

    // Example: Add event listener to the button if needed
    const tvButton = document.querySelector('.tv-button');
    if (tvButton) {
        tvButton.addEventListener('click', () => {
            console.log('Button clicked!');
            // Add more interactivity here if needed
        });
    }

    // Additional JS code can go here
});
