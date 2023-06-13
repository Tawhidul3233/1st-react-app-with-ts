import React from 'react'

type styleType ={
  styleProps: React.CSSProperties;
}

const Style = (props: styleType) => {
  return (
    <div style={props.styleProps}>Style props</div>
  )
}

export default Style