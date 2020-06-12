import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import { graphql } from 'gatsby'
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import Laptopcart from "../components/cart/Laptopcart"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />

    <HeroSection
    img={data.img.childImageSharp.fluid}
    tittle="I write code"
    subtitle="Learn"
    heroclass="hero-background"/>
    <InfoBlock heading="About Us" />
    <Laptopcart laptop={data.djlaptops}/>
    <DualInfoblock  heading="Our products"/>
    
  </Layout> 
)

export const query = graphql`
{
  img: file(relativePath: {eq: "laptop.jpg"})  {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  djlaptops: allContentfulLaptops {
    edges {
      node {
        id
        title
        price
        category
        description
        image {
          fixed(width:200,height:200){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`
export default IndexPage
