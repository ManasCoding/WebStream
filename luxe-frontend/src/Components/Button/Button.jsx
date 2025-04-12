import React from 'react'

const Button = ({title="Submit", color = "bg-zinc-600"}) => {
  return (
    <div>
        <button className={`${color} text-white border-[1px] border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-700`}>{title}</button>
    </div>
  )
}

export default Button