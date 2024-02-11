import {Item} from "../item"

export function Items({array, onArrayChange}){


        function mandarProFinal(index){
                // let itemRemovivo = array.splice(index, 1)[0]
                // array.push(itemRemovivo)
                // const newArr = [...array]
                // onArrayChange(newArr)
                
        }
        
 
        
        return(
            <>
                 {array.map((i, index) => <Item manipularArray={mandarProFinal}  itemId={index} amount={i.amount + " Unidades"} name={i.itemName} category={i.category} key={self.crypto.randomUUID()}/>  )}
            </>
            
    )
 }