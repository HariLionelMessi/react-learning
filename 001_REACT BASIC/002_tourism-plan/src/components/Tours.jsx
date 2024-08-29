import { useState } from 'react'
import Card from './Card'

const Tours = ({ tours, removeTour }) => {
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h3 className='title'>Plan with love</h3>
            </div>

            {/* Cards */}
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return (
                            <Card removeTour={removeTour} key={tour.id} {...tour}></Card>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Tours;