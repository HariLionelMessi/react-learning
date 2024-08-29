import { useState } from 'react'
import Card from './Card.jsx'
const Testimonial = (props) => {
    const reviews = props.reviews
    const [index, setIndex] = useState(0)
    function leftBtn() {
        if ((index - 1) < 0) {
            setIndex(reviews.length - 1)
        } else {
            setIndex(index - 1)
        }
    }
    function rightBtn() {
        if ((index + 1) >= reviews.length) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    function getRandomReview() {
        setIndex(Math.floor(Math.random() * 5));
    }
    return (
        <div>
            <Card getRandomReview={getRandomReview} leftBtn={leftBtn} rightBtn={rightBtn} review={reviews[index]} />
        </div>
    )
}

export default Testimonial
