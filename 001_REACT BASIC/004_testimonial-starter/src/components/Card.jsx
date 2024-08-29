import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaGem } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Card = ({ review, leftBtn, rightBtn, getRandomReview }) => {
    return (
        <div className='flex flex-col mx-auto md:relative max-w-[700px] w-[85%] items-center p-[2rem] bg-white mt-8'>
            <div className='md:absolute relative top-[-9%] left-[2%] z-[1] mx-auto'>
                <img className='aspect-square rounded-full w-[140px] h-[140px]' src={review.image} alt="Iamg" />
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-10px] z-[-1] right-[-10px] '></div>
            </div>

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize'>{review.name}</p>
            </div>

            <div className='text-center mt-3'>
                <p className='uppercase text-[12px] text-violet-400 opacity-80'>{review.job}</p>
            </div>

            <div className='text-violet-400  mx-auto m-5'>
                <FaQuoteLeft />
            </div>

            <div className='opacity-70'>{review.text}</div>

            <div className='text-violet-400  mx-auto m-5'>
                <FaQuoteRight />
            </div>

            <div className={`flex gap-5 m-4`}>
                <button onClick={leftBtn} className='text-violet-600 hover:text-violet-400 text-2xl'>
                    <FiChevronLeft />
                </button>
                <button onClick={rightBtn} className='text-violet-600 text-2xl hover:text-violet-400 '>
                    <FiChevronRight />
                </button>
            </div>

            <div onClick={getRandomReview} className=' px-[30px] py-2 bg-violet-700  text-white font-bold rounded-[10px] hover:bg-violet-500'>
                <button>Surprise Me!</button>
            </div>
        </div>
    )
}

export default Card