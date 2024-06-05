import './App.css';
import Testimonials from'./assets/Testimonials/Testimonials'
import Footer from './Componets/Footer/Footer';
import Hero from './Componets/Hero/Hero';
import Join from './Componets/Join/join';
import Programs from './Componets/Programs/Programs.jsx';
import Reasons from './Componets/Reasons/Reasons';
import Plans from './Componets/Plans/Plan';

function App() {
  return (
    <div className="App">
          <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonials/>
         <Join/>
         <Footer/>
        
    </div>
  );
}

export default App;
