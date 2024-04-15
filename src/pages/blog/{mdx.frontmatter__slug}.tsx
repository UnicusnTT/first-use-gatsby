import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import Seo from "../../components/seo";



type DataProps = {
    mdx: {
        frontmatter: {
            date: string;
            title: string;
            hero_image_alt: string;
            hero_image_credit_link: string;
            hero_image_credit_text: string;
            hero_image: {
              childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
              }
            },
        },
        id: string;
    }
  }


const title = "Individual Girls"

const BlogPost: React.FC<PageProps<DataProps>> = ({data, children}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            {(image ?
             <>
              <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
              <p>
                Credit:{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                  {data.mdx.frontmatter.hero_image_credit_text}
                </a>
              </p>
             </> : null)}
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head: HeadFC<DataProps> = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost