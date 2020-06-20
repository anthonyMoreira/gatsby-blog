import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

class About extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const about = get(this, 'props.data.contentfulAbout')
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h1 className="section-headline">{about.title}</h1>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                about.childContentfulAboutDescriptionTextNode
                  .childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    )
  }
}

export default About
export const pageQuery = graphql`
  query AboutQuery {
    contentfulAbout {
      id
      title
      childContentfulAboutDescriptionTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
