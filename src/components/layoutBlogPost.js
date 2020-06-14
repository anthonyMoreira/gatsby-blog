import React from 'react'
import { Link } from 'gatsby'
import style from './layoutBlogPost.module.css'
import Content from './content'
class LayoutBlogPost extends React.Component {
  render() {
    const { location, children } = this.props
	  return (<div className={style.layout}>
		  	<Link to="/" className={style.homeButton}> All Articles</Link>
			<Content children={children}/>
	  	   </div>
    )
  }
}

export default LayoutBlogPost
