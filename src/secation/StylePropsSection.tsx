import React from 'react'
import Style from '../components/style'

const style = {
  color: "red"
}

const StylePropsSection = () => {
  return (
    <div>StylePropsSection
      <div>
        <Style styleProps={style} />
      </div>
    </div>
  )
}

export default StylePropsSection