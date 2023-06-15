import React, { useState } from 'react'


const AddNewUser = () => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState<number>();
  const [show, setShow] = useState<boolean>(false);

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    setUserName(event.target.value)
  }
  const handelAge = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event.target.value)
    setShow(!show)
  }

  const handelAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value)
    console.log(event.target.value)
  }


  return (
    <div>
      <div>
        <p> Add New User </p>
        <input style={{ border: "1px solid red" }} value={userName} onChange={handelChange} type="text" />
        <p> {userName && 'userName :'} {userName}</p>
      </div>
      <div>
        <p> Show age </p>
        <input value={age} onChange={handelAgeChange} />
        <button onClick={handelAge}> show  </button>
        <p> {show && age} </p>
      </div>
    </div>
  )
}

export default AddNewUser