import React from 'react'
import { Link } from 'react-router-dom';
import technology from '../../../assets/Digital-Cyber-Security-PNG-Picture.png';

const Technology = () => {
    return (
        <>
            <div>
                <div className="container mt-5">
                    <div className="card  d-flex mb-3">
                        <div className="row g-0 m-2">
                            <div className="col-md-4">
                                <img src={technology} className="img-fluid rounded-start mt-5" alt="img" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Technology</h5>
                                    <p className="card-text">Technology is the application of scientific knowledge to the practical aims of human life or, as it is sometimes phrased, to the change and manipulation of the human environment. . . </p>
                                    <button className="btn btn-primary mb-2"><Link className='nav-link' to="/technologyBlog">Continue Reading</Link></button>
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

export default Technology