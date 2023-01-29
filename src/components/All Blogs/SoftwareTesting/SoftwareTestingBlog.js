import React from 'react'
import heroImg from '../../../assets/Tesing-Hero-Img.jpeg';

const SoftwareTestingBlog = () => {
    return (
        <>
            <div className="card text-bg-dark">
                <img src={heroImg} className="card-img" alt="img" height={500} />
            </div>
            <div className="container">
                <div className="mt-5">
                    <h1 className='display-1 fw-bolder'>Software Testing</h1>
                </div>
                <div className="mt-5">
                    <h3>What is Software Testing?</h3>
                    <p className='fs-4'>Software Testing is a method to check whether the actual software product matches expected requirements and to ensure that software product is Defect free. It involves execution of software/system components using manual or automated tools to evaluate one or more properties of interest. The purpose of software testing is to identify errors, gaps or missing requirements in contrast to actual requirements.
                        <br />
                        <br />
                        Some prefer saying Software testing definition as a White Box and Black Box Testing. In simple terms, Software Testing means the Verification of Application Under Test (AUT). This Software Testing course introduces testing software to the audience and justifies the importance of software testing.

                    </p>
                </div>
                <div className="mt-5">
                    <h3>Why Software Testing is Important?</h3>
                    <p className='fs-4'>Software Testing is Important because if there are any bugs or errors in the software, it can be identified early and can be solved before delivery of the software product. Properly tested software product ensures reliability, security and high performance which further results in time saving, cost effectiveness and customer satisfaction.
                    </p>
                </div>
                <div className="mt-5">
                    <h3>What is the need of Testing?</h3>
                    <p className='fs-4'>Testing is important because software bugs could be expensive or even dangerous. Software bugs can potentially cause monetary and human loss, and history is full of such examples.
                    </p>
                    <ul className='fs-4'>
                        <li>
                            In April 2015, Bloomberg terminal in London crashed due to software glitch affected more than 300,000 traders on financial markets. It forced the government to postpone a 3bn pound debt sale.</li>
                        <li>
                            Nissan cars recalled over 1 million cars from the market due to software failure in the airbag sensory detectors. There has been reported two accident due to this software failure.
                        </li>
                        <li>
                            Starbucks was forced to close about 60 percent of stores in the U.S and Canada due to software failure in its POS system. At one point, the store served coffee for free as they were unable to process the transaction.
                        </li>
                        <li>
                            Some of Amazon’s third-party retailers saw their product price is reduced to 1p due to a software glitch. They were left with heavy losses.
                        </li>
                        <li>
                            Vulnerability in Windows 10. This bug enables users to escape from security sandboxes through a flaw in the win32k system.
                        </li>
                        <li>
                            In 2015 fighter plane F-35 fell victim to a software bug, making it unable to detect targets correctly.
                        </li>
                        <li>
                            China Airlines Airbus A300 crashed due to a software bug on April 26, 1994, killing 264 innocents live
                        </li>
                        <li>
                            In 1985, Canada’s Therac-25 radiation therapy machine malfunctioned due to software bug and delivered lethal radiation doses to patients, leaving 3 people dead and critically injuring 3 others.
                        </li>
                        <li>
                            In April of 1999, a software bug caused the failure of a $1.2 billion military satellite launch, the costliest accident in history
                        </li>
                        <li>
                            In May of 1996, a software bug caused the bank accounts of 823 customers of a major U.S. bank to be credited with 920 million US dollars.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3>What are the benefits of Software Testing?</h3>
                    <p className='fs-5 fw-semibold'>Here are the benefits of using software testing:</p>
                    <ul className='fs-4'>
                        <li>
                            <span className='fw-bold'>Cost-Effective:</span> It is one of the important advantages of software testing. Testing any IT project on time helps you to save your money for the long term. In case if the bugs caught in the earlier stage of software testing, it costs less to fix.
                        </li>
                        <li>
                            <span className='fw-bold'>Security:</span> It is the most vulnerable and sensitive benefit of software testing. People are looking for trusted products. It helps in removing risks and problems earlier.
                        </li>
                        <li>
                            <span className='fw-bold'>Product quality:</span> It is an essential requirement of any software product. Testing ensures a quality product is delivered to customers.
                        </li>
                        <li>
                            <span className='fw-bold'>Customer Satisfaction:</span> The main aim of any product is to give satisfaction to their customers. UI/UX Testing ensures the best user experience.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3>Testing in Software Engineering</h3>
                    <p className='fs-4'>As per ANSI/IEEE 1059, Testing in Software Engineering is a process of evaluating a software product to find whether the current software product meets the required conditions or not. The testing process involves evaluating the features of the software product for requirements in terms of any missing requirements, bugs or errors, security, reliability and performance.
                    </p>
                </div>

                <div className="mt-5">
                    <h3>Types of Software Testing</h3>
                    <p className='fs-4'>As per ANSI/IEEE 1059, Testing in Software Engineering is a process of evaluating a software product to find whether the current software product meets the required conditions or not. The testing process involves evaluating the features of the software product for requirements in terms of any missing requirements, bugs or errors, security, reliability and performance.
                    </p>
                </div>

            </div>


            {/* <div className="mt-5">
                    <h3>History of Technology?</h3>
                    <p className='fs-4'>The history of technology is the history of the invention of tools and techniques and is one of the categories of world history. Technology can refer to methods ranging from as simple as stone tools to the complex genetic engineering and information technology that has emerged since the 1980s. The term technology comes from the Greek word techne, meaning art and craft, and the word logos, meaning word and speech. It was first used to describe applied arts, but it is now used to describe advancements and changes which affect the environment around us.</p>

                    <p className='fs-4'>New knowledge has also enabled people to create new things, and conversely, many scientific endeavors are made possible by technologies which assist humans in traveling to places they could not previously reach, and by scientific instruments by which we study nature in more detail than our natural senses allow.</p>
                    <p className='fs-4'>Since much of technology is applied science, technical history is connected to the history of science. Since technology uses resources, technical history is tightly connected to economic history. From those resources, technology produces other resources, including technological artifacts used in everyday life. Technological change affects, and is affected by, a society's cultural traditions. It is a force for economic growth and a means to develop and project economic, political, military power and wealth.</p>
                </div> */}


            <div>
                <h1>References:</h1>
                <p>https://www.guru99.com/software-testing-introduction-importance.html</p>
            </div>
        </>
    )
}

export default SoftwareTestingBlog