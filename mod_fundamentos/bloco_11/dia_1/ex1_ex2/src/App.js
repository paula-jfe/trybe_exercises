import './App.css';
import task from './TaskFunction';

const xablauArray = ['Oi', 'tudo', 'bem?'];

function App() {
  return (
    xablauArray.map((item) => task(item))
  );
}

export default App;
