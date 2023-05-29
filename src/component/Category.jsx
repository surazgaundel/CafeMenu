/* eslint-disable react/prop-types */
import React from 'react'

export default function Category({category,filteredItems}) {
  return (
    <div className="flex justify-center my-1">
      {category.map((item,index) =>{
        return(
          <button className='border-2 capitalize border-yellow-500 rounded-md m-1 p-1 hover:bg-yellow-500 hover:text-white active:bg-yellow-600' key={index} onClick={()=>filteredItems(item)} >{item}</button>
        )
      })}
    </div>
  )
}

