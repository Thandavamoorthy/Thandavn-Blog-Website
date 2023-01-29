import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../../assets/Tesing-Hero-Img.jpeg'

const SoftwareTestingCard = () => {
    return (
        <>
            <div>
                <div className="container mt-5">
                    <div className="card  d-flex mb-3">
                        <div className="row g-0 m-2">
                            <div className="col-md-4">
                                <img src={heroImg} className="img-fluid my-4" alt="img" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Software Testing</h5>
                                    <p className="card-text">Software Testing is a method to check whether the actual software product matches expected requirements and to ensure that software product is Defect free. It involves execution of. . .
                                    </p>
                                    <button className="btn btn-primary mb-2"><Link className='nav-link' to="/softwareTestingBlog">Continue Reading</Link></button>
                                    <p className="card-text"><small className="text-muted">Posted on 29-Jan-2023</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoftwareTestingCard