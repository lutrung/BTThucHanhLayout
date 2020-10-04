import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div className="text-left d-flex">
                {/* RIGHT */}
                <div className="col-2">
                    <h1>Shop Name</h1>
                    <p className='p-2 m-0 text-primary border border-succes'>Category 1</p>
                    <p className='p-2 m-0 text-primary border border-succes'>Category 2</p>
                    <p className='p-2 m-0 text-primary border border-succes'>Category 3</p>
                </div>
                {/* MID */}
                <div className="col-8">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to={0} className />
                            <li data-target="#demo" data-slide-to={1} className="active" />
                            <li data-target="#demo" data-slide-to={2} className />
                        </ul>
                        {/* The slideshow */}
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <img src="./img/slide_1.jpg" alt="Los Angeles" width="100%" height={600} />
                            </div>
                            <div className="carousel-item active">
                                <img src="./img/slide_2.jpg" alt="Chicago" width="100%" height={600} />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/slide_3.jpg" alt="New York" width="100%" height={600} />
                            </div>
                        </div>
                        {/* Left and right controls */}
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon" />
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon" />
                        </a>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between">
                            <div className="card bg-light" style={{ width: 400 }}>
                                <img className="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style={{ maxWidth: '100%', height: 400 }} />
                                <div className="card-body text-left">
                                    <h4 className="card-title text-primary">Item One</h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-body border border-top-succes">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="card bg-light" style={{ width: 400 }}>
                                <img className="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style={{ maxWidth: '100%', height: 400 }} />
                                <div className="card-body text-left">
                                    <h4 className="card-title text-primary">Item Two</h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-body border border-top-succes">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="card bg-light" style={{ width: 400 }}>
                                <img className="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style={{ maxWidth: '100%', height: 400 }} />
                                <div className="card-body text-left">
                                    <h4 className="card-title text-primary">Item Three</h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-body border border-top-succes">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div className="d-flex justify-content-between">
                            <div className="card bg-light" style={{ width: 400 }}>
                                <img className="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style={{ maxWidth: '100%', height: 400 }} />
                                <div className="card-body text-left">
                                    <h4 className="card-title text-primary">Item Four</h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-body border border-top-succes">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="card bg-light" style={{ width: 400 }}>
                                <img className="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style={{ maxWidth: '100%', height: 400 }} />
                                <div className="card-body text-left">
                                    <h4 className="card-title text-primary">Item Five</h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-body border border-top-succes">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="card bg-light" style={{ width: 400 }}>
                                <img className="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style={{ maxWidth: '100%', height: 400 }} />
                                <div className="card-body text-left">
                                    <h4 className="card-title text-primary">Item Six</h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="card-body border border-top-succes">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
                {/* LEFT */}
                <div className="col-2">

                </div>
            </div>
        )
    }
}
