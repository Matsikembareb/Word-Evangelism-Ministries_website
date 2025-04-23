// Handle newsletter form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    if (email) {
        localStorage.setItem('subscriberEmail', email);
        alert('Thank you for subscribing!');
    } else {
        alert('Please enter a valid email!');
    }
});