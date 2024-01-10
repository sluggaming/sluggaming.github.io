import React, { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import janImage from '../../images/Intramurals Page/Intramural_Calendar_Jan.png';
import febImage from '../../images/Intramurals Page/Intramural_Calendar_Feb.png';
import marImage from '../../images/Intramurals Page/Intramural_Calendar_Mar.png';

// https://www.youtube.com/watch?v=GguJODC2cvI

const IntramuralCarousel = () => {
    let [current, setCurrent] = useState(0);

    let slides = [janImage, febImage, marImage];

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <>
            <div className="overflow-hidden relative">
                <div
                    className={`flex transition ease-out duration-40`}
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {slides.map((s, index) => (
                        <img key={index} src={s} alt={`slide-${index}`} />
                    ))}
                </div>

                <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                    <button onClick={previousSlide}>
                        <BsFillArrowLeftCircleFill />
                    </button>
                    <button onClick={nextSlide}>
                        <BsFillArrowRightCircleFill />
                    </button>
                </div>
            </div>


        </>
    );
};

export default IntramuralCarousel;
