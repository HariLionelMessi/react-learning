import { useState } from "react";


const Card = (props) => {
    const [readMore, setReadMore] = useState(false)
    // const [description, setDescription] = useState(null)
    // console.log(props)
    const { id, name, info, image, price, removeTour } = props
    let description = readMore ? info : `${info.substring(0, 200)}...`;

    function readmoreHandler(e) {
        setReadMore(!readMore)
    }

    function removeTourIdSet(e) {
        console.log('remove');
        removeTour(e.target.id);

    }
    return (
        <>
            <div className="card" id={id}>
                <img src={image} alt="" className="image" />
                <div className="tour-details" style={{ margin: '1rem 0' }}>
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description" style={{ marginBottom: '1rem', textAlign: 'justify' }}>
                    {description}
                    <span className="read-more" onClick={readmoreHandler} style={{ color: 'blue', cursor: 'pointer' }}>
                        {readMore ? 'Show less' : 'Read more'}
                    </span>
                </div>

                <button id={id} className="btnRed" onClick={removeTourIdSet}>Not Interested</button>
            </div>
        </>
    )
}

export default Card
