import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-plugin-modal-routing"
import PropTypes from "prop-types"
import React from "react"
import { Feature } from "."

export const Card = props => {
  const {
    author,
    image: {
      localFiles: [cover],
    },
    name,
    navigation,
    slug,
    status,
    rating,
  } = props

  return (
    <div className="bg-white h-full rounded-md overflow-hidden hover:bg-blue-100">
      <Link to={`/${slug}`} state={{ navigation }} asModal>
        <div style={{ backgroundColor: 'rgba(247, 250, 252, 1)' }}>
          <Img style={{ margin: 'auto', display: 'block' }} fixed={cover.childImageSharp.fixed} alt={name} />
        </div>
        <div className="p-5 pb-1" style={{ paddingBottom: 'inherit' }}>
          <h1 className="text-blue-500 font-bold leading-snug">
            {name}
          </h1>
          <Feature label="Status" value={status}/>
          <Feature label="Rating" value={rating}/>
          <Feature label="Author" value={author} />
        </div>
      </Link>
    </div>
  )
}

Card.propTypes = {
  author: PropTypes.string.isRequired,
  image: PropTypes.shape({
    localFiles: PropTypes.array,
  }).isRequired,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    current: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
  slug: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
}

Card.defaultProps = {
  navigation: {},
}

export const query = graphql`
  fragment CardImageFragment on AirtableField {
    localFiles {
      childImageSharp {
        fixed(width: 180, height: 270) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
