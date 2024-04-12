import * as React from 'react'
import { HeadFC, PageProps, graphql, Link } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

type nodeObject = {
    frontmatter: {
        date: string;
        title: string;
        slug: string;
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
                        <h2>
                          <Link to={`/blog/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}
                          </Link>
                        </h2>
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
        slug
      }
      id
      excerpt
    }
  }
}
`

export const Head: HeadFC = () => <Seo title={title} />

export default BlogPage