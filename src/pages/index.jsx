import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="The (*)bility Engineer"
        description="Check out my e-collection of articles, conference talks, papers, reports, Twitter threads and videos."
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="#library"
        title="The (*)bility Engineer"
        description="Check out my e-collection of articles, conference talks, papers, reports, Twitter threads and videos."
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
          country
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
        }
      }
    }
  }
`
