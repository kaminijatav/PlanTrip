import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Tours from './components/Tours'

const App=()=> {
const[tours,setTours]=useState(data)
function removeTour(id){
  const newTours=tours.filter(tour=>tour.id!==id);
      }
  return (
<div> 
  <Tours tours={tours} removeTour={removeTour}></Tours>
</div>
  )
}

export default App
