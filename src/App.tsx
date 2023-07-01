import { useState } from "react";
import Item from "./components/Item";

// const tasks = [
//   "comer",
//   "correr",
//   "llorar",
//   "bailar",
//   "ver la tv",
//   "estudiar",
//   "salir a pasear",
//   "beber una cerveza o 2",
// ];

export default function App() {
  const [ tasks, setTasks ] = useState<string[]>([]); //operador diamante
  const [text, setText] = useState('');

  function onAddItem () {
    setTasks([text , ...tasks]);
    setText('')
  }

  function onEnter (event) {
    if(event.key === 'Enter'){
      onAddItem();
    }
  }

  function onDelete (indexToDelete) {
    tasks.splice(indexToDelete, 1); //Tambien se pudiera utilizar filter, la ventaja es que filter regresa un nuevo arreglo (es decir, no muta el array original) y por lo tanto no se requeriria utilizar un spread operator en la siguiente linea
    setTasks([...tasks]) // El spread operator se utiliza aquí para hacer una copia de task
  }

  function empty(){
    setTasks([])
  }

  return (
    <main className="bg-black min-h-screen flex items-center text-white p-10 flex-col gap-10">
      <h1 className="text-3xl">Mis cosas por hacer</h1>

      <section className="flex flex-row gap-2 w-full justify-center max-w-md">
        <input
          id="text"
          type="text"
          className="bg-black border border-white/10 rounded w-full p-3"
          onChange={(event) => setText(event.target.value)}
          onKeyUp = {onEnter}
          value={text}
        />
        <button
          type="submit"
          className="bg-white text-black flex items-center justify-center p-2 rounded w-1/5"
          onClick={onAddItem}
        >
          +
        </button>
      </section>

      <section className="w-full flex flex-col gap-3">
        {tasks.map((task, index) => {
          return (
            <Item
              key={`task-${index}`}
              text={task}
              onDelete={() => onDelete(index)} //a diferencia de la linea 45 o 53 aquí se llama a la función con una función anonima porque va a requerir de un parámetro, en las otras lineas mencionadas funcionaba directamente con el evento ... por eso no era necesario pasar la función como anonima
            />
          );
        })}
      </section>

      <button className="bg-purple-500 w-full max-w-md p-2 rounded" onClick={empty}>
        🗑️ BORRAR TODO 🗑️
      </button>
    </main>
  );
}

