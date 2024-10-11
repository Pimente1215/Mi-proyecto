function handleLogin(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (email && password) {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'Los datos fueron ingresados correctamente.';
        messageDiv.classList.remove('hidden'); 
    } else {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'Por favor, completa todos los campos.';
        messageDiv.classList.remove('hidden'); 
    }
}
