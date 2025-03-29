// Function to show the ad placement form
function showAdForm() {
    document.getElementById('ad-form-container').style.display = 'block';
}

// Function to randomly position advertisements within the container
function placeAds() {
    let ads = document.querySelectorAll('.ad');
    ads.forEach(ad => {
        let randomX = Math.floor(Math.random() * 90) + "%";  // Random X position (0-90%)
        let randomY = Math.floor(Math.random() * 90) + "%";  // Random Y position (0-90%)
        ad.style.left = randomX;
        ad.style.top = randomY;
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

    // Append the new ad to the ad container
    document.querySelector('.ad-container').appendChild(ad);

    // Place all ads (including new ones) randomly on the page
    placeAds();
};

// Call placeAds function when the page loads to position existing ads
window.onload = placeAds;
