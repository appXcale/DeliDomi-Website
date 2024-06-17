var form = document.getElementById("Formulario");
var button = document.getElementById('buttonEmail');

// Función para validar el correo electrónico
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para enviar la solicitud POST
function enviarFormulario(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    console.log("Entra");

    // Obtener los valores de los campos del formulario
    const email = document.getElementById('email').value;
    const name = email; // Ajustar según sea necesario
    const number = email; // Ajustar según sea necesario
    const message = "Join the comunity DeliDomi " + email;

    // Validar el correo electrónico
    if (!validarEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Crear el objeto de datos a enviar
    const data = {
        subject: "DeliDomi email Comunity:",
        senderName: "info@appxcale.com",
        senderEmail: "info@appxcale.com",
        name: name,
        email: email,
        number: number,
        message: message
    };

    // Configurar la solicitud POST
    fetch('https://dpwkio75kl.execute-api.us-east-1.amazonaws.com/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta del servidor
        console.log('Success:', data);
        alert('Formulario enviado con éxito.');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el formulario.');
    });
}

form.addEventListener('submit', enviarFormulario);

// Asignar la prevención del comportamiento predeterminado al botón
document.getElementById('buttonEmail').addEventListener('click', function(event) {
    enviarFormulario(event);
});