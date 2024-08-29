import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    text: '',
    isVisible: false,
    mode: '',
    favCar: ''
  })

  function changeHandler(e) {
    const { name, type, value, checked } = e.target
    setFormData((previous) => {
      return ({
        ...previous,
        [name]: type === "checkbox" ? checked : value
      })

    })
  }

  function submitHandler(e) {
    e.preventDefault()
    // print
    console.log(formData)
  }

  return (
    <>
      <div className="App">
        <form onSubmit={submitHandler}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name='firstName'
              placeholder='First name'
              value={formData.firstName}
              onChange={changeHandler} />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              name='lastName'
              placeholder='Last name'
              value={formData.lastName}
              onChange={changeHandler} />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name='email'
              placeholder='email'
              value={formData.email}
              onChange={changeHandler} />
          </div>

          <div>
            <label>Comments</label>
            <textarea value={formData.text} onChange={changeHandler} name="text"></textarea>
          </div>

          <div>
            <input type="checkbox" id='isvisible' name="isVisible" checked={formData.isVisible} onChange={changeHandler} />
            <label htmlFor="isvisible">Agree</label>
          </div>

          <div>
            <input
              type="radio"
              name="mode"
              value="Online-Mode"
              onChange={changeHandler}
              checked={formData.mode === "Online-Mode"}
              id="online" /> <label htmlFor="online">Online Mode</label>
            <input
              type="radio"
              name="mode"
              value="Offline-Mode"
              onChange={changeHandler}
              checked={formData.mode === "Offline-Mode"}
              id="offline" /> <label htmlFor="offline">Offline Mode</label>
          </div>

          <div>
            <select
              name="favCar"
              id="favcar"
              value={formData.favCar}
              onChange={changeHandler}>
              <option value="Vegito">Vegito</option>
              <option value="Gogeta">Gogeta</option>
              <option value="Bee">Bee</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>

      </div>
    </>
  )
}

export default App
