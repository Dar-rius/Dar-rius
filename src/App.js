import './App.css';
import Home from './component/home/home'
import About from './component/about/about'
import Comp from './component/comp/comp'
import Projet from './component/projets/projets'

function App() {
  return (
    <div className="app">
      <Home/>
      <About/>
      <Comp/>
      <Projet/>
      <footer>Coding by Mohamed</footer>
    </div>

  );
}

export default App;
