import { useStaticQuery, graphql } from "gatsby"
export const useAuthor = () => {
  const { contentfulPerson } = useStaticQuery(
    graphql`
      query Author {
	       contentfulPerson {
		    email
		    github
		    twitter
		    linkedIn
		    company
		    copyright
		    sidebarBio
		    shortBio {
		      childMarkdownRemark {
		        html
		      }
		    }
		    name
		    image {
		      id
		      fixed(width: 75, height: 75) {
		         ...GatsbyContentfulFixed_tracedSVG
		      }
		      description
		    }
		}
      }
    `
  )
  return contentfulPerson
}
