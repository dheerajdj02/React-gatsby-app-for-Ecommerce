import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import { graphql } from 'gatsby'
import InfoBlock from "../components/Reuseable/InfoBlock"
import Contact from "../components/Contact/contact"

const ContactPage= ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid} 
    tittle="Contact us"
    subtitle=""
    heroclass="about-background"/>
    <InfoBlock heading="How can we help" />
    <Contact/>
  </Layout> 
)

export const query = graphql`
{
  img: file(relativePath: {eq: "contact.png"})  {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
export default ContactPage
