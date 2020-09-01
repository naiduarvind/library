import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Feature, SiteMetadata } from "../components"
import { useModal } from "../context"
import { Layout } from "../layouts/Layout"

export default props => {
  const { data, location } = props
  const {
    author,
    description,
    image: {
      localFiles: [cover],
    },
    name,
    tags,
    url,
  } = data.item.data
  const navigation = location.state ? location.state.navigation : null
  const { modal } = useModal()

  return (
    <Layout navigation={navigation}>
      <SiteMetadata title={name} image={cover.url} />
      <article className={modal && "max-h-80vh md:max-h-90vh overflow-auto"}>
        <div className={modal ? "p-4 lg:p-8" : "container py-8"}>
          <h1 className="text-2xl lg:text-3xl text-blue-500 font-bold leading-tight">
            {name}
          </h1>
          <div className="flex flex-wrap">
            <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">
              <Img style={{ margin: 'auto', display: 'block' }} fixed={cover.childImageSharp.fixed} alt={name} />
            </div>
            <div className="w-full lg:w-2/5 lg:pl-4">
              <Feature label="Author" value={author} />
              <Feature label="Tags" value={tags} />
              <Feature label="More info" value={url} />
              <Feature label="Description" value={description} />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query SingleItemQuery($slug: String!) {
    item: airtable(data: { slug: { eq: $slug } }) {
      data {
        author
        description
        name
        image {
          localFiles {
            url: publicURL
            childImageSharp {
              fixed(width: 200, height: 270) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        slug
        tags
        url
        rating
      }
    }
  }
`
