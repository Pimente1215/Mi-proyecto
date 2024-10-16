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


////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const products =
document.querySelectorAll('.product');
 
let found = false;

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
product.style.display = 'inline-block';
            found = true;
        } else {
product.style.display = 'none';
        }
    });
if (!found){
    alert('no se encontraron esos elementos')
}

})




document.getElementById('searchInput').addEventListener('input', filterProducts);
 
function filterProducts() {
    
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    
    const images = document.querySelectorAll('.imagen');

    const textContainer = document.querySelector('.text-container');
    
    let hasResults = false;
 
    images.forEach(image => {
        
        const name = image.getAttribute('data-name').toLowerCase();
        
        if (name.includes(searchValue)) {
 image.style.display = 'block';
            hasResults = true;  
        } else {
 image.style.display = 'none';
        }
    });
    
    if (searchValue !== '' && hasResults === false) {
textContainer.style.display = 'none';
    } else if (searchValue === ''){
textContainer.style.display = 'block';
    } else {
        textContainer.style.display = 'none';
    }
}
 
