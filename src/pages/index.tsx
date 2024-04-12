import * as React from "react"
import { HeadFC, PageProps, } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I&apos;m making this by following the Gatsby Tutorial... mostly.</p>
      <StaticImage
        alt="An eye-catching illustration of Lara Croft posing in the wilderness"
        src="https://www.jsanilac.com/content/images/2023/09/ail3-1.jpg"
      />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
