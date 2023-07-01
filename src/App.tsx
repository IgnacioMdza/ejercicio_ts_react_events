import Card from "./components/Card"
import { thingsToDo } from "./data/thingsToDo"

export default function App() {

  return (
    <>
      <main className='bg-neutral-900 min-h-screen p-8 font-sans'>
        <section className='flex flex-col w-2/5 mx-auto'>
          <h1 className='text-white text-center mb-3 text-2xl'>Mis cosas por hacer</h1>
          <button className='py-1 pb-1 px-3 mb-3 bg-white w-fit rounded-md'>+</button>
          {thingsToDo.map((activity, index)=>
            <Card 
              key={`activity-${index}`}
              text={activity.text} onDelete={() => alert("index: " + index)}
            />
          )}
          <button className='bg-indigo-600 text-white p-2 text-sm rounded-md'>BORRAR TODO</button>
        </section>
      </main>
    </>
  )
}

