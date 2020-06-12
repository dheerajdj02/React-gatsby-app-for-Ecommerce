import React from 'react'
import Heading from '../Reuseable/Heading'

export default function Contact() {
    return (
        <section className="py-3">
            <Heading tittle="Contact us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action ="https://formspree.io/dheerajjain.dhe@gmail.com" method="POST">
                    <div className="form-group">
                        <input  type="text" name="name" id="name" placeholder="Your Name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input  type="email" name="email" id="email" placeholder="Your Email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input  type="text" name="mobile" id="mobile" placeholder="Your Phone" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <textarea  type="text" name="descripation" id="descripation" placeholder="Your Message" className="form-control"/>
                    </div>
                    <button className="btn btn-outline-info btn-block" type="submit">Submit</button>
                </form>
            </div>
        </section>
            
        
    )
}
