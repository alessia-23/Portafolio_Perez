import About from "./About";
import Contact from "./Contact";
import Expert from "./Expert";
import Hero from "./Hero";
import Portafolio from "./Portafolio";
import Testimonials from "./Testimonials";

function Landing() {

    return (<>
        <Hero />
        <About/>
        <Portafolio/>
        <Expert/>
        <Testimonials/>
        <Contact/>
    </>
    );
}

export default Landing;