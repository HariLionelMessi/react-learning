import { useState } from 'react';
import Tours from './components/Tours.jsx'
import data from './data.js'


const App = () => {
  const [tours, setTours] = useState(data)
  function removeTour(id) {
    console.log(typeof (id))
    id = Number.parseInt(id)
    let newTours = tours.filter(tour => {
      console.log(typeof (tour.id));
      return tour.id !== id
    })
    setTours(newTours);
  }

  function refreshPage() {
    window.location.reload()
  }

  if (!tours.length) {
    return (
      <>
        <div className="refresh">
          'Empty hogaya!'
          <button className='btnWhite' onClick={refreshPage}>Refresh</button>
        </div>
      </>
    )
  }
  return (
    <>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </>
  )

};

export default App;
