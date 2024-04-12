import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { HeadFC, PageProps, graphql } from 'gatsby'

type nodeObject = {
    name: string
}

type DataProps = {
    allFile: {
      nodes: nodeObject[]
    }
  }

const title = "Posts"

const BlogPage: React.FC<PageProps<DataProps>> = ({ data }) => {
    return (
        <Layout pageTitle={title}>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name  
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title={title} />

export default BlogPage