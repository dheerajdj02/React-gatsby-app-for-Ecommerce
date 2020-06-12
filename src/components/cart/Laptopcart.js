import React, { Component } from 'react'
import Heading from "../Reuseable/Heading"
import Img  from 'gatsby-image'

export default class Laptopcart extends Component {
    constructor(props){
    super(props)
    this.state= {
      djlaptops: props.djlaptops, 

    }
}
    render() {
        return (
            <section className="py-5">
                <div className="container">
                    <Heading tittle="Laptops"/>
                    <div className="row">
                        {this.props.djlaptops.map(({node}) => {
                                return(
                                    <div key={node.id}
                                        className="col-11 col-md-6 d-flex my-3 mx-auto">
                                        <Img fixed={node.image.fixed} />
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex "> 
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="mb-0 text-success ml-3">${node.price}</h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>{node.description}</small>
                                            </p>
                                            <button 
                                            className="btn btn-warning snipcart-add-item"
                                            data-item-id={node.id}
                                            data-item-name={node.title}
                                            data-item-price={node.price}
                                            data-item-url="https://learncodeonline.com"
                                            data-item-image={node.image.fixed.src}>Buy now</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
