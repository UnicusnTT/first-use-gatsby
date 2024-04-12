import * as React from "react"
import { HeadFC, PageProps, } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const title = "Home Page"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={title}>
      <p>I&apos;m making this by following the Gatsby Tutorial... mostly.</p>
      <StaticImage
        alt="An eye-catching illustration of Lara Croft posing in the wilderness"
        src="../images/ail3-1.jpg"
      />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title={title} />
