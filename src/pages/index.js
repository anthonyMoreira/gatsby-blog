import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import contentStyle from '../components/content.module.css'

class RootIndex extends React.Component {
	render() {
		const siteTitle = get(
			this,
			'props.data.site.siteMetadata.title'
		)
		const posts = get(
			this,
			'props.data.allContentfulBlogPost.edges'
		)
		const author = get(this, 'props.data.contentfulPerson')

		return (
			<Layout location={this.props.location}>
				<div>
					<Helmet title={siteTitle} />
					<ul
						className={
							contentStyle.articleList
						}
					>
						{posts.map(({ node }) => {
							return (
								<li
									key={
										node.slug
									}
								>
									<ArticlePreview
										article={
											node
										}
									/>
								</li>
							)
						})}
					</ul>
				</div>
			</Layout>
		)
	}
}

export default RootIndex

export const pageQuery = graphql`
	query HomeQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulBlogPost(
			sort: { fields: [publishDate], order: DESC }
		) {
			edges {
				node {
					title
					slug
					publishDate(
						formatString: "MMMM Do, YYYY"
					)
					tags
					heroImage {
						fluid(
							maxWidth: 350
							maxHeight: 196
							resizingBehavior: SCALE
						) {
							...GatsbyContentfulFluid_tracedSVG
						}
					}
					description {
						childMarkdownRemark {
							html
						}
					}
				}
			}
		}
	}
`
