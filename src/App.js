import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/Particles/Particles";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="one">
        <ParticlesBackground />
      </div>
    </div>
  );
}

export default App;
