
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './COmponents/CoffeeCard';
import { useState } from 'react';

function App() {
  const loderCoffee=useLoaderData()
  const[coffees,setCoffees]=useState(loderCoffee)

  return (
    <div  className='container mx-auto'>
      <h1 className='text-6xl text-purple-500 py-10 text-center font-bold' >Coffee <span className='text-black'>Bestes</span> {coffees.length}</h1>
     <div className='grid grid-cols-3 gap-4 '>
      {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
      }
     </div>
    </div>
  )
}

export default App
