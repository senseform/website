import React from 'react'
import slide1 from '../assets/images/slide/slide1.jpg';

export const Contact = () => {
    return (
      <div>
      <section className="py-4 bg-info">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-auto">
            <h4>Contact Us</h4>
          </div>
          <div className="col-md-8 my-auto">
            <h6 className="float-end">Home/ Contact Us</h6>
          </div>
        </div>
      </div>
    </section>
    <section className="section bg-c-light border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
        <h3 className="main-heading">Our Company</h3>
          <div className="underline"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
          </div>
          <div className="col-md-8">
          <img src={slide1} class="d-block w-100" alt="..." />
          </div>
        </div>
          
    </div>
  </section>
  <section className="section border-bottom">
    <div className="container">
      <div className="row">
      <div className="col-md-8">
          <img src={slide1} class="d-block w-100" alt="..." />
          </div>
        <div className="col-md-4">
        <h3 className="main-heading">Our Company</h3>
          <div className="underline"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
          </div>
          
        </div>
          
    </div>
  </section>
  </div>
    )
}
