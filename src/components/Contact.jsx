function Contact() {
    return (
        <div id="contact" className="container text-center">
            <div className="row p-4 align-items-center">
                <div className="col mt-5">
                    <h2>Contáctame</h2>
                    <ul className="list-unstyled text-start d-inline-block">
                        <li><strong>Correo:</strong> alessiaperez@gmail.com</li>
                        <li><strong>Ubicación:</strong> Urb. La Campiña del Sur</li>
                    </ul>
                </div>
                <div className="col d-flex justify-content-center">
                    <img
                        src="https://i.pinimg.com/736x/91/c4/56/91c4565c774a9cacc7274bc273101cca.jpg"
                        className="w-50 rounded"
                        alt="imagen-mujer-ds"
                    />
                </div>
            </div>
            <div className="py-3">
                <small className="text-muted">© 2025 Alessia Pérez. Todos los derechos reservados.</small>
            </div>
        </div>
    );
}

export default Contact;
