import React from 'react'
import background1 from './images/slide-1.jpg'
import background2 from './images/slide-2.jpg'
import background3 from './images/slide-3.jpg'


const Slider = () => {
  return (
    <>
    <section id="hero">
    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active" style={{backgroundImage: `url(${background1})`}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Welcome to <span>Company</span></h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href="" className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div>

        <div className="carousel-item" style={{backgroundImage: `url(${background2})`}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Lorem Ipsum Dolor</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href="" className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div>

        <div className="carousel-item" style={{backgroundImage: `url(${background3})`}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Sequi ea ut et est quaerat</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href="" className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div>

      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

    </div>
  </section>
    </>
  )
}

export default Slider