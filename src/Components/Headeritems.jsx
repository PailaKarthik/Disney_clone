import React from 'react'

const Headeritems = ({name,icon:Icon}) => {
  return (
    <div className='text-white flex items-center gap-1 cursor-pointer space-x-2 text-[18px] font-semibold hover:underline underline-offset-8 mt-2'>
      <Icon className='text-[16px]'/>
      <p className='text-sm'>{name}</p>
    </div>
  )
}

export default Headeritems
