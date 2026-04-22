
import './App.css'
import pets from "./pets"

function App() {
  

  return (
    <>
      {pets.map(pet=>(
        <ul>
       <p>{pet.name} </p> 
       <p> {pet.type} </p>
       <p> {pet.breed}</p>
       </ul>      ))}

    

      
    </>
  )
}

export default App
