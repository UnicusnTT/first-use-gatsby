import * as React from 'react'
import { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import GalleryImage from '../components/galleryImage'

const title = "About Us"

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle={title}>
            <p>Ello! I'm sorry to have to tell you this, but it simply couldn't work out between us!</p>
            <p>Here is a pretty woman for you!</p>
            <GalleryImage index={3} />
        </Layout>
    )
}

export const Head: HeadFC = () => (
    <Seo title={title} />
);

export default AboutPage