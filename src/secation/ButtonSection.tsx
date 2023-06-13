import React from 'react'
import Button from '../components/Button'

const ButtonSection = () => {
  return (
    <div>
      Button Section
      <div>
        <Button id={5}> button props </Button>
        <Button id={5}> child props </Button>
      </div>
    </div>
  )
}

export default ButtonSection