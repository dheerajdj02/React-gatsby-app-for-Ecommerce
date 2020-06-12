import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'
import lap from '../../images/hplap.jpeg';

export default function DualInfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading tittle={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                    <div className="col-4">
                        <div className="card bg-dark">
                            <img src={lap} className="card-img-top" alt="Image loading"/>
                            <div className="card-body">
                                <h5 className="card-title text-white">HP Pavillion</h5>
                                <p className="card-text text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                <button className="btn btn-warning btn-block"><Link to="/" className="text-white" >{heading}</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
