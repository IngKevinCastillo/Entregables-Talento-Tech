function MostrarMensaje() {
    alert("¡¡Holaaa!!, Bienvenido a Mi Página");
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const reason = document.getElementById('reason').value;
    const email = document.getElementById('email').value;
    if (name === '' || reason === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('¡Formulario enviado correctamente!');
    }
});
