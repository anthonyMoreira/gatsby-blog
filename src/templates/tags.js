import React from 'react'

// Components
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import contentStyle from '../components/content.module.css'

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext
	const edges = data.allContentfulBlogPost.edges

	return (
		<Layout>
			<ul className={contentStyle.articleList}>
				{edges.map(({ node }) => {
					const slug = node.slug
					const title = node.title
					return (
						<li key={slug}>
							<ArticlePreview
								article={node}
							/>
						</li>
					)
				})}
			</ul>
			<Link to="/tags">All tags</Link>
		</Layout>
	)
}

export default Tags

export const pageQuery = graphql`
	query TagQuery($tag: String) {
		allContentfulBlogPost(filter: { tags: { in: [$tag] } }) {
			totalCount
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
