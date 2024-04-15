import * as React from "react"
import { HeadFC, PageProps, } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryImage from "../components/galleryImage"

const title = "Home Page"

const IndexPage: React.FC<PageProps> = () => {
  const [index, setIndex] = React.useState(0);
  const maxIndex = GalleryImage({getLength: true}) as number - 1;

  const handleIndexChange = () => {
    if (index >= maxIndex) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
    console.log(maxIndex);
  }

  return (
    <Layout pageTitle={title}>
      <p>I&apos;m making this by following the Gatsby Tutorial... mostly.</p>
      <div onClick={handleIndexChange}>
        <GalleryImage index={index} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title={title} />
