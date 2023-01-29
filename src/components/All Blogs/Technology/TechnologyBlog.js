import React from 'react'
import heroImg from '../../../assets/zerotrust-cybersecurity.jpeg';
import historyImg from '../../../assets/historyImg.jpg';
import './technology.css';

const TechnologyBlog = () => {
    return (
        <>
            <div className="card text-bg-dark">
                <img src={heroImg} className="card-img" alt="img" height={500} />
                <div className="card-img-overlay text-end mt-5">
                    <h1 className="card-title fs-1">Technology</h1>
                    <p className="card-text">We're changing the world with technology.</p>
                </div>
            </div>
            <div className="container">
                <div className="mt-5">
                    <h1 className='display-1 fw-bolder'>Technology</h1>
                </div>
                <div className="mt-5">
                    <h3>What is Technology?</h3>
                    <p className='fs-4'>Technology is the application of scientific knowledge to the practical aims of human life or, as it is sometimes phrased, to the change and manipulation of the human environment.</p>
                </div>
                <div className="mt-5">
                    <h3>History of Technology?</h3>
                    <p className='fs-4'>The history of technology is the history of the invention of tools and techniques and is one of the categories of world history. Technology can refer to methods ranging from as simple as stone tools to the complex genetic engineering and information technology that has emerged since the 1980s. The term technology comes from the Greek word techne, meaning art and craft, and the word logos, meaning word and speech. It was first used to describe applied arts, but it is now used to describe advancements and changes which affect the environment around us.</p>
                    <img className='technology-img my-3' src={historyImg} alt="img"/>
                    <p className='fs-4'>New knowledge has also enabled people to create new things, and conversely, many scientific endeavors are made possible by technologies which assist humans in traveling to places they could not previously reach, and by scientific instruments by which we study nature in more detail than our natural senses allow.</p>
                    <p className='fs-4'>Since much of technology is applied science, technical history is connected to the history of science. Since technology uses resources, technical history is tightly connected to economic history. From those resources, technology produces other resources, including technological artifacts used in everyday life. Technological change affects, and is affected by, a society's cultural traditions. It is a force for economic growth and a means to develop and project economic, political, military power and wealth.</p>
                </div>


                <div>
                    <h1>References:</h1>
                    <p>https://www.britannica.com/technology/technology</p>
                    <p>https://en.wikipedia.org/wiki/History_of_technology#:~:text=The%20history%20of%20technology%20is,has%20emerged%20since%20the%201980s.</p>
                </div>
            </div>
        </>
    )
}

export default TechnologyBlog