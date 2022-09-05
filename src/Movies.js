import React from 'react'

export default function Movies(props) {
  return (
    <div>
     <div className="body ">
   

   <div className='card hover:shadow-2xl shadow-inner shadow-black w-[300px] h-[350px] rounded-md grid-cols-3 bg-slate-400'>
       <img className='rounded-md h-[280px] w-[310px] hover:h-[282px] hover:w-[312px]'  src={props.imgsrc} alt='this is the image' />
       <p className=' Title place-content-center place-items-center justify-self-center text-xl ml-[110px] shadow-xl hover:shadow-black shadow-inner bg-slate-100 inline relative top-2 rounded-md'> {props.Title} </p>
       <div>
           <button className=' click ml-[84px]  place-content-center place-items-center justify-self-center relative top-3 bg-transparent hover:outline outline-1 text-white'><a href={props.Link}>CLICK TO WATCH </a> </button>
       </div>


   </div>
</div>

      
    </div>
  )
}
