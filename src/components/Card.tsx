import React from 'react'

type blogType = {
  children: React.ReactNode;
}

const Card = ({ children }: blogType) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Card