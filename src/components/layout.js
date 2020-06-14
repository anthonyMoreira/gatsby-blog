import React from 'react'
import { Link } from 'gatsby'
import style from './layout.module.css'
import Sidebar from './sidebar'
import Content from './content'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={style.layout}>
        <Sidebar />
	<Content children={children} />
      </div>
    )
  }
}

export default Layout
