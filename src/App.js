import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Characters } from './components/Characters';
import { ModeProvider } from './providers/ModeProvider';

function App() {
  return (
    <div className="App">
      <ModeProvider>
        <Header />
        <Characters/>
      </ModeProvider>
    </div>
  );
}

export default App;
