import {Plus} from"lucide-react"
import { useState } from "react"

export function Filter({onArrayChange, array}){
  
  let arr = array
  // const [arr, setArr] = useState(arrs)
  
//  console.log(arr)

  function AddItem(){
    let amount = document.getElementById('amount').value
    let itemName = document.getElementById('itemName').value
    let category = document.getElementById('categorys').value
    const newArr = [...arr]

    // if(amount == ""|| itemName == "" || category == ""){
    //     alert('preencha tudo')
    // }
    // else{
     
    // }

    newArr.push({amount, itemName, category, checked: false})
    onArrayChange(newArr)
    // setArr(newArr)
    arr = newArr
  
  }
   

    return(
        <div className="flex justify-between gap-4">
            <label className="w-1/2">
              <p>Quantidade</p>
              
              <div className="flex h-full  ">
                <input type="number"placeholder="1" className="pl-4 h-9 w-full rounded-bl-md rounded-tl-md"  id="amount" />
                <select defaultValue={"opcao1"} className="rounded-br-md rounded-tr-md border-gray-300 text-gray-200">
                  <option value="opcao1" >UN.</option>
                  <option value="opcao2">DZ.</option>
                </select>
              </div>
            </label>

            
              <label className="w-1/2">
                <p>Categoria</p>
              
                <div className="flex h-7">
                  <select defaultValue="" className="rounded-md w-full border-gray-300 text-gray-200" id="categorys">
                    <option value="" disabled  hidden>Selecione</option>
                    <option value="feira">Feira</option>
                    <option value="carne">Carne </option>
                    <option value="bebida">Bebida </option>
                    <option value="frios">Frios </option>
                    <option value="mantimentos">Mantimentos </option>
                    <option value="limpeza">Limpeza </option>
                  </select>

                  <button  className=" flex justify-center items-center bg-purple-200 rounded-full aspect-square h-9 ml-2 border-none" onClick={AddItem}>
                  <Plus size={24} color="#ffffff" strokeWidth={2} /> 

                  </button>
                </div>
              </label>
          </div>
    )
}


 