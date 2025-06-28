function About() {
    return (
        <div id="about" className="container text-center">
            <div className="row p-4 align-items-center">
                <div className="col grid mt-5">
                    <div>
                        <h2>¿Quién Soy?</h2>
                    </div>
                    <div>
                        <p>
                            Soy Alessia, estudiante de Desarrollo de Software con enfoque en interfaces creativas, bases de datos y soluciones digitales prácticas. Me apasiona aprender, diseñar y crear proyectos que conecten tecnología con personas.
                        </p>
                    </div>   
                    <div>
                        <button className="btn btn-primary btn-lg rounded-pill px-4">
                            CURRICULUM VITAE
                        </button>
                    </div>                 
                </div>
                <div className="col d-flex justify-content-center">
                    <img 
                        src="https://i.pinimg.com/736x/4d/9b/f5/4d9bf5231cba5b40bb775994444f0ba3.jpg"
                        className="w-50 rounded"
                        alt="imagen-mujer-ds"
                    />
                </div>
            </div>
        </div>
    );
}
export default About;
