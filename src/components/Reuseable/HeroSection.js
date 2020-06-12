import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({img,tittle,subtitle,heroclass}) {
    return (
        <BackgroundImage
        className={heroclass}
        fluid={img}>
         <h1 className="text-white text-uppercase text-center display-4">{tittle}</h1>
         <div>
             <h4 className="text-warning">{subtitle}</h4>
         </div>
        </BackgroundImage>
    )
}
