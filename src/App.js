import './App.css';
import { useEffect, useState } from 'react';

function App() {

const myapi = "https://jsonplaceholder.typicode.com/todos";
const [todos, setTodos] = useState()

const fetchApi = async () => {
  const response = await fetch(myapi)
  console.log(response)

  const JsonResponse = await response.json()
  setTodos(JsonResponse)
  console.log(JsonResponse)
}
// para encgancharnos al ciclo de vida de un componente
 useEffect(() => {
  fetchApi()
 }, [])
 

  return (
    <>
    <div className="App">
    <h1>Hola</h1>
    <ul>
    {
      
      !todos ? 'Cargando...'
      : todos.map((item, index) => (
        <div className='mydiv' key={index}>
        <li> <span>{item.id + ')'} </span>  {item.title} -
         <span className='myspan' style={{color: `${item.completed ? 'green' : 'red' }`}}> {JSON.stringify(item.completed) }</span> </li>
      </div>
      ))
    
    }
   </ul>
    </div>
    </>
  );
}

export default App;
