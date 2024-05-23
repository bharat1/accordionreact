import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import FlashCards from './FlashCard';

const initial_data = [
  {id:1, description:'Project' , quantity: 2 , packed:false} ,
  {id:2, description:'New Member' , quantity: 4 , packed:false} ,

  {id:3, description:'Chemistry' , quantity: 2, packed:true} ,
 
]


function App() {
  const [items , setItems] = useState([]);

  function handleItems(item){
    setItems((items) => [...items , item])
 }
 
 function deleteItems(id){
  setItems((items)=> items.filter((item)=> item.id !== id))
 }

 function handleToggle(id){
  setItems((items) => items.map((item)=> item.id === id ? { ...item , packed: !items.packed}: item));
 }
 

  return (
    <div className="App">
       <Logo/>
       <Form addItems = {handleItems} />
       <PackingList items = {items}  handleDelete = {deleteItems} handToogle = {handleToggle}/>
       <Stats/>

       {/* <FlashCards/> */}
    </div>
  );
}


function Logo(){
  return <h1>Far away</h1>

}

function Form({addItems}){

 const [description , setDescription] = useState("");
 const [num , setNum] = useState(1);
//  const [items , setItems] = useState([]);

 


  function handleData(e){
e.preventDefault();
 if(!description) return;

const newItem = {description , num , packed:false , id:Date.now()}
console.log(newItem);
addItems(newItem);

setDescription("");
  setNum(1);


  }

return (
   <form onSubmit = {handleData}>
  <div className="add-form">
    <h3>What do you need trips</h3>
    <select value={num} onChange={ (e) => setNum(e.target.value)}>
     {Array.from({length: 20} , (_, i)=>i+1).map((num)=>(
         <option value =  {num} key = {num}>{num}</option>
     ))}

    </select>
   <input type="text" placeholder ="Item..." value = {description} onChange = {(e)=> setDescription(e.target.value)} />
   <button>Add</button>
  </div>
  </form>
)

}

function PackingList({items , handleDelete , handToogle }){
    const [sortBy, setSortBy] = useState('input');
     
    let sortItemsset;
    if(sortBy === "input") sortItemsset = items;
    
    if(sortBy === "desc") sortItemsset = items.slice().sort((a,b) => a.desc > b.desc);
       
    if(sortBy ===  "packed") sortItemsset = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));

  return <div className="list">
     <ul>
    {
      items.map(item=>(
         <Item item = {item}  handleDelete = {handleDelete} handToogle = {handToogle}  key = {item.id} />

      ))
    }



</ul>
<div className="action">
      <select value={sortBy} onChange = { (e)=> setSortBy(e.target.value)} >
     <option value="input">Default Input</option>
     <option value="desc">Sort items</option>
     <option value="packed">Sort By Packed</option>

      </select>

  </div> 


  </div>

}

function Item({item , handleDelete , handToogle}){
    return  (<li>
      <input type="checkbox" value={item.packed} onChange = {() => handToogle(item.id)} />
    <span style={item.packed ? {textDecoration:"line-through"}: {}}>{item.quantity} {item.description}
    </span>
    <button onClick={()=>handleDelete(item.id)}>X</button>
    </li>
    )
}


function Stats(){
  return <footer className="stats">You have X items on  your list</footer>

}

export default App;
