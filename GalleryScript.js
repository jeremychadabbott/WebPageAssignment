let cart = [];

// Add item to the cart and store it in sessionStorage
function addToCart(item, price) {
    cart.push({ item: item, price: price });
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item} added to cart!`);
}

// Open the cart modal and display items from sessionStorage
function openCart() {
    let storedCart = sessionStorage.getItem('cart');
    cart = storedCart ? JSON.parse(storedCart) : [];

    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((product) => {
            cartItems.innerHTML += `<p>${product.item} - $${product.price.toFixed(2)}</p>`;
        });
    }
    document.getElementById('cartModal').style.display = "block";
}

// Close the cart modal
function closeCart() {
    document.getElementById('cartModal').style.display = "none";
}

// Clear the cart and remove data from sessionStorage
function clearCart() {
    cart = [];
    sessionStorage.removeItem('cart');
    alert("Cart has been cleared!");
    closeCart();
}

// Process the order, thank the user, and clear the cart and sessionStorage
function processOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your order!");
        cart = [];
        sessionStorage.removeItem('cart');
        closeCart();
    }
}

// Close the cart modal if the user clicks outside of it
window.onclick = function(event) {
    let modal = document.getElementById('cartModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Subscription functionality
document.getElementById('subscribeButton').addEventListener('click', function() {
    const email = document.getElementById('subscribeEmail').value;
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        document.getElementById('subscribeEmail').value = '';  // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});
