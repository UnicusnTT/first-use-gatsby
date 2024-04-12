import * as React from 'react'
import { HeadFC, Link, PageProps } from 'gatsby'

import Layout from '../components/layout'

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle='About Us'>
            <p>Ello! I'm sorry to have to tell you this, but it simply couldn't work out between us!</p>
        </Layout>
    )
}

export const Head: HeadFC = () => (
    <>
        <title>About us</title>
        <meta name="description" content="Our description" />
    </>
)

export default AboutPage