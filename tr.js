// Avoid Repeating Selectors: Whenever possible, cache DOM queries (e.g., document.querySelector() or document.querySelectorAll()) outside of loops to avoid querying the DOM multiple times.
// Modularize Functions: Break the logic into smaller, reusable functions that can be called independently.
// Use Event Delegation: Instead of adding individual event listeners to multiple elements, you can use event delegation to simplify things.
// Improve Naming Conventions: Use clear, meaningful variable names that describe their purpose.



// Utility function to get an element by ID
function getElementById(id) {
    return document.getElementById(id);
}

// Utility function to get elements by class name
function getElementsByClassName(className) {
    return document.querySelectorAll(`.${className}`);
}

// Function to toggle the side menu display
function toggleSideMenu() {
    const nav = getElementById('navbar');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Function to update the main image when a small image is clicked
function updateMainImage(event) {
    const mainImg = document.querySelector('.main_image > img');
    mainImg.src = event.target.src;
}

// Event listener for updating the main image from small images
function setupSubShopImageListeners() {
    const smallImages = getElementsByClassName('img_small');
    smallImages.forEach(imgCont => {
        const img = imgCont.querySelector('img');
        img.addEventListener('click', updateMainImage);
    });
}

// Function to remove a cart row when the delete button is clicked
function removeCartRow(event) {
    const button = event.target;
    const row = button.closest('tr');
    row.style.display = 'none';
    
    const priceElement = row.querySelector('#price');
    const quantityElement = row.querySelector('#quantity');
    const totalElement = row.querySelector('#total');
    
    const price = parseFloat(priceElement.innerText.replace("₦", ""));
    const quantity = parseInt(quantityElement.value, 10);
    const total = price * quantity;
    
    totalElement.innerText = `₦${total.toFixed(2)}`;
}

// Set up event listeners for removing cart rows
function setupCartRowRemoval() {
    const removeButtons = document.querySelectorAll('#times');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeCartRow);
    });
}

// Calculate total price for the cart
function updateCartTotal() {
    const rows = document.querySelectorAll('tbody tr');
    let totalPrice = 0;
    
    rows.forEach(row => {
        const priceElement = row.querySelector('#price');
        const quantityElement = row.querySelector('#quantity');
        const price = parseFloat(priceElement.innerText.replace('₦', ''));
        const quantity = parseInt(quantityElement.value, 10);
        totalPrice += price * quantity;
    });
    
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = `₦${totalPrice.toFixed(2)}`;
}

// Initialize all event listeners and functionalities
function initialize() {
    // Toggle menu
    const menuButton = document.querySelector('.menu-button'); // Assuming there's a menu button to toggle
    menuButton.addEventListener('click', toggleSideMenu);
    
    // Set up subshop image listeners
    setupSubShopImageListeners();
    
    // Set up cart row removal functionality
    setupCartRowRemoval();
    
    // Update cart total on quantity change
    const quantityInputs = document.querySelectorAll('#quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateCartTotal); // Listen to 'input' event instead of 'click' for quantity change
    });
    
    // Initial total price update
    updateCartTotal();
}

// Call the initialization function on page load
document.addEventListener('DOMContentLoaded', initialize);


// Helper Functions:

// getElementById() and getElementsByClassName() are utility functions to make DOM queries more consistent and reusable.
// Event Delegation:

// Instead of adding event listeners to each individual cart remove button or image, we add them in a loop where necessary.
// Modular Functions:

// Each logical operation is now wrapped in its own function, such as toggleSideMenu(), updateMainImage(), and removeCartRow(), making the code more maintainable.
// Efficient Event Handling:

// Using the input event on quantity inputs to update the total immediately when the quantity changes, rather than using click.
// Improved Readability:

// Shorter, more descriptive names for functions and variables (toggleSideMenu, updateMainImage, etc.) improve code clarity.
// Cart Total Calculation:

// The updateCartTotal() function is responsible for updating the total cart price whenever a quantity changes. It runs initially on page load and after any input event on quantity fields.
// DOMContentLoaded Listener:

// The initialization is wrapped in a DOMContentLoaded event listener to ensure that the script only runs after the HTML is fully loaded.
// Other Considerations:
// Styling: Make sure your CSS is appropriately set for the elements being manipulated (e.g., display: flex for navbar when toggling).
// Performance: This code is already quite optimized in terms of DOM access, but consider using requestAnimationFrame() for larger DOM manipulations or complex animations.
// Error Handling: Depending on the requirements, you may want to add some error handling (e.g., checking if elements exist before trying to manipulate them).
// With these changes, your code shoul
