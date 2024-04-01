import React from 'react'

const Card = (props) => {
  return (
    <>
       <div className="  h-[200px] w-[200px] bg-zinc-300 p-4 mt-4 flex flex-col  gap-4 rounded-xl  ">
          
          <p>{props.para}</p>
          <button className="bg-gray-200 size-10 relative left-[110px] rounded-lg uppercase">add</button>
        
        </div>
    </>
  )
}

export default Card
