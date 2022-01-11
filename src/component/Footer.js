import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footertop">
                    <div className='footerabout'>
                        <h1>Zayan Health Care</h1>
                        <p class="card-text">We're empowering people everywhere to live their healthiest lives. Zayan Health is on a mission to address the full spectrum of health and well-being—not only when people are sick but also throughout their lifelong journeys to achieve better health.</p>
                        <p>Zayan Health is the world's only integrated virtual care system for delivering, enabling and empowering whole-person health—from wellness and prevention to acute care to complex healthcare needs.</p>
                        
                    </div>
                    <div className='footerform'>
                        <h1>Contact us</h1>
                        <form>
                            <div className="mb-3">
                                <input type="name" className="form-control" id="name" placeholder='Enter your name' />
                            </div>

                            <div className="mb-3">
                                <input type="number" className="form-control" id="exampleInputEmail1" placeholder='Enter your mobile number' />
                            </div>

                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter your email' />
                            </div>

                            <div className="mb-3">
                                <textarea type="textarea" name='message' className="form-control" placeholder='Write your message'  ></textarea>

                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className='footercontact'>
                        <h1>Contact Information</h1>
                         <p><i class="fas fa-home fahome"></i> 1605 D2, Nirala State, Noida Extension, Greater Noida West, Uttar Pradesh 201309</p>
                        <p><i class="fas fa-mobile fahome"></i> +91 989 125 3451, +91 999 548 85477</p>
                        <p><i class="fas fa-envelope-square fahome"></i> <a href="mailto:akram.khan22@gmail.com">akram.khan22@gmail.com</a></p>
                      <div className='socialmedia'><p>
                        <i class="fab fa-facebook facebook"></i> 
                        <i class="fab fa-youtube youtube"></i>
                        <i class="fab fa-twitter twitter"></i>
                        <i class="fab fa-linkedin linkedin"></i>
                        <i class="fab fa-instagram instagram"></i>
                        <i class="fab fa-pinterest pinterest"></i>
                        <i class="fab fa-skype skype"></i>
                        <i class="fab fa-whatsapp whatsapp"></i>
                        <i class="fab fa-google-plus gplus"></i>
                        </p></div>  
                    </div>
                </div>
                <div className='copyright'>
                    <h1>Zayan Health Care</h1>
                    <p>Copyright © 2021, Zayan. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Footer
