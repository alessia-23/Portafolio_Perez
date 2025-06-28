import Navbar from "./Navbar";

function Hero() {
    return (
        <div>
            <Navbar />
            <section
                className="text-white"
                style={{
                    backgroundImage: "url('https://i.pinimg.com/736x/30/8d/43/308d43a52783b8313d992c4418432042.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    imageRendering: "auto",
                    minHeight: "95vh",
                }}
            >
                <div
                    className="container overflow-hidden d-flex align-items-center"
                    style={{ minHeight: "95vh" }} 
                >
                    <div className="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
                        <div className="col-12 col-lg-6 order-1 order-lg-0">
                            <h2 className="display-1 fw-bold mb-3">Welcome to my online portfolio</h2>
                            <div className="d-grid gap-2 d-sm-flex">
                                <button type="button" className="btn btn-success bsb-btn-2xl rounded-pill">Portfolio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
