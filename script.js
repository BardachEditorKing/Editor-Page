// Define the correct password
const correctPassword = "freelildurk"; // Replace this with your desired password

// Function to check the password
function checkPassword() {
    const passwordInput = document.getElementById('password-input').value;
    const message = document.getElementById('warning-message');

    if (passwordInput === correctPassword) {
        // Redirect to the next page if password is correct
        window.location.href = 'mainPage.html'; // Replace 'nextpage.html' with your desired URL
    } else {
        // Display an error message if password is incorrect
        message.textContent = "Incorrect password. Please try again.";
        message.style.color = "red";
    }
}
function togglePassword() {
    const passwordInput = document.getElementById('password-input');
    const eyeIcon = document.getElementById('togglePassword');

    // Toggle the input type between password and text
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerText = '🙈'; // Change icon to indicate visibility
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerText = '👁️'; // Change icon back to eye
    }
}