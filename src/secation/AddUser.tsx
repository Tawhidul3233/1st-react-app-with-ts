import React, { useState } from 'react'

const AddUser = () => {

  type userType = {
    id: number,
    name: string
  }

  const [user, setUser] = useState < userType > ({} as userType);

  const handeladduser = () => {
    setUser({ id: 4, name: 'rony' })
  }

  return (
    <div>
      <button onClick={handeladduser}> Add User </button>
      <p> {user.name} </p>
    </div>

  )
}

export default AddUser