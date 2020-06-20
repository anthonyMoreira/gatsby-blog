import React from 'react'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
const TagsPage = ({
	data: {
		tagsGroup: { group },
		site: {
			siteMetadata: { title },
		},
	},
}) => (
	<Layout>
		<Helmet title={title} />
		<div>
			<h1>Tags</h1>
			<ul>
				{group.map(tag => (
					<li key={tag.fieldValue}>
						<Link
							to={`/tags/${kebabCase(
								tag.fieldValue
							)}/`}
						>
							{tag.fieldValue} (
							{tag.totalCount})
						</Link>
					</li>
				))}
			</ul>
		</div>
	</Layout>
)
export default TagsPage
export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}

		tagsGroup: allContentfulBlogPost(limit: 2000) {
			group(field: tags) {
				totalCount
				fieldValue
			}
		}
	}
`
