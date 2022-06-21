import React from 'react'
import "../css/Footer.css"
const Footer = () => {
    return (
        <div className="d-flex flex-column h-100 footer-body">
            <section className="hero text-white py-5 flex-grow-1">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="display-4">Shopping.com</h1><br />
                            <p className="fst-italic text-muted">Using Bootstrap 5 flexbox utilities, create a footer that always sticks to the bottom of your viewport. Snippet by <a className="text-primary" href="https://bootstrapious.com/" target="_blank">Shopping.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="w-100 py-4 flex-shrink-0 footer">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-white">FB.</h5>
                            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.<br /> <a className="text-primary" href="#">Shopping.com</a></p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Get started</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Most Rated Collection</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="#">Man </a></li>
                                <li><a href="#">Woman</a></li>
                                <li><a href="#">Kids</a></li>
                                <li><a href="#">Wedding Cloth</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">Newsletter</h5>
                            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer