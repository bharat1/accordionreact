import React , {useState} from "react";


export default function Accordion({data}) {
    
    return (
     <div>
       {data.map((el , i)=>(
        
        
        <AccordionItem  title = {el.title} content = {el.text} num ={i} key = {el.title}   />    
    
       ))
      
       }
     </div>

  )

}




function AccordionItem ({num , title , content}){
    const [open , setOpen] = useState(false);
     
    function handleToogle(){
        setOpen((open)=> !open)
    }

    return (
    <div className="action" onClick={handleToogle}>
       <p className = "number">{num < 9 ? `0${num+1}` : num +1}</p>

       <p className = "title">{title}</p>
       <p className = "icon">{open ? "-" : "+"}</p>
       { open && <div className="content">{content}</div>}

    </div>


   )



}




