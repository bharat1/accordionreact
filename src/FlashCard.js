import { useState } from "react";

const questions = [
{
    id:1,
    question:'what is react',
    answer: 'framework'


},

{
    id:2,
    question:'what are the building block of react app',
    answer: 'framework'


},


{
    id:3,
    question:'How to pass a data from parent to child ',
    answer: 'framework'


},

{
    id:4,
    question:'How to give compoment to memory',
    answer: 'framework'


},

]




function FlashCards(){
    const [selectid , setSelectId] = useState(null);

    function handleClick(id){
        setSelectId(id !== selectid ? id : null);
    }

    return (
      <div className="flashcard">
       {
        questions.map((question)=> <div onClick={handleClick(question.id)} className={question.id ===  selectid ? "selected" : "" } >
            
            <p>
                {question.id ===  selectid ? question.answer : question.question}
                </p>
                </div>)
       }

      </div> 

   )

}

export default FlashCards;