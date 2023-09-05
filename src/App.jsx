import { BrowserRouter } from "react-router-dom";
import {About, Scroller, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer} from './components';

const App = () => {
  return (
<BrowserRouter>
    <Scroller />
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar/>
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
    </div>
    <div className="relative z-0">
      <Contact />
      <Footer />
      <StarsCanvas />
    </div>
</BrowserRouter>
  )
}

export default App
