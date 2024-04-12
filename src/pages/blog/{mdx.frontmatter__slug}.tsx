import React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { HeadFC, HeadProps, PageProps, graphql } from "gatsby";


type DataProps = {
    mdx: {
        frontmatter: {
            date: string;
            title: string;
        },
        id: string;
    }
  }


const title = "Individual Girls"

const BlogPost: React.FC<PageProps<DataProps>> = ({data, children}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            {children}
        </Layout>
    );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head: HeadFC<DataProps> = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost