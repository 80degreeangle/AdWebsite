// Track the next available position in the grid
let adGridPositions = [];

// Function to show the ad placement form
function showAdForm() {
    document.getElementById('ad-form-container').style.display = 'block';
}

// Function to place ads without overlap
function placeAd(widthPercentage, heightPercentage) {
    // Calculate the available position for the ad
    let nextPosition = adGridPositions.findIndex(pos => !pos.filled);
    
    if (nextPosition === -1) {
        alert('No more space available for ads!');
        return;
    }

    // Mark the position as filled
    adGridPositions[nextPosition].filled = true;

    // Create a new ad div dynamically based on user input
    let ad = document.createElement('div');
    ad.classList.add('ad');
    ad.style.gridColumnStart = adGridPositions[nextPosition].colStart;
    ad.style.gridRowStart = adGridPositions[nextPosition].rowStart;
    ad.style.width = widthPercentage + '%';  // Set ad width based on user input
    ad.style.height = heightPercentage + '%';  // Set ad height based on user input
    ad.innerText = 'New Ad';

    // Optional: Add a link inside the ad
    let link = document.createElement('a');
    link.href = 'https://example.com';  // Link to an example site
    link.innerText = 'Click Here!';
    ad.appendChild(link);

    // Append the new ad to the ad container
    document.querySelector('.ad-container').appendChild(ad);

    // Call placeAds to adjust the layout of all ads
    placeAds();
}

// Handle the form submission for placing ads
document.getElementById('ad-size-form').onsubmit = function(event) {
    event.preventDefault();
    
    let width = document.getElementById('width').value;  // Get width percentage
    let height = document.getElementById('height').value;  // Get height percentage

    // Call placeAd to place the ad at the next available position
    placeAd(width, height);
};

// Function to create a grid layout and set up positions for ads
function setupAdGrid() {
    // Set up the grid dimensions (assuming a maximum of 10 rows and columns for simplicity)
    const rows = 10;
    const cols = 10;

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            adGridPositions.push({
                rowStart: row,
                colStart: col,
                filled: false, // Initially, no positions are filled
            });
        }
    }
}

// Initialize the grid on page load
window.onload = function() {
    setupAdGrid();
    placeAds();
};

// Function to organize the layout of ads within the grid
function placeAds() {
    let ads = document.querySelectorAll('.ad');
    ads.forEach(ad => {
        // Ensure that ads stay in their assigned grid positions
        ad.style.position = 'absolute';
    });
};
