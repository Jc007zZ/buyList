import { useState } from "react"
import {MoreVertical, Apple, Beef, Carrot, Milk, Paintbrush, Sandwich } from 'lucide-react'

export function Item({name, amount, category, itemId, manipularArray  }){
    const [check, setCheck] = useState(true)
    const [style, setStyle] = useState({opacity:`flex justify-between p-6 bg-gray-500 border-gray-300 border border-solid rounded-lg`, lined:`	`
})

        
    
        let icons = {
            "feira": <Apple size="28" color="#E07B67" className="bg-orange/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#E07B67]" /> ,
            "carne":  <Beef size="28" color="#DB5BBF" className="bg-pink/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#DB5BBF]" />,
            "bebida": <Milk size="28" color="#575f70" className="bg-blue/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#7B94CB]" />,
            "frios":  <Carrot size="28" color="#8CAD51" className="bg-green/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#8CAD51]" />,
            "mantimentos": <Sandwich size="28" color="#BB9F3A" className="bg-yellow/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#BB9F3A]" />,
            "limpeza": <Paintbrush size="28" color="#af39f8" className="bg-purple/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#af39f8]" />
        }

        
        function HadlingItem(e){
            setCheck(!check)
            manipularArray(e.target.parentNode.parentNode.id)
            
            

            if(check){
                setStyle({ lined:`line-through`, opacity: "flex justify-between p-6 bg-gray-500 border-gray-300 border border-solid rounded-lg opacity-30"}) 
            }
            else{
                setStyle({ lined:``, opacity: "flex justify-between p-6 bg-gray-500 border-gray-300 border border-solid rounded-lg opacity-100"}) 
                
            }
        }

        return(
            <div className={style.opacity} id={itemId} >

                 <label className="flex place-items-center">
                    <input type="checkbox" onChange={HadlingItem}  className="flex appearance-none w-5 h-5 border-purple-200 border-1 rounded mr-4
                        checked:bg-succeess-200 checked:bg-[url('../../assets/svgs/check.svg')] bg-center checked:border-none"/>
                     <div>
                        <h1 className={`text-base ` + style.lined}>{name}</h1>
                        <p className="text-xs text-gray-200 font-normal">{amount}</p>
                            
                    </div>
                 </label>

                <div className="flex gap-6 items-center">
                    {icons[category]}
                    <MoreVertical color="#A881E6" strokeWidth={2.25} />
                </div>
            </div>
    )
 }