import { ACCORDION } from '@/constant'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa6';
import {Collapse} from "react-collapse"
const Accordion = () => {
    const [open,setOpen]=useState<number|null>(null);
    const toggle=(index:number)=>{
        if(open===index){
            return setOpen(null);
        }
        setOpen(index);
    }
  return (
    <div>
        <h4 className='text-secondary regular-20'>FAQ</h4>
        <h3 className='bold-44 max-w-96'>Frequently Asked Questions</h3>
        <div className='pt-6 max-w-[800px]'>
            {ACCORDION.map((item,index)=>(
                <AccordionItem key={index} open={index===open} question={item.question} answer={item.answer} toggle={()=>toggle(index)}/>
            ))}
        </div>
    </div>
  )
}
type AccordionItemProps={
    open:boolean,
    toggle:()=>void,
    question:string,
    answer:string,   
}
const AccordionItem=({open,toggle,question,answer}:AccordionItemProps)=>{
    return(
        <div className='pt-3'>
            <div onClick={toggle} className={`px-3  py-4 medium-16 flex items-center gap-x-4 cursor-pointer ${open?"bg-secondary text-white":""}`}>
                <div>{open?<FaMinus/>:<FaPlus/>}</div>
                <h4>{question}</h4>
            </div>
            <Collapse isOpened={open}>
            <p className='p-4'>{answer}</p>
            </Collapse>
        </div>
    )
}
export default Accordion