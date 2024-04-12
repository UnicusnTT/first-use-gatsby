import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { HeadFC, PageProps, graphql } from 'gatsby'

type nodeObject = {
    frontmatter: {
        date: string;
        title: string;
    },
    id: string;
    excerpt: string;
}

type DataProps = {
    allMdx: {
      nodes: nodeObject[]
    }
  }

const title = "Posts"

const BlogPage: React.FC<PageProps<DataProps>> = ({ data }) => {
    return (
        <Layout pageTitle={title}>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
  query MyQuery {
  allMdx(sort: { frontmatter: { date: ASC } }) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      excerpt
    }
  }
}
`

export const Head: HeadFC = () => <Seo title={title} />

export default BlogPage