import './App.css';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const [listaCarros] = useState([
    {marca: "BYD", ano: 2015, preco: 64690},
    {marca: "Audi", ano: 2011, preco: 65790},
    {marca: "Aston Martin", ano: 2017, preco: 74490},
    {marca: "Bentley", ano: 2022, preco: 75830},
  ])
  return (
    <div>
      <h1 className="titulo_lista">Lista de Carros</h1>
      <CarDetails listaCarros={listaCarros}/>
      {/*teste para ver se o css scoped funciona*/}
      <h2 className='item_lista'>fim da lista</h2>
    </div>
  );
}

export default App;
