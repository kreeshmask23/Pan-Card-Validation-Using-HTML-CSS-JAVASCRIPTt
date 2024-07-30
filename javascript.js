function validatePan() {
    const panCard = document.getElementById('panCard').value;
    const message = document.getElementById('message');
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (regex.test(panCard)) {
        message.textContent = 'Valid PAN Number';
        message.classList.remove('invalid');
        message.classList.add('valid');
        message.style.display = 'block';
    } else {
        message.textContent = 'Invalid PAN Number';
        message.classList.remove('valid');
        message.classList.add('invalid');
        message.style.display = 'block';
    }
}
