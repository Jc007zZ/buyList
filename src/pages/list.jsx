import { Filter} from "../componentes/filter"
import { AddItem } from "../componentes/additem"
import { Items } from "../componentes/items"
import { useState } from "react"

export function ListPage() {  
  const [array, setArray] = useState([]);
  function handleArrayChange(novoArray) {
    setArray(novoArray);
  };

  return (
      <main>
        <section className="flex relative flex-col gap-5 bg-[url('../../assets/background.svg')] px-5 pt-16 ">
          <h1>Lista de Compras</h1>
          <AddItem/>
          <Filter onArrayChange={handleArrayChange}/>
        </section>

        <form className=" flex flex-col gap-6 mt-9 px-5" id="items" >

          <Items array={array} onArrayChange={handleArrayChange} />
  
        </form> 
      </main>
   
  )
}


