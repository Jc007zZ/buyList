import { Apple, Beef, Carrot, Milk, Paintbrush, Sandwich } from "lucide-react";

export function Symbols(){
        return(
            <div className="w-full flex justify-between">
                <Paintbrush size="21" color="#af39f8" className="bg-purple/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#af39f8]" />
                <Beef size="21" color="#DB5BBF" className="bg-pink/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#DB5BBF]" />
                <Milk size="21" color="#7B94CB" className="bg-blue/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#7B94CB]" />
                <Carrot size="21" color="#8CAD51" className="bg-green/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#8CAD51]" />
                <Apple size="21" color="#E07B67" className="bg-orange/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#E07B67]" />
                <Sandwich size="21" color="#BB9F3A" className="bg-yellow/[.3] rounded-full p-1.5 shadow-[0_0_20px_-1px_#BB9F3A]" />
            </div>
    )
 }