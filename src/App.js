import './App.css';
import Home from './component/home/home'
import About from './component/about/about'
import Exp from './component/experience/exp'
import Projet from './component/projets/projets'

function App() {
  return (
    <div className="app">
      <Home/>
      <About/>
      <Exp/>
      <Projet/>
      <footer>Coding by Mohamed</footer>
    </div>

  );
}

export default App;
