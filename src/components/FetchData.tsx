import React from 'react'

type propsType = {
  status: 'success' | 'error' | 'loading'
}

const FetchData = ({ status }: propsType) => {

  if (status === 'loading') {
    return <div> Data Loading....  </div>
  } else if (status === 'success') {
    return <div> Data successfuly loaded. </div>
  }
  return (
    <div>
      Error found!
    </div>
  )
}

export default FetchData