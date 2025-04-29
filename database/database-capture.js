const form = document.getElementById('userForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop form from reloading the page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success!', data);
            alert('User logged in successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem with the request.');
        });
});
