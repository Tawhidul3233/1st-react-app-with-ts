import React from 'react'

// type childProps = {
//   children: React.ReactNode;
//   id: number
// }

// or

const Button = (props: { children: React.ReactNode, id: number }) => {
  return (
    <button> {props.children} {props.id} </button>
  )
}

export default Button