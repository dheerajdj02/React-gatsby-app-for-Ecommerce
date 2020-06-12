import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import { graphql } from 'gatsby'
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage= ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid} 
    tittle="About Store"
    subtitle="Learn"
    heroclass="about-background"/>
    <DualInfoblock heading="A message from CEO"/>
    <InfoBlock heading="About Vision" />
    <Teamphotosection/>

    
  </Layout> 
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about.png"})  {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
export default AboutPage
