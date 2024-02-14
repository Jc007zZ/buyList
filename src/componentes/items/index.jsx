import {Item} from "../item"
export function Items({array, onArrayChange}){

let arrCheck = []
let arr = [...array]

        function mandarProFinal(e){
               
              if(e.target.tagName == 'svg'){
                arr.splice(e.target.parentNode.parentNode.id, 1)
                console.log(arr)
                onArrayChange(arr)
              }
              else {
                if(e.target.checked){
                        let itemRemovido = arr.splice( e.target.parentNode.parentNode.id, 1)[0]
                        itemRemovido.checked = true
                        arrCheck.push(itemRemovido)
                        arr = [...arr, ...arrCheck]
                        onArrayChange(arr)         
                }
                else{
                        let itemRemovido = arr.splice(e.target.parentNode.parentNode.id, 1)[0]
                        itemRemovido.checked = false
                        arr.unshift(itemRemovido)
                        onArrayChange(arr)
                }
              }      
        }

        return(
            <>
                 {arr.map((i, index) => <Item manipularArray={mandarProFinal} itemId={index} cheking={i.checked} amount={i.amount + " Unidades"} name={i.itemName} category={i.category} key={self.crypto.randomUUID()}/>  )}
            </>
            
    )
 }