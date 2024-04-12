import * as React from 'react'
import { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const Secret: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle='Pretty Women'>
            <StaticImage
                alt="AI Girlfriend Emma Weber on a beach"
                src="../images/aigirlbeach7.jpg"
            />
            <StaticImage
                alt="An eye-catching illustration of Lara Croft posing in the wilderness"
                src="https://www.jsanilac.com/content/images/2023/09/ail3-1.jpg"
            />
        </Layout>
    )
}

export const Head: HeadFC = () => <title>Secret Page</title>

export default Secret;