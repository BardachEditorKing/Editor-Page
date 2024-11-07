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
function downloadBluestacks4() {
        const link = document.createElement("a");
        link.href = "BluestacksRequirements/BlueStacks 4.100.20.1001.exe"; // Specify the path to the file you want to download
        link.download = "BlueStacks 4.100.20.1001.exe";     // Specify the name for the downloaded file
        link.click();
}
function downloadBluestacks5() {
    const link = document.createElement("a");
    link.href = "BluestacksRequirements/BlueStacks 5.13.0.1074.exe"; // Specify the path to the file you want to download
    link.download = "BlueStacks 5.13.0.1074.exe";     // Specify the name for the downloaded file
    link.click();
}
function downloadBSTweaker6() {
    const link = document.createElement("a");
    link.href = "BluestacksRequirements/BSTweaker6.rar"; // Specify the path to the file you want to download
    link.download = "BSTweaker6.rar";     // Specify the name for the downloaded file
    link.click();
}
function downloadBSTweaker5() {
    const link = document.createElement("a");
    link.href = "BluestacksRequirements/BSTweaker5.rar"; // Specify the path to the file you want to download
    link.download = "BSTweaker5.rar";     // Specify the name for the downloaded file
    link.click();
}
function downloadAwmFastSwitchMacro() {
    const link = document.createElement("a");
    link.href = "BluestacksRequirements/AWM Fast Switch.rar"; // Specify the path to the file you want to download
    link.download = "AWM Fast Switch.ahk";     // Specify the name for the downloaded file
    link.click();
}
// Live Stream Folder
function downloadOBSFacecamRecord() {
    const link = document.createElement("a");
    link.href = "Live Stream/obs-studio facecam seperated audios.rar"; // Specify the path to the file you want to download
    link.download = "obs-studio facecam seperated audios.rar";     // Specify the name for the downloaded file
    link.click();
}
function downloadLiveAutoChat() {
    const link = document.createElement("a");
    link.href = "Live Stream/Live AutoChat.rar"; // Specify the path to the file you want to download
    link.download = "Live AutoChat.rar";     // Specify the name for the downloaded file
    link.click();
}