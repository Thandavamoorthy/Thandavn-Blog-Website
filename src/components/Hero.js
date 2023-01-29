import React from 'react'
import hero from '../assets/Technology - 124333.mp4';


const Hero = () => {
    return (
        <>
            <div>
                <video src={hero} autoPlay loop muted height={550}/>
            </div>
        </>
    )
}

export default Hero