function Portafolio() {
    return (
        <div id="Portafolio" className="container-fluid text-center bg-body-tertiary py-lg-5 ">
            <h2 className="mb-4">MIS PROYECTOS</h2>
            <div className="row gap-3 px-lg-5">
                <div className="col bg-white rounded-5 p-3">
                    <img
                        src="https://i.pinimg.com/736x/cd/3d/f7/cd3df7237f5960eeef6eeef316261643.jpg"
                        className="w-50 rounded"
                        style={{ height: "200px", objectFit: "cover" }}
                        alt="Proyecto 1"
                    />
                    <div className="mt-3 text-start">
                        <h5>Proyecto 1</h5>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero numquam esse pariatur ducimus maiores mollitia.</p>
                        <button type="button" className="btn btn-primary" disabled>Más información</button>
                    </div>
                </div>
                <div className="col bg-white rounded-5 p-3">
                    <img
                        src="https://b2995878.smushcdn.com/2995878/wp-content/uploads/2023/08/Mobile-App-Development.jpeg?lossy=2&strip=0&webp=1"
                        className="w-50 rounded"
                        style={{ height: "200px", objectFit: "cover" }}
                        alt="Proyecto 2"
                    />
                    <div className="mt-3 text-start">
                        <h5>Proyecto 2</h5>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero numquam esse pariatur ducimus maiores mollitia.</p>
                        <button type="button" className="btn btn-primary" disabled>Más información</button>
                    </div>
                </div>
                <div className="col bg-white rounded-5 p-3">
                    <img
                        src="https://i.pinimg.com/736x/2c/bd/33/2cbd33b606344b4839fee5156cb50632.jpg"
                        className="w-50 rounded"
                        style={{ height: "200px", objectFit: "cover" }}
                        alt="Proyecto 3"
                    />
                    <div className="mt-3 text-start">
                        <h5>Proyecto 3</h5>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero numquam esse pariatur ducimus maiores mollitia.</p>
                        <button type="button" className="btn btn-primary" disabled>Más información</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portafolio;
