import * as React from 'react'
import { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import GalleryArray from '../components/galleryArray'

const title = "Pretty Women"

const Gallery: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle={title}>
            <GalleryArray take={4}/>
        </Layout>
    )
}

export const Head: HeadFC = () => <Seo title={title} />

export default Gallery;