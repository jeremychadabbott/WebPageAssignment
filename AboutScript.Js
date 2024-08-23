document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.getElementById('subscribeButton');
    const subscribeEmail = document.getElementById('subscribeEmail');

    // Subscription functionality
    subscribeButton.addEventListener('click', function() {
        const email = subscribeEmail.value;
        if (email) {
            alert(`Thank you for subscribing with the email: ${email}`);
            subscribeEmail.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Contact form functionality
    const contactForm = document.querySelector('form'); // Assuming there is only one form on the page
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create an object to store the data
        const orderData = {
            name: name,
            email: email,
            message: message
        };

        // Store the object in localStorage
        localStorage.setItem('customOrder', JSON.stringify(orderData));

        // Provide feedback to the user
        alert('Thank you for your message.');

        // Reset the form fields
        contactForm.reset();
    });
});
