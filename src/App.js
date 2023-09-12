import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/Particles/Particles";
// import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="one">
        <ParticlesBackground />
      </div>
      <div className="two">
        <h1>Hello my name is Hayotbek</h1>
      </div>
    </div>
  );
}

export default App;
