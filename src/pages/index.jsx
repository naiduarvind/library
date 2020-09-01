import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="The (*)bility Engineer's Library"
        description="Collection of books, articles, papers, reports, Twitter threads and videos."
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        title="The (*)bility Engineer's Library"
        description="Collection of books, articles, papers, reports, Twitter threads and videos."
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "e-library.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          author
          image {
            ...CardImageFragment
          }
          name
          slug
          rating
        }
      }
    }
  }
`
