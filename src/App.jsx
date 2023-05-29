import { useState } from 'react'
import './index.css'
import Menu from './component/Menu'
import data from './component/data.js';
import Category from './component/Category';

const allCategories =['all',...new Set(data.map(item=>item.category))]

function App() {
  const [menu,setMenu]=useState(data);
  const [category,setCategory]=useState(allCategories);

   const filteredItems=(category)=>{
    if(category ==='all'){
      setMenu(data);
      return
    }
    const newItems=data.filter(item=>item.category===category)
    console.log(newItems)
    setMenu(newItems);
   }


  return (
    <>
    <h1 className="text-3xl font-semibold text-center">Menu</h1>
    <div className="flex w-16 h-1.5 bg-yellow-400 ml-auto mr-auto"></div>
    <Category category={category} filteredItems={filteredItems}/>
    <div className="flex flex-wrap justify-center ">
    {
      menu.map(item=>{
        return(
          <Menu key={item.id} {...item}/>
          )
        })
      }
      </div>
      </>
  )
}

export default App
