// Function to show the ad placement form
function showAdForm() {
    document.getElementById('ad-form-container').style.display = 'block';
}

// Function to randomly place advertisements within the container
function placeAds() {
    let ads = document.querySelectorAll('.ad');
    let totalAds = ads.length;

    // Calculate number of rows and columns based on total ads
    let numCols = Math.floor(Math.sqrt(totalAds));  // Square root to determine grid size
    let numRows = Math.ceil(totalAds / numCols);

    // Set the ad container to have a grid layout
    document.querySelector('.ad-container').style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;

    // For each ad, calculate its size and position in the grid
    ads.forEach((ad, index) => {
        let width = (100 / numCols) + '%';
        let height = (100 / numRows) + '%';
        ad.style.width = width;
        ad.style.height = height;
    });
}

// Handle the form submission for placing ads
document.getElementById('ad-size-form').onsubmit = function(event) {
    event.preventDefault();
    
    let width = document.getElementById('width').value;  // Get width percentage
    let height = document.getElementById('height').value;  // Get height percentage

    // Create a new ad div dynamically based on user input
    let ad = document.createElement('div');
    ad.classList.add('ad');
    ad.style.width = width + '%';  // Set ad width based on user input
    ad.style.height = height + '%';  // Set ad height based on user input
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
};

// Call placeAds function when the page loads to adjust the layout of existing ads
window.onload = placeAds;
