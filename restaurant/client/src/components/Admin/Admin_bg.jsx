import React from 'react'

function Admin_bg() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="/mra.jpg" className="card-img-top images2" alt="..." id='bg-knr-img' />
                                <div className="card-body">
                                    <h5 className="card-title" >Restaurant Name  <a href="/kannur/mra" value='' >
                                         More
                                        </a></h5>
                                    {/* <p className="card-text"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>1234
                                       </p> */}
                                      
                                        <p>
                                    <a href="" className="btn btn-primary">
                                        Accept
                                    </a>
                                    <a href="" className="btn btn-danger">
                                        Reject
                                    </a>
                                    
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Admin_bg