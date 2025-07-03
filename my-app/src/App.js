import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';

export default function App() {
  const [count, setCount] = useState(0);

  //hook de efeito
  useEffect(() => {
    //atualiza o título do documento usando a API do browser
    document.title = 'Você clicou ${count} vezes';
  }, [count]);

  return (
    <div className="App">
    <Header />
    <div>
    <p>Você clicou {count} vezes</p>
    <button onClick={() => setCount(count + 1)}>
    Clique aqui
    </button>
    </div>
    </div>
  );
}
