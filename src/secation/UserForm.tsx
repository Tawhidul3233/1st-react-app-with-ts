import React, { useState } from 'react'

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  const handelNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    setShow(false)
  }
  const handelEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handelFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, email)
    setShow(true)
  }


  return (
    <div>
      <p>User Form</p>
      <form onSubmit={handelFormSubmit}>
        <label htmlFor="name"> Name:
          <input type="text" name="" id="name" value={name} onChange={handelNameChange} style={{ border: "1px solid blue", margin: "15px" }} />
        </label> <br />
        <label htmlFor="email"> Email:
          <input type="email" name="" id="email" value={email} onChange={handelEmailChange} style={{ border: "1px solid blue", margin: "15px" }} />
        </label> <br />
        <button type='submit' style={{ background: "green", color: "white" }} > create new user </button>
      </form>
      <p>
        {
          show && <>

            UserName: {name} <br />
            UserEmail: {email}

          </>
        }
      </p>
    </div>
  )
}

export default UserForm