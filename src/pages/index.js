import * as React from "react"
import About from "../components/about"
import Banner  from "../components/banner"
import Projects  from "../components/projects"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contacts from "../components/contact"



const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
      <Banner/>
      <About/>
      <Projects/>
      <Contacts/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="" />

export default IndexPage
