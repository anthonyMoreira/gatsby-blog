import React from 'react'
import { Link } from 'gatsby'
import style from './layoutBlogPost.module.css'
import Content from './content'
import Comment from './comment'

class LayoutBlogPost extends React.Component {
  render() {
    const { slug, children } = this.props
    return (
      <div className={style.layout}>
        <Link to="/" className={style.homeButton}>
          {' '}
          All Articles
        </Link>
        <Content children={children} />
        <Comment id={slug}/>
      </div>
    )
  }
}

export default LayoutBlogPost
