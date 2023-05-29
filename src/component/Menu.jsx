import React from 'react'

export default function Menu({title,img,desc,price}) {
  return (
    <div className="border-1 bg-white m-4 min-h-fit w-80">
        <div><img className='h-48 w-80 object-cover mb-3'src={img} alt={title}/></div>
        <div className="flex justify-between my-2 mx-1">
        <div className="font-semibold capitalize inline px-1">{title}</div>
        <div className="bg-yellow-500 rounded-md text-white text-center w-14">${price}</div>
        </div>
        <div className="text-slate-500 tracking-wider px-1 py-2">{desc}</div>
    </div>
  )
}
