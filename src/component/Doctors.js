import React from 'react'

const Doctors = () => {
    return (
        <>
            <div className="doctors">
            
                <div className="row row-cols-1 row-cols-md-4 g-4">
                
                    <div className="col">
                        <div className="card h-100">
                            <img src="images/dentist.jpg" className="card-img-top" alt="dentist" />
                            <div className="card-body">
                                <h5 className="card-title">Dentist</h5>
                                <p className="card-text">Teething troubles? Schedule a dental checkup</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="images/gynecologist.jpg" className="card-img-top" alt="gynecologist" />
                            <div className="card-body">
                                <h5 className="card-title">Gynecologist</h5>
                                <p className="card-text">Explore for women's health, pregnancy and infertility treatments</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="images/general-doctor.jpg" className="card-img-top" alt="general-doctor" />
                            <div className="card-body">
                                <h5 className="card-title">General Physician</h5>
                                <p className="card-text">Find the right family doctor in your neighborhood</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="images/pediatrician.jpg" className="card-img-top" alt="pediatrician" />
                            <div className="card-body">
                                <h5 className="card-title">Pediatrician</h5>
                                <p className="card-text">Child Specialists and Doctors for Infant</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Doctors
