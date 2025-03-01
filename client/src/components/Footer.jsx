import React from "react"

function Footer() {
  return (
    <>
    
   
    {/* footer code */}
    <div className="container-fluid bg-dark  p-5 footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6 ">
                    <h4 className=" mb-4">Get In Touch</h4>
                    <h2 className="text-primary mb-4"><i className="fa fa-car text-white me-2"></i>Education</h2>
                    <p className="mb-2 text-light"><i className="fa fa-map-marker-alt me-3"></i>Infront of Dr. M.D. Gupta Rajeswari Road, Shankar Colony ,Shivpuri ,Madhya Pradesh ,4735551</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 7974249633</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>apusprajapati@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Popular Links</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <form action="">
                        <div className="input-group d-flex justify-content-center align-item-center">
                            <div>
                            <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address"/>
                            </div>
                           <div>
                           <button className="btn btn-primary">Sign Up</button>
                           </div>
                            
                        </div>
                    </form>
                    <h6 className="mt-4 mb-3">Follow Us</h6>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* copyright code */}
    <div className="container-fluid copyright  text-light py-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-white text-md-start mb-3 mb-md-0 text-light">
                    <span className="text-bg-light">&copy;</span> <a href="#">Advanced Computer Classes</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <a href="">Owned By Advanced Computer Clases</a>
                </div>
            </div>
        </div>
    </div>
   


      
    
    
    </>
  )
}

export default Footer
